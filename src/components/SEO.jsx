import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.onlinestudyhub.com';
const DEFAULT_IMG = `${BASE_URL}/og-image.png`;

const DEFAULT_ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'OnlineStudyHub',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon-192.png`,
  sameAs: [
    'https://twitter.com/onlinestudyhub',
    'https://youtube.com/@onlinestudyhub',
    'https://instagram.com/onlinestudyhub'
  ],
  description: 'Free online study platform for ICSE & CBSE Class 6–12, JEE Main, JEE Advanced & NEET UG preparation in India.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN'
  }
};

const DEFAULT_WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'OnlineStudyHub',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};

export default function SEO({ title, description, keywords, path = '/', image, schema, schemas, breadcrumbs, noindex }) {
  const fullTitle = title
    ? `${title} | OnlineStudyHub`
    : 'OnlineStudyHub — Free Online Study for Class 6-12, JEE & NEET in India';
  const metaDesc = description ||
    'Free online study platform for Class 6–12, JEE & NEET. Study topic-wise notes, NCERT solutions, formula sheets, find verified teachers, and attempt NTA mock tests. India\'s best online study hub.';
  const metaKeywords = keywords ||
    'online study hub, free study class 6-12, cbse class 10 notes, isc class 12 physics, jee main mock test, neet biology flashcards, snap and solve ai, pwa offline notes';
  const url = `${BASE_URL}${path}`;
  const img = image || DEFAULT_IMG;

  const allSchemas = [DEFAULT_ORG_SCHEMA, DEFAULT_WEBSITE_SCHEMA];
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
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"} />
      <meta name="theme-color" content="#0b0f19" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OnlineStudyHub" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@onlinestudyhub" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={img} />
      <meta name="application-name" content="OnlineStudyHub" />

      {/* Structured Data (JSON-LD) */}
      {allSchemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
