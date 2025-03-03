import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ className }) => {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Find all headings in the document
    const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .filter(element => element.id)
      .map(element => ({
        id: element.id,
        text: element.textContent || '',
        level: parseInt(element.tagName.substring(1)),
      }));
    
    setHeadings(elements);

    // Set up intersection observer to highlight active section
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 0.1,
      }
    );

    // Observe all heading elements
    elements.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(heading => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className={`toc ${className || ''}`}>
      <h2 className="text-lg font-bold mb-3">Table of Contents</h2>
      <nav>
        <ul className="space-y-1">
          {headings.map(heading => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}
              className={`text-sm py-1 border-l-2 pl-2 ${
                activeId === heading.id
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400 font-medium'
                  : 'border-transparent hover:border-secondary-300 dark:hover:border-secondary-700 text-secondary-700 dark:text-secondary-300'
              }`}
            >
              <Link
                href={`#${heading.id}`}
                className="block hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {heading.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
