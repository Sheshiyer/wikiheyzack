import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { DocumentMeta, getAllDocuments } from '../lib/markdown';

export default function SearchPage() {
  const router = useRouter();
  const { q: initialQuery } = router.query;
  const [query, setQuery] = useState<string>((initialQuery as string) || '');
  const [results, setResults] = useState<DocumentMeta[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    if (typeof initialQuery === 'string' && initialQuery) {
      setQuery(initialQuery);
      handleSearch(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    try {
      // Get all documents
      const allDocuments = getAllDocuments();
      
      // Search through documents
      const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);
      
      const searchResults = allDocuments.filter(doc => {
        const searchContent = `${doc.title} ${doc.excerpt} ${doc.tags?.join(' ') || ''}`.toLowerCase();
        return searchTerms.some(term => searchContent.includes(term));
      });
      
      setResults(searchResults);
    } catch (error) {
      console.error('Error searching documents:', error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`, undefined, { shallow: true });
    handleSearch(query);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>{`Search - HeyZack Wiki`}</title>
        <meta name="description" content="Search across all documentation and resources for HeyZack" />
      </Head>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Search Documentation</h1>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for documents, topics, keywords..."
              className="w-full p-4 pr-12 rounded-lg border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-4 top-4 text-secondary-500 hover:text-secondary-700 dark:hover:text-secondary-300"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </div>
        </form>

        {/* Search Results */}
        <div>
          {isSearching ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
              <p className="mt-4 text-secondary-600 dark:text-secondary-400">Searching documents...</p>
            </div>
          ) : query.trim() && results.length === 0 ? (
            <div className="text-center py-8 bg-secondary-50 dark:bg-secondary-800 rounded-lg">
              <p className="text-lg text-secondary-600 dark:text-secondary-400">No results found for "{query}"</p>
              <p className="mt-2 text-secondary-500 dark:text-secondary-500">Try a different search term or browse by category</p>
            </div>
          ) : (
            <div className="space-y-6">
              {results.length > 0 && (
                <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                  {results.length} {results.length === 1 ? 'result' : 'results'} found
                </p>
              )}
              
              {results.map((doc) => (
                <Link
                  key={`${doc.category}-${doc.slug}`}
                  href={`/category/${doc.category.toLowerCase()}/${doc.slug}`}
                  className="block p-6 rounded-lg bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100 px-2 py-0.5 rounded-full mr-2">
                          {doc.category}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold mb-2 text-primary-600 dark:text-primary-400">{doc.title}</h2>
                      <p className="text-secondary-600 dark:text-secondary-400 mb-2">{doc.excerpt}</p>
                      
                      {doc.tags && doc.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {doc.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag}
                              className="text-xs bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 px-2 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
