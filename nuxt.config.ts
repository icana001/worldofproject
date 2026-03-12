// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/tailwind.css'],

  site: {
    url: 'https://worldofproject.com',
    name: 'WorldOfProject',
  },

  app: {
    head: {
      title: 'Webstree – KI-Plattform für KMU | Digital souverän bleiben',
      htmlAttrs: {
        lang: 'de',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Google Search Console Verification
        { name: 'google-site-verification', content: 'ULygywxDz8XTuk-Iy68691HbCDZb7YN0zVIsVAOIlGQ' },
        {
          name: 'description',
          content:
            'Webstree: Die Open Source KI-Plattform für KMU. Behalten Sie die Kontrolle über Ihre Daten – lokal, sicher, digital souverän. In Entwicklung. Entstanden mit IC-RESULTING & Partner.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        // SEO Keywords - Fokus auf KMU und digitale Souveränität
        {
          name: 'keywords',
          content:
            'KI für KMU, KI Plattform Mittelstand, digitale Souveränität, lokale KI, KMU Software, Open Source KI, Webstree, Self-Hosted AI, DSGVO KI, KI ohne Cloud, Unternehmenssoftware KMU, IC-RESULTING, Private AI, Datenschutz KI, KI Deutschland',
        },
        // Robots
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        // Author & Publisher
        { name: 'author', content: 'IC-RESULTING & Partner' },
        { name: 'publisher', content: 'IC-RESULTING & Partner' },
        // Geo Tags für lokales SEO - Wiesbaden
        { name: 'geo.region', content: 'DE-HE' },
        { name: 'geo.placename', content: 'Wiesbaden' },
        { name: 'geo.position', content: '50.0826;8.2428' },
        { name: 'ICBM', content: '50.0826, 8.2428' },
        // OpenGraph - KMU-Fokus
        { property: 'og:title', content: 'Webstree – KI-Plattform für KMU | Digital souverän bleiben' },
        {
          property: 'og:description',
          content:
            'Die Open Source KI-Plattform für kleine und mittlere Unternehmen. Lokal, sicher, DSGVO-konform. In Entwicklung.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://worldofproject.com' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:locale:alternate', content: 'de_AT' },
        { property: 'og:locale:alternate', content: 'de_CH' },
        { property: 'og:site_name', content: 'Webstree – KI für KMU' },
        { property: 'og:image', content: 'https://worldofproject.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Webstree – KI-Plattform für KMU | Digital souverän' },
        // Twitter - KMU-Fokus
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ic_resulting' },
        { name: 'twitter:creator', content: '@ic_resulting' },
        { name: 'twitter:title', content: 'Webstree – KI-Plattform für KMU | IC-RESULTING & Partner' },
        {
          name: 'twitter:description',
          content:
            'KI für KMU: Digital souverän bleiben. Open Source, lokal, DSGVO-konform. In Entwicklung.',
        },
        { name: 'twitter:image', content: 'https://worldofproject.com/og-image.png' },
        // Theme Color - Violet für Webstree
        { name: 'theme-color', content: '#7c3aed' },
        { name: 'msapplication-TileColor', content: '#7c3aed' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://worldofproject.com' },
        // Alternate Language Links
        { rel: 'alternate', hreflang: 'de', href: 'https://worldofproject.com' },
        { rel: 'alternate', hreflang: 'de-DE', href: 'https://worldofproject.com' },
        { rel: 'alternate', hreflang: 'de-AT', href: 'https://worldofproject.com' },
        { rel: 'alternate', hreflang: 'de-CH', href: 'https://worldofproject.com' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://worldofproject.com' },
        // Fonts
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
      ],
      // Structured Data (JSON-LD) für bessere SERP-Darstellung
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://ic-resulting.de/#organization',
                name: 'IC-RESULTING & Partner',
                url: 'https://ic-resulting.de',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://worldofproject.com/og-image.png',
                },
                sameAs: [
                  'https://webstree.com',
                  'https://worldofproject.com',
                ],
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Wiesbaden',
                  addressRegion: 'Hessen',
                  addressCountry: 'DE',
                },
                founder: {
                  '@type': 'Person',
                  name: 'Ibrahim Canakci',
                },
                description: 'Entwickelt in Deutschland. KI-Lösungen entstanden in Zusammenarbeit mit IC-RESULTING & Partner.',
              },
              {
                '@type': 'SoftwareApplication',
                '@id': 'https://webstree.com/#software',
                name: 'Webstree',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Windows, macOS, Linux',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'EUR',
                  description: 'Open Source – kostenlos nutzbar',
                },
                description: 'Open Source KI-Ökosystem. Entstanden in Zusammenarbeit mit IC-RESULTING & Partner. Entwickelt in Deutschland, 100% DSGVO-konform, Self-Hosted.',
                featureList: [
                  'Entwickelt in Deutschland',
                  'Lokale KI ohne Cloud',
                  '100% DSGVO-konform',
                  'Open Source',
                  'Self-Hosted',
                  'Office Suite Integration',
                  'KI-Chat & Assistenten',
                  'Team-Kollaboration',
                ],
                author: {
                  '@id': 'https://ic-resulting.de/#organization',
                },
                provider: {
                  '@id': 'https://ic-resulting.de/#organization',
                },
              },
              {
                '@type': 'WebSite',
                '@id': 'https://worldofproject.com/#website',
                url: 'https://worldofproject.com',
                name: 'Webstree – Entwickelt in Deutschland',
                description: 'Open Source KI-Ökosystem. Entstanden in Zusammenarbeit mit IC-RESULTING & Partner. Entwickelt in Deutschland.',
                publisher: {
                  '@id': 'https://ic-resulting.de/#organization',
                },
                inLanguage: 'de-DE',
              },
            ],
          }),
        },
      ],
    },
  },

  typescript: {
    strict: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    prerender: {
      routes: ['/', '/impressum', '/datenschutz', '/sitemap.xml'],
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/impressum': { prerender: true },
    '/datenschutz': { prerender: true },
  },
})
