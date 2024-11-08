import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website' 
}) => {
  const siteTitle = 'Your Name - Portfolio';
  const defaultDescription = 'Frontend Developer & UI/UX Designer';
  const siteUrl = 'https://yourwebsite.com';
  const defaultImage = `${siteUrl}/images/og-image.jpg`;

  const seo = {
    title: title ? `${title} | ${siteTitle}` : siteTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${url || ''}`,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0A192F" />
      <link rel="canonical" href={seo.url} />
    </Helmet>
  );
};

export default SEO; 