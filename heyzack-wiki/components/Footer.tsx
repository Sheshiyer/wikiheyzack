import React from 'react';
import Link from 'next/link';
import { DOCUMENT_CATEGORIES } from '../lib/documents';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">HeyZack</h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4">
              Intelligent Building Solutions for commercial and residential applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Documentation</h3>
            <ul className="space-y-2">
              {Object.entries(DOCUMENT_CATEGORIES).map(([key, description]) => (
                <li key={key}>
                  <Link href={`/category/${key.toLowerCase()}`} className="hover:underline">
                    {key}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/document-map" className="hover:underline">
                  Document Map
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:underline">
                  Search
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/b2b/b2b-brand-strategy" className="hover:underline">
                  B2B Strategy
                </Link>
              </li>
              <li>
                <Link href="/category/strategy/b2c-brand-strategy" className="hover:underline">
                  B2C Strategy
                </Link>
              </li>
              <li>
                <Link href="/category/branding/brand-voice-guide" className="hover:underline">
                  Brand Voice
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-200 dark:border-secondary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-secondary-500 dark:text-secondary-400">
            &copy; {new Date().getFullYear()} HeyZack. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-secondary-500 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-500 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
