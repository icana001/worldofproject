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
      title: 'WorldOfProject – ProjectOps Software für Mittelstand | Self-Hosted & DSGVO',
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
            'WorldOfProject: Self-hosted Projektmanagement-Software für den DACH-Mittelstand. One-Page Projekte, Meeting Notes, Zeiterfassung & Leistungsnachweise. DSGVO-konform, ohne Overhead. Von IC-RESULTING.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        // SEO Keywords
        {
          name: 'keywords',
          content:
            'Projektmanagement Software, Self-Hosted, DSGVO-konform, Mittelstand, ProjectOps, Zeiterfassung, Leistungsnachweis, Meeting Notes, Kanban, PMO Software, Deutschland, Österreich, Schweiz, DACH',
        },
        // Robots
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        // Author & Publisher
        { name: 'author', content: 'IC-RESULTING - Ibrahim Canakci' },
        { name: 'publisher', content: 'IC-RESULTING' },
        // Geo Tags für lokales SEO
        { name: 'geo.region', content: 'DE-HE' },
        { name: 'geo.placename', content: 'Wiesbaden' },
        { name: 'geo.position', content: '50.0826;8.2428' },
        { name: 'ICBM', content: '50.0826, 8.2428' },
        // OpenGraph
        { property: 'og:title', content: 'WorldOfProject – ProjectOps Software für Mittelstand' },
        {
          property: 'og:description',
          content:
            'Self-hosted Projektmanagement für den DACH-Mittelstand. One-Page Projekte, Meeting Notes, Zeiterfassung. DSGVO-konform & ohne Overhead.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://worldofproject.com' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:locale:alternate', content: 'de_AT' },
        { property: 'og:locale:alternate', content: 'de_CH' },
        { property: 'og:site_name', content: 'WorldOfProject' },
        { property: 'og:image', content: 'https://worldofproject.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'WorldOfProject - ProjectOps ohne Overhead' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ic_resulting' },
        { name: 'twitter:creator', content: '@ic_resulting' },
        { name: 'twitter:title', content: 'WorldOfProject – ProjectOps Software für Mittelstand' },
        {
          name: 'twitter:description',
          content:
            'Self-hosted Projektmanagement für den DACH-Mittelstand. DSGVO-konform & ohne Overhead.',
        },
        { name: 'twitter:image', content: 'https://worldofproject.com/og-image.png' },
        // Theme Color
        { name: 'theme-color', content: '#2563eb' },
        { name: 'msapplication-TileColor', content: '#2563eb' },
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
