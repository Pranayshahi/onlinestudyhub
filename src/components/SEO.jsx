import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.onlinestudyhub.com';
const DEFAULT_IMG = `${BASE_URL}/og-image.png`;

export default function SEO({ title, description, path = '/', image, schema }) {
  const fullTitle = title
    ? `${title} | OnlineStudyHub`
    : 'OnlineStudyHub — Best Online Tuition for Class 6-12, JEE & NEET in India';
  const metaDesc = description ||
    'Expert online tuition for Class 6–12, JEE & NEET. Find verified teachers, study topic-wise notes, and book 1-on-1 sessions.';
  const url = `${BASE_URL}${path}`;
  const img = image || DEFAULT_IMG;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={img} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
