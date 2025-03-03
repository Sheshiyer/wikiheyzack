import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getAllDocuments, DOCUMENT_CATEGORIES } from '../lib/documents';
import { DocumentType } from '../lib/documents';

interface DocumentMapProps {
  documents: DocumentType[];
  categories: {
    [key: string]: {
      count: number;
      description: string;
    };
  };
}

export default function DocumentMap({ documents, categories }: DocumentMapProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [showConnections, setShowConnections] = useState(true);
  
  // Generate all unique tags from documents
  const allTags = Array.from(
    new Set(
      documents.flatMap((doc) => doc.tags)
    )
  ).sort();

  // Filter documents based on active category and tags
  const filteredDocuments = documents.filter((doc) => {
    if (activeCategory && doc.category !== activeCategory) {
      return false;
    }
    
    if (activeTags.length > 0) {
      return activeTags.some((tag) => doc.tags.includes(tag));
    }
    
    return true;
  });

  const toggleTag = (tag: string) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    <div>
      <Head>
        <title>{`Document Map - HeyZack Wiki`}</title>
        <meta name="description" content="Visualize and navigate the relationships between documents" />
      </Head>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Document Map</h1>
        <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8">
          Visualize and explore document relationships by category, topic, or tag.
        </p>
      </div>

      {/* Filters Section */}
      <div className="mb-8 p-6 bg-white dark:bg-secondary-800 rounded-xl shadow-md">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                !activeCategory
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200'
                  : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300'
              }`}
            >
              All Categories
            </button>
            
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category === activeCategory ? null : category)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  category === activeCategory
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200'
                    : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300'
                }`}
              >
                {category} ({categories[category].count})
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Filter by Tag</h2>
            {activeTags.length > 0 && (
              <button
                onClick={() => setActiveTags([])}
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Clear Tags
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-2 py-1 rounded-lg text-xs font-medium ${
                  activeTags.includes(tag)
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200'
                    : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Document Map Visualization */}
      <div className="mb-8">
        <div className="p-6 bg-white dark:bg-secondary-800 rounded-xl shadow-md mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Document Relationships</h2>
            <div className="flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <span className="mr-2 text-sm text-secondary-600 dark:text-secondary-400">Show Connections</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={showConnections}
                    onChange={() => setShowConnections(!showConnections)}
                    className="sr-only"
                  />
                  <div className={`w-10 h-5 rounded-full transition-colors ${
                    showConnections ? 'bg-primary-500' : 'bg-secondary-300 dark:bg-secondary-600'
                  }`}></div>
                  <div className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                    showConnections ? 'transform translate-x-5' : ''
                  }`}></div>
                </div>
              </label>
            </div>
          </div>

          {/* Document Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <div
                  key={`${doc.category}-${doc.slug}`}
                  className={`p-4 rounded-lg border-2 ${
                    doc.category === 'B2B'
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : doc.category === 'Strategy'
                      ? 'border-secondary-500 bg-secondary-50 dark:bg-secondary-800/50'
                      : 'border-b2c-500 bg-b2c-50 dark:bg-b2c-900/20'
                  }`}
                >
                  <Link
                    href={`/category/${doc.category.toLowerCase()}/${doc.slug}`}
                    className="block"
                  >
                    <h3 className="font-bold mb-2 hover:underline">{doc.title}</h3>
                  </Link>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-3 line-clamp-2">
                    {doc.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {doc.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-white dark:bg-secondary-700 px-1.5 py-0.5 rounded text-secondary-700 dark:text-secondary-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {doc.tags.length > 3 && (
                      <span className="text-xs bg-white dark:bg-secondary-700 px-1.5 py-0.5 rounded text-secondary-700 dark:text-secondary-300">
                        +{doc.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {showConnections && doc.relatedDocs.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-secondary-200 dark:border-secondary-700">
                      <h4 className="text-xs font-medium mb-1 text-secondary-500">Related Documents:</h4>
                      <ul className="text-xs space-y-1">
                        {doc.relatedDocs.slice(0, 2).map((relatedSlug) => {
                          const relatedDoc = documents.find((d) => d.slug === relatedSlug && d.category === doc.category);
                          return relatedDoc ? (
                            <li key={relatedSlug} className="truncate">
                              <Link 
                                href={`/category/${doc.category.toLowerCase()}/${relatedSlug}`}
                                className="text-primary-600 dark:text-primary-400 hover:underline"
                              >
                                {relatedDoc.title}
                              </Link>
                            </li>
                          ) : null;
                        })}
                        {doc.relatedDocs.length > 2 && (
                          <li className="text-secondary-500">+{doc.relatedDocs.length - 2} more</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center bg-secondary-50 dark:bg-secondary-800 rounded-lg">
                <p className="text-lg text-secondary-600 dark:text-secondary-400">No documents match the selected filters</p>
                <button
                  onClick={() => {
                    setActiveCategory(null);
                    setActiveTags([]);
                  }}
                  className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Document Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white dark:bg-secondary-800 rounded-xl shadow-md">
            <h3 className="font-bold mb-2">Document Count</h3>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{documents.length}</div>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">Total documents</p>
          </div>
          
          <div className="p-4 bg-white dark:bg-secondary-800 rounded-xl shadow-md">
            <h3 className="font-bold mb-2">Categories</h3>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{Object.keys(categories).length}</div>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">Document categories</p>
          </div>
          
          <div className="p-4 bg-white dark:bg-secondary-800 rounded-xl shadow-md">
            <h3 className="font-bold mb-2">Tags</h3>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{allTags.length}</div>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">Unique document tags</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    // Get all documents
    const documents = getAllDocuments();
    
    // Count documents by category
    const categories: DocumentMapProps['categories'] = {};
    
    Object.entries(DOCUMENT_CATEGORIES).forEach(([key, description]) => {
      const categoryDocs = documents.filter(doc => doc.category === key);
      categories[key] = {
        count: categoryDocs.length,
        description: description as string
      };
    });
    
    return {
      props: {
        documents,
        categories
      },
      revalidate: 10
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        documents: [],
        categories: {}
      },
      revalidate: 10
    };
  }
}
