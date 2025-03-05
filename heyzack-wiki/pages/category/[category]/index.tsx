import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { DOCUMENT_CATEGORIES } from '../../../lib/documents';
import { DocumentMeta, getAllDocumentsForCategory, groupDocumentsBySection } from '../../../lib/markdown';
import SectionHeader from '../../../components/SectionHeader';

interface CategoryPageProps {
  documents: DocumentMeta[];
  documentsBySection: { [section: string]: DocumentMeta[] };
  category: string;
  categoryDescription: string;
}

export default function CategoryPage({ documents, documentsBySection, category, categoryDescription }: CategoryPageProps) {
  // Determine if we should use sections (for Strategy and Launchboom categories)
  const useSections = (category === 'Strategy' || category === 'Launchboom') && Object.keys(documentsBySection).length > 0;
  
  // Section descriptions for Strategy and Launchboom categories
  const sectionDescriptions: { [key: string]: string } = {
    // Strategy section descriptions
    'Financial Metrics': 'Key financial indicators and metrics for tracking business performance',
    'Market Analysis': 'Analysis of market size, potential, and fit for HeyZack products',
    'Brand Strategy': 'Strategic approaches to brand positioning and identity',
    'Product Strategy': 'Product development, experience, and customer-focused strategies',
    'Implementation': 'Roadmaps, team structures, and implementation guides',
    'Other': 'Additional strategy documents and resources',
    
    // Launchboom section descriptions
    'Product Information': 'Overview of HeyZack smart home products and features',
    'Smart Home Kits': 'Detailed information about HeyZack smart home kit packages and pricing',
    'Automation Solutions': 'Real-world automation scenarios and use cases for HeyZack products',
    'Other Launchboom Documents': 'Additional resources related to Launchboom campaigns'
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Head>
        <title>{`${category} Documentation - HeyZack Wiki`}</title>
        <meta name="description" content={`Browse ${category} documentation and resources for HeyZack`} />
      </Head>

      <div className="mb-8">
        {/* Breadcrumb */}
        <div className="breadcrumb mb-4">
          <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
          <span className="breadcrumb-separator mx-2 text-secondary-400">/</span>
          <span className="text-secondary-600 dark:text-secondary-400">{category}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{category} Documentation</h1>
        <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8">
          {categoryDescription}
        </p>

        {useSections ? (
          // Sectioned layout for Strategy and Launchboom categories
          <div className="space-y-12">
            {Object.entries(documentsBySection).map(([section, sectionDocs]) => (
              <div key={section} className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-md">
                <SectionHeader 
                  title={section} 
                  description={sectionDescriptions[section] || ''}
                  className="border-b border-secondary-200 dark:border-secondary-700 pb-4"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {sectionDocs.map((doc) => (
                    <Link
                      key={doc.slug}
                      href={`/category/${category.toLowerCase()}/${doc.slug}`}
                      className="block p-5 rounded-lg bg-secondary-50 dark:bg-secondary-700 hover:shadow-md transition-shadow border border-secondary-100 dark:border-secondary-600"
                    >
                      <h3 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">{doc.title}</h3>
                      <p className="text-secondary-600 dark:text-secondary-400 mb-3 line-clamp-2 text-sm">{doc.excerpt}</p>
                      <div className="flex flex-wrap gap-1">
                        {doc.tags && doc.tags.length > 0 && doc.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs bg-secondary-100 dark:bg-secondary-600 text-secondary-700 dark:text-secondary-300 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {doc.tags && doc.tags.length > 2 && (
                          <span className="text-xs bg-secondary-100 dark:bg-secondary-600 text-secondary-700 dark:text-secondary-300 px-2 py-0.5 rounded-full">
                            +{doc.tags.length - 2} more
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Standard grid layout for other categories
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <Link
                key={doc.slug}
                href={`/category/${category.toLowerCase()}/${doc.slug}`}
                className="block p-6 rounded-xl bg-white dark:bg-secondary-800 shadow-md hover:shadow-lg transition-shadow border border-secondary-100 dark:border-secondary-700"
              >
                <h2 className="text-xl font-bold mb-2 text-primary-600 dark:text-primary-400">{doc.title}</h2>
                <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3">{doc.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {doc.tags && doc.tags.length > 0 && doc.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {doc.tags && doc.tags.length > 3 && (
                    <span className="text-xs bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 px-2 py-1 rounded-full">
                      +{doc.tags.length - 3} more
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(DOCUMENT_CATEGORIES).map((category) => ({
    params: { category: category.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string;
  const uppercaseCategory = Object.keys(DOCUMENT_CATEGORIES).find(
    (key) => key.toLowerCase() === category.toLowerCase()
  );

  if (!uppercaseCategory) {
    return {
      notFound: true,
    };
  }

  const documents = getAllDocumentsForCategory(uppercaseCategory);
  const categoryDescription = DOCUMENT_CATEGORIES[uppercaseCategory as keyof typeof DOCUMENT_CATEGORIES];
  
  // Group documents by section if this is the Strategy or Launchboom category
  const documentsBySection = (uppercaseCategory === 'Strategy' || uppercaseCategory === 'Launchboom')
    ? groupDocumentsBySection(documents)
    : { 'All Documents': documents };

  return {
    props: {
      documents,
      documentsBySection,
      category: uppercaseCategory,
      categoryDescription,
    },
  };
};
