import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { DOCUMENT_DIRECTORIES } from './documents';

// Base path for documents
const docsDirectory = path.join(process.cwd(), 'public/docs');

// Interface for document metadata
export interface DocumentMeta {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  tags: string[];
  relatedDocs?: string[];
  section?: string; // Added for organizing documents into sections
}

// Interface for full document with content
export interface Document extends DocumentMeta {
  content: string;
}

// Get all document files for a category
export function getDocumentFiles(category: string): string[] {
  const categoryDir = DOCUMENT_DIRECTORIES[category as keyof typeof DOCUMENT_DIRECTORIES];
  if (!categoryDir) return [];
  
  const categoryPath = path.join(docsDirectory, categoryDir);
  
  try {
    return fs.readdirSync(categoryPath)
      .filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error(`Error reading directory ${categoryPath}:`, error);
    return [];
  }
}

// Extract metadata from document content
export function getDocumentMeta(category: string, filename: string): DocumentMeta | null {
  const categoryDir = DOCUMENT_DIRECTORIES[category as keyof typeof DOCUMENT_DIRECTORIES];
  if (!categoryDir) return null;
  
  const filePath = path.join(docsDirectory, categoryDir, filename);
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Extract title from first heading if not in frontmatter
    let title = data.title;
    if (!title) {
      const titleMatch = content.match(/^# (.*)$/m);
      title = titleMatch ? titleMatch[1] : filename.replace(/\.md$/, '');
    }
    
    // Extract excerpt from content if not in frontmatter
    let excerpt = data.excerpt;
    if (!excerpt) {
      // Find the first paragraph after the title
      const paragraphs = content.split('\n\n');
      const firstParagraph = paragraphs.find(p => !p.startsWith('#') && p.trim() !== '');
      excerpt = firstParagraph 
        ? firstParagraph.replace(/^[#\s]+/, '').substring(0, 200) 
        : '';
    }
    
    // Extract tags from frontmatter or generate from content
    const tags = data.tags || [];
    
    // Extract related documents from frontmatter
    const relatedDocs = data.relatedDocs || [];
    
    // Extract section from frontmatter
    const section = data.section || '';
    
    return {
      slug: filename.replace(/\.md$/, ''),
      category,
      title,
      excerpt,
      tags,
      relatedDocs,
      section,
    };
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

// Get full document with content
export function getDocument(category: string, slug: string): Document | null {
  const categoryDir = DOCUMENT_DIRECTORIES[category as keyof typeof DOCUMENT_DIRECTORIES];
  if (!categoryDir) return null;
  
  const filePath = path.join(docsDirectory, categoryDir, `${slug}.md`);
  
  try {
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Extract title from first heading if not in frontmatter
    let title = data.title;
    if (!title) {
      const titleMatch = content.match(/^# (.*)$/m);
      title = titleMatch ? titleMatch[1] : slug;
    }
    
    // Extract excerpt from content if not in frontmatter
    let excerpt = data.excerpt;
    if (!excerpt) {
      // Find the first paragraph after the title
      const paragraphs = content.split('\n\n');
      const firstParagraph = paragraphs.find(p => !p.startsWith('#') && p.trim() !== '');
      excerpt = firstParagraph 
        ? firstParagraph.replace(/^[#\s]+/, '').substring(0, 200) 
        : '';
    }
    
    // Extract tags from frontmatter or generate from content
    const tags = data.tags || [];
    
    // Extract related documents from frontmatter
    const relatedDocs = data.relatedDocs || [];
    
    // Extract section from frontmatter
    const section = data.section || '';
    
    return {
      slug,
      category,
      title,
      content,
      excerpt,
      tags,
      relatedDocs,
      section,
    };
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

// Get all documents for a category
export function getAllDocumentsForCategory(category: string): DocumentMeta[] {
  const files = getDocumentFiles(category);
  
  return files
    .map(filename => getDocumentMeta(category, filename))
    .filter((doc): doc is DocumentMeta => doc !== null);
}

// Get all documents across all categories
export function getAllDocuments(): DocumentMeta[] {
  const categories = Object.keys(DOCUMENT_DIRECTORIES);
  
  return categories.flatMap(category => getAllDocumentsForCategory(category));
}

// Group documents by section
export function groupDocumentsBySection(documents: DocumentMeta[]): { [section: string]: DocumentMeta[] } {
  const sections: { [section: string]: DocumentMeta[] } = {};
  
  // Define default sections for Strategy documents
  const defaultStrategySections = {
    'Financial Metrics': ['annual-recurring-revenue', 'monthly-recurring-revenue', 'customer-acquisition-cost', 'lifetime-value', 'burn-rate', 'runway', 'churn-rate'],
    'Market Analysis': ['total-addressable-market', 'serviceable-available-market', 'serviceable-obtainable-market', 'product-market-fit'],
    'Brand Strategy': ['b2c-brand-strategy', 'strategic-identity-system', 'brand-measurement-framework'],
    'Product Strategy': ['product-experience', 'product-market-fit', 'ideal-customer-profile', 'acquisition-channel-strategy'],
    'Implementation': ['implementation-roadmap', 'implementation-team-structure', 'investor-presentation-guide', 'crowdfunding-campaign-toolkit']
  };
  
  documents.forEach(doc => {
    // If document has a section defined in frontmatter, use that
    if (doc.section) {
      if (!sections[doc.section]) {
        sections[doc.section] = [];
      }
      sections[doc.section].push(doc);
    } 
    // For Strategy documents, try to categorize based on slug
    else if (doc.category === 'Strategy') {
      let assigned = false;
      
      // Check if the document slug matches any of the default sections
      Object.entries(defaultStrategySections).forEach(([section, slugs]) => {
        if (slugs.includes(doc.slug)) {
          if (!sections[section]) {
            sections[section] = [];
          }
          sections[section].push(doc);
          assigned = true;
        }
      });
      
      // If not assigned to any section, put in "Other"
      if (!assigned) {
        if (!sections['Other']) {
          sections['Other'] = [];
        }
        sections['Other'].push(doc);
      }
    } 
    // For other categories, put all in "All Documents"
    else {
      if (!sections['All Documents']) {
        sections['All Documents'] = [];
      }
      sections['All Documents'].push(doc);
    }
  });
  
  return sections;
}
