import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import mermaid from 'mermaid';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
  const [renderedContent, setRenderedContent] = useState(content);

  useEffect(() => {
    // Initialize mermaid
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'sans-serif',
    });

    // Process the content to handle mermaid diagrams
    const processMermaidDiagrams = async () => {
      const processedContent = await processMermaid(content);
      setRenderedContent(processedContent);
    };

    processMermaidDiagrams();
  }, [content]);

  // Function to process mermaid code blocks
  const processMermaid = async (markdownContent: string): Promise<string> => {
    // Regular expression to find mermaid code blocks
    const mermaidRegex = /```mermaid\n([\s\S]*?)\n```/g;
    
    let match;
    let processedContent = markdownContent;
    let index = 0;
    
    // Find all mermaid code blocks and replace them with rendered SVG
    while ((match = mermaidRegex.exec(markdownContent)) !== null) {
      try {
        const mermaidCode = match[1];
        const id = `mermaid-diagram-${index++}`;
        
        // Replace the mermaid code block with a div that will be rendered by mermaid
        processedContent = processedContent.replace(
          match[0],
          `<div class="mermaid-diagram" id="${id}">\n${mermaidCode}\n</div>`
        );
      } catch (error) {
        console.error('Error processing mermaid diagram:', error);
      }
    }
    
    return processedContent;
  };

  // Custom components for ReactMarkdown
  const components: any = {
    // Add custom rendering for headings to create anchor links
    h1: ({ children, ...props }: any) => (
      <h1 id={children?.toString().toLowerCase().replace(/\s+/g, '-')} className="text-3xl font-bold mt-8 mb-4" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: any) => (
      <h2 id={children?.toString().toLowerCase().replace(/\s+/g, '-')} className="text-2xl font-bold mt-6 mb-3" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3 id={children?.toString().toLowerCase().replace(/\s+/g, '-')} className="text-xl font-bold mt-5 mb-2" {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: any) => (
      <h4 id={children?.toString().toLowerCase().replace(/\s+/g, '-')} className="text-lg font-bold mt-4 mb-2" {...props}>
        {children}
      </h4>
    ),
    // Custom rendering for code blocks
    code: ({ inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <div className="relative">
          <pre className={`${className} rounded-md p-4 overflow-x-auto`}>
            <code className={className} {...props}>
              {children}
            </code>
          </pre>
        </div>
      ) : (
        <code className={`${className} px-1 py-0.5 rounded-sm bg-secondary-100 dark:bg-secondary-800`} {...props}>
          {children}
        </code>
      );
    },
    // Custom rendering for tables
    table: ({ children, ...props }: any) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-700" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }: any) => (
      <thead className="bg-secondary-50 dark:bg-secondary-800" {...props}>
        {children}
      </thead>
    ),
    th: ({ children, ...props }: any) => (
      <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wider" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }: any) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900 dark:text-secondary-100" {...props}>
        {children}
      </td>
    ),
    // Custom rendering for links
    a: ({ children, ...props }: any) => (
      <a className="text-primary-600 dark:text-primary-400 hover:underline" {...props}>
        {children}
      </a>
    ),
    // Custom rendering for images
    img: ({ ...props }: any) => (
      <img className="max-w-full h-auto rounded-lg my-4" {...props} alt={props.alt || 'Image'} />
    ),
    // Custom rendering for blockquotes
    blockquote: ({ children, ...props }: any) => (
      <blockquote className="border-l-4 border-primary-300 dark:border-primary-700 pl-4 py-2 my-4 text-secondary-600 dark:text-secondary-400 italic" {...props}>
        {children}
      </blockquote>
    ),
  };

  return (
    <div className={`markdown-content ${className || ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={components}
      >
        {renderedContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
