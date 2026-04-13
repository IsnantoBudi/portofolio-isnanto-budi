import { portfolioData } from '../data/portfolio';

export const useStructuredData = () => {
  const config = useRuntimeConfig();
  const baseUrl = 'https://www.isnantobudi.online'; // Updated domain


  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.name,
    jobTitle: portfolioData.title,
    url: baseUrl,
    image: `${baseUrl}/ib-logo.svg`,
    sameAs: [
      portfolioData.socials.linkedin,
      'https://github.com/IsnantoBudi'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'PT. Bakti Tekno Mandiri',
    },
    description: portfolioData.about.join(' '),
    knowsAbout: portfolioData.skills.map(skill => skill.name),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressCountry: 'ID'
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${portfolioData.name} - Portfolio`,
    url: baseUrl,
    description: 'Portfolio of Isnanto Budi Nurrahman, a Software Engineer and Full-Stack Developer specialized in SaaS, Mobile, and Web Development.',
    publisher: {
      '@type': 'Person',
      name: portfolioData.name
    }
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${portfolioData.name} Development Services`,
    image: `${baseUrl}/ib-logo.svg`,
    url: baseUrl,
    telephone: '', // Optional
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressRegion: 'Jakarta Raya',
      addressCountry: 'ID'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia'
    },
    priceRange: '$$',
    description: 'Expert Software Development services in Jakarta, specializing in Vue.js, Angular, Flutter, and Go.'
  };

  const projectListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: portfolioData.projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: project.link || `${baseUrl}#projects`,
        keywords: project.technologies.join(', ')
      }
    }))
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: '2024-01-01T00:00:00+00:00',
    dateModified: new Date().toISOString(),
    mainEntity: personSchema
  };

  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl
    }]
  };

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(personSchema)
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(websiteSchema)
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(professionalServiceSchema)
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(projectListSchema)
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(profilePageSchema)
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(breadcrumbListSchema)
      }
    ]
  });
};
