import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { DOCUMENT_CATEGORIES } from '../../../lib/documents';
import { Document, getAllDocuments, getDocument, getAllDocumentsForCategory } from '../../../lib/markdown';
import MarkdownRenderer from '../../../components/MarkdownRenderer';
import TableOfContents from '../../../components/TableOfContents';

interface DocumentPageProps {
  document: Document;
  relatedDocuments: Document[];
  nextDocument: Document | null;
  prevDocument: Document | null;
}

export default function DocumentPage({ document, relatedDocuments, nextDocument, prevDocument }: DocumentPageProps) {
  useEffect(() => {
    // Initialize mermaid on client side
    import('mermaid').then((mermaid) => {
      mermaid.default.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
      });
      mermaid.default.run();
    });
  }, [document]);

  if (!document) {
    return <div>Document not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Head>
        <title>{`${document.title} - HeyZack Wiki`}</title>
        <meta name="description" content={document.excerpt} />
      </Head>

      <div className="mb-8">
        {/* Breadcrumb */}
        <div className="breadcrumb mb-4">
          <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
          <span className="breadcrumb-separator mx-2 text-secondary-400">/</span>
          <Link href={`/category/${document.category.toLowerCase()}`} className="text-primary-600 dark:text-primary-400 hover:underline">{document.category}</Link>
          <span className="breadcrumb-separator mx-2 text-secondary-400">/</span>
          <span className="text-secondary-600 dark:text-secondary-400">{document.title}</span>
        </div>

        {/* Document Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{document.title}</h1>
        
        {/* Tags */}
        {document.tags && document.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {document.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Main Content and Sidebar Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar - Table of Contents */}
        <div className="lg:w-1/4 order-2 lg:order-1">
          <div className="sticky top-8">
            <TableOfContents className="bg-white dark:bg-secondary-800 rounded-lg p-4 mb-6 shadow-sm" />
            
            {/* Related Documents */}
            {relatedDocuments.length > 0 && (
              <div className="bg-white dark:bg-secondary-800 rounded-lg p-4 mb-6 shadow-sm">
                <h2 className="font-bold text-lg mb-3">Related Documents</h2>
                <ul className="space-y-3">
                  {relatedDocuments.map((relatedDoc) => (
                    <li key={relatedDoc.slug}>
                      <Link
                        href={`/category/${relatedDoc.category.toLowerCase()}/${relatedDoc.slug}`}
                        className="text-primary-600 dark:text-primary-400 hover:underline block text-sm"
                      >
                        {relatedDoc.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Category List */}
            <div className="bg-white dark:bg-secondary-800 rounded-lg p-4 shadow-sm">
              <h2 className="font-bold text-lg mb-3">Categories</h2>
              <ul className="space-y-2">
                {Object.keys(DOCUMENT_CATEGORIES).map((category) => (
                  <li key={category}>
                    <Link
                      href={`/category/${category.toLowerCase()}`}
                      className={`block text-sm ${
                        document.category === category
                          ? 'font-bold text-primary-600 dark:text-primary-400'
                          : 'text-secondary-700 dark:text-secondary-300'
                      }`}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 order-1 lg:order-2">
          <div className="bg-white dark:bg-secondary-800 rounded-lg p-6 shadow-sm">
            <div className="prose dark:prose-invert prose-primary max-w-none mb-8">
              <MarkdownRenderer content={document.content} />
            </div>
          </div>

          {/* Document Navigation */}
          <div className="flex justify-between items-center border-t border-secondary-200 dark:border-secondary-700 pt-6 mt-8">
            {prevDocument ? (
              <Link
                href={`/category/${prevDocument.category.toLowerCase()}/${prevDocument.slug}`}
                className="flex items-center text-primary-600 dark:text-primary-400 hover:underline"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {prevDocument.title}
              </Link>
            ) : (
              <div></div>
            )}
            
            {nextDocument ? (
              <Link
                href={`/category/${nextDocument.category.toLowerCase()}/${nextDocument.slug}`}
                className="flex items-center text-primary-600 dark:text-primary-400 hover:underline"
              >
                {nextDocument.title}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allDocuments = getAllDocuments();
  
  const paths = allDocuments.map((doc) => ({
    params: { category: doc.category.toLowerCase(), slug: doc.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string;
  const slug = params?.slug as string;
  
  const uppercaseCategory = Object.keys(DOCUMENT_CATEGORIES).find(
    (key) => key.toLowerCase() === category.toLowerCase()
  );

  if (!uppercaseCategory) {
    return {
      notFound: true,
    };
  }

  const document = getDocument(uppercaseCategory, slug);
  
  if (!document) {
    return {
      notFound: true,
    };
  }

  // Get documents in the same category for navigation and related documents
  const categoryDocuments = getAllDocumentsForCategory(uppercaseCategory);
  
  // Find document index for prev/next navigation
  const currentIndex = categoryDocuments.findIndex((doc) => doc.slug === slug);
  const prevDocument = currentIndex > 0 ? getDocument(uppercaseCategory, categoryDocuments[currentIndex - 1].slug) : null;
  const nextDocument = currentIndex < categoryDocuments.length - 1 ? getDocument(uppercaseCategory, categoryDocuments[currentIndex + 1].slug) : null;
  
  // Get related documents
  let relatedDocuments: Document[] = [];
  if (document.relatedDocs && document.relatedDocs.length > 0) {
    relatedDocuments = document.relatedDocs
      .map((relatedSlug) => getDocument(uppercaseCategory, relatedSlug))
      .filter((doc): doc is Document => doc !== null)
      .slice(0, 5);
  }

  return {
    props: {
      document,
      relatedDocuments,
      prevDocument,
      nextDocument,
    },
  };
};
