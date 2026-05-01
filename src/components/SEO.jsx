import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.onlinestudyhub.com';
const DEFAULT_IMG = `${BASE_URL}/og-image.png`;

export default function SEO({ title, description, path = '/', image, schema, schemas, breadcrumbs, noindex }) {
  const fullTitle = title
    ? `${title} | OnlineStudyHub`
    : 'OnlineStudyHub — Free Online Study for Class 6-12, JEE & NEET in India';
  const metaDesc = description ||
    'Free online study platform for Class 6–12, JEE & NEET. Study topic-wise notes, find verified teachers, and book 1-on-1 sessions. India\'s best online study hub.';
  const url = `${BASE_URL}${path}`;
  const img = image || DEFAULT_IMG;

  const allSchemas = [];
  if (schema) allSchemas.push(schema);
  if (schemas) allSchemas.push(...schemas);

  if (breadcrumbs && breadcrumbs.length > 0) {
    allSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        ...breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 2,
          name: b.name,
          ...(b.url ? { item: `${BASE_URL}${b.url}` } : {}),
        })),
      ],
    });
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OnlineStudyHub" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={img} />

      {allSchemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
