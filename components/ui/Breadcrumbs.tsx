import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/schema';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaData = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://accountantcapitalva.com' },
    ...items
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav className="py-4 text-sm" aria-label="Breadcrumbs">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="text-forest hover:text-mint transition">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-text-light">/</span>
              {index === items.length - 1 ? (
                <span className="text-text-dark font-600">{item.name}</span>
              ) : (
                <Link href={item.url} className="text-forest hover:text-mint transition">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
