import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
  compact?: boolean; // Added compact prop for tighter layout
}

export default function BentoGrid({ children, className, compact = false }: BentoGridProps) {
  return (
    <div className={clsx('bento-grid', compact && 'bento-grid-compact', className)}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  compact?: boolean; // Added compact prop for tighter padding
}

export function BentoCard({ 
  children, 
  title, 
  size = 'sm', 
  className,
  href,
  onClick,
  compact = false
}: BentoCardProps) {
  // Check if children contains any <a> tags or Link components
  const containsLinks = React.Children.toArray(children).some(child => {
    if (React.isValidElement(child)) {
      if (typeof child.type === 'string' && child.type === 'a') return true;
      if (child.props && typeof child.props === 'object' && 'href' in child.props) return true;
    }
    return false;
  });

  // If the card has an href but also contains links, use a div instead of an <a>
  const CardComponent = href && !containsLinks ? 'a' : 'div';
  const cardProps = href && !containsLinks ? { href } : {};

  // Map size to class name
  const sizeClass = {
    sm: 'bento-card-sm',
    md: 'bento-card-md',
    lg: 'bento-card-lg',
  }[size];

  // If we're using a div but have an href, wrap the content in a link
  const content = (
    <>
      {title && <h3 className={clsx("font-bold", compact ? "text-lg mb-2" : "text-xl mb-4")}>{title}</h3>}
      {children}
    </>
  );

  return (
    <CardComponent
      {...cardProps}
      className={clsx(
        'bento-card', 
        sizeClass, 
        compact && 'bento-card-compact',
        className
      )}
      onClick={onClick}
    >
      {content}
    </CardComponent>
  );
}
