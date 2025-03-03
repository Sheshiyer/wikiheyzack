import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { DOCUMENT_CATEGORIES } from '../lib/documents';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 100);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-white dark:bg-secondary-900 shadow-md dark:shadow-secondary-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary-500 font-bold text-2xl">Hey<span className="text-b2c-500">Zack</span></span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-4 flex items-center space-x-4">
              {Object.entries(DOCUMENT_CATEGORIES).map(([key, description]) => (
                <Link
                  key={key}
                  href={`/category/${key.toLowerCase()}`}
                  className={`nav-link ${
                    router.pathname.includes(`/category/${key.toLowerCase()}`) ? 'nav-link-active' : ''
                  }`}
                >
                  {key}
                </Link>
              ))}
              <Link 
                href="/document-map" 
                className={`nav-link ${router.pathname === '/document-map' ? 'nav-link-active' : ''}`}
              >
                Document Map
              </Link>
            </div>
            
            <div className="ml-4 flex items-center">
              <button
                onClick={toggleSearch}
                className="p-2 rounded-md text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300 focus:outline-none"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
              <ThemeToggle className="ml-2" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleSearch}
              className="p-2 rounded-md text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300 focus:outline-none"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
            <ThemeToggle className="ml-2" />
            <button
              onClick={toggleMenu}
              className="ml-2 p-2 rounded-md text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {Object.entries(DOCUMENT_CATEGORIES).map(([key, description]) => (
              <Link
                key={key}
                href={`/category/${key.toLowerCase()}`}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  router.pathname.includes(`/category/${key.toLowerCase()}`)
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                    : 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {key}
              </Link>
            ))}
            <Link
              href="/document-map"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === '/document-map'
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                  : 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Document Map
            </Link>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="absolute inset-0 bg-white dark:bg-secondary-900 z-50 flex items-start pt-16 px-4">
          <div className="container mx-auto">
            <div className="relative">
              <form onSubmit={handleSearch}>
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search documents..."
                  className="w-full p-4 pr-10 rounded-lg border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-4 top-4 text-secondary-500 hover:text-secondary-700 dark:hover:text-secondary-300"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </form>
              <button
                onClick={toggleSearch}
                className="absolute -top-12 right-0 text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
