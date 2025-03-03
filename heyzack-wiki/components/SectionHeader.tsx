import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {description && (
        <p className="text-secondary-600 dark:text-secondary-400">{description}</p>
      )}
    </div>
  );
}
