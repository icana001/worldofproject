<script setup lang="ts">
useSeoMeta({
  title: 'Webstree – Open Source KI-Plattform für KMU | IC-RESULTING',
  description: 'Webstree: Umfassende Business-Plattform mit integrierter KI. 48+ Features, lokal, sicher, DSGVO-konform. Keine Token-Limits, keine API-Gebühren. Open Source. Entwickelt in Wiesbaden.',
  ogTitle: 'Webstree – Open Source KI-Plattform für KMU',
  ogDescription: 'Umfassende Business-Plattform mit integrierter KI – lokal, sicher, DSGVO-konform. 48+ Features in einer Plattform.',
  ogImage: 'https://worldofproject.com/WEBI_WEBSTREE_OpenSource_KI-Plattform.png',
  twitterTitle: 'Webstree – Open Source KI-Plattform für KMU',
  twitterDescription: 'Die Open Source KI-Plattform für KMU. 48+ Features, lokal betreibbar, DSGVO-konform.',
  twitterImage: 'https://worldofproject.com/WEBI_WEBSTREE_OpenSource_KI-Plattform.png',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://worldofproject.com/webstree' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Webstree',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Windows, macOS, Linux',
        description: 'Open Source KI-Plattform für KMU mit 48+ Features. Lokal, DSGVO-konform, Self-Hosted.',
        url: 'https://worldofproject.com/webstree',
        image: 'https://worldofproject.com/WEBI_WEBSTREE_OpenSource_KI-Plattform.png',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
          description: 'Open Source – kostenlos nutzbar',
        },
        featureList: [
          '48+ Features',
          'Lokale KI ohne Cloud',
          '100% DSGVO-konform',
          'Open Source',
          'Self-Hosted',
          'KI-Chat & Assistenten',
          'Team-Kollaboration',
          'Office Suite',
        ],
        author: {
          '@type': 'Organization',
          name: 'IC-RESULTING & Partner',
          url: 'https://ic-resulting.de',
        },
      }),
    },
  ],
})

const isDarkMode = ref(false)
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

const vorteile = [
  {
    title: 'Datensouveränität',
    desc: 'Ihre Daten verlassen niemals Ihre Infrastruktur. DSGVO-konform by Design.',
    icon: 'shield',
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Keine KI-Kosten',
    desc: 'Unbegrenzte Nutzung ohne Token-Limits oder API-Gebühren mit Open-Source-Modellen.',
    icon: 'bolt',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Flexible Bereitstellung',
    desc: 'Desktop, eigener Server oder Private Cloud – Sie entscheiden, wo Ihre KI läuft.',
    icon: 'server',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Team-Collaboration',
    desc: 'Echtzeit-Zusammenarbeit mit Kollegen – Dokumente, Chat und KI-gestützte Workflows.',
    icon: 'users',
    color: 'from-emerald-500 to-green-600',
  },
]

const featureCategories = [
  {
    category: 'Kommunikation',
    icon: '📬',
    items: [
      'Messaging – Echtzeit-Chat mit Dateifreigabe, Emoji, Push',
      'Video-/Sprachanrufe – WebRTC-basiert, Bildschirmfreigabe',
      'E-Mail-Client – Vollständige IMAP/SMTP-Integration',
      'Network Hub – Zentrales Kommunikationszentrum',
    ],
  },
  {
    category: 'KI-Funktionen',
    icon: '🤖',
    items: [
      'KI-Assistent – Multi-Model-Support, autonome Agents',
      'ComfyUI – KI-Bildgenerierung mit Diffusion-Modellen',
      'Ollama / LM Studio – Lokale KI-Modelle, Privacy-First',
      'Text-to-Speech – KI-basierte Sprachsynthese',
    ],
  },
  {
    category: 'Produktivität',
    icon: '📊',
    items: [
      'Aufgabenverwaltung – Kalender, Prioritäten, Subtasks, Kanban',
      'Kalender – Monats-/Wochen-/Tagesansicht, Drag & Drop',
      'Dateiverwaltung – Cloud-Speicher mit Freigabefunktionen',
      'Erinnerungen – Geplante Benachrichtigungen',
    ],
  },
  {
    category: 'Office Suite',
    icon: '📝',
    items: [
      'Document Editor – Vollwertiger DOCX-Editor',
      'Spreadsheet Editor – XLSX-Editor mit Formeln',
      'Presentation Editor – PPTX-Editor mit Slide-Management',
    ],
  },
  {
    category: 'Entwickler-Tools',
    icon: '💻',
    items: [
      'UpIDE – Web-basierter Code-Editor',
      'SVG Editor – Vektor-Grafik-Editor',
      'Console – Kommandozeile mit Themes',
      'DB Manager – MongoDB & PostgreSQL Interface',
    ],
  },
  {
    category: 'Management',
    icon: '⚙️',
    items: [
      'Admin Panel – Benutzerverwaltung, Audit Logs',
      'Domains – Nginx-Proxy, SSL, PM2',
      'Security Panel – fail2ban, Firewall, IP-Management',
      'Upboard – Kollaboratives Whiteboard',
    ],
  },
]

const techStack = [
  { name: 'Nuxt 4', desc: 'Full-Stack Framework' },
  { name: 'Vue 3', desc: 'Reaktive UI' },
  { name: 'TypeScript', desc: 'Type Safety' },
  { name: 'MongoDB', desc: 'NoSQL-Datenbank' },
  { name: 'WebRTC', desc: 'Peer-to-Peer' },
  { name: 'Tailwind CSS', desc: 'Utility-first CSS' },
]

const deploymentOptions = [
  {
    title: 'Desktop',
    desc: 'Windows, Mac, Linux – für Einzelnutzer und kleine Teams.',
    icon: 'desktop',
  },
  {
    title: 'Eigener Server',
    desc: 'Volle Kontrolle in Ihrem Rechenzentrum oder bei einem deutschen Hoster.',
    icon: 'server',
  },
  {
    title: 'Private Cloud',
    desc: 'Managed Hosting mit Ihrer eigenen Instanz – wir kümmern uns um den Betrieb.',
    icon: 'cloud',
  },
]
</script>

<template>
  <div :class="{ dark: isDarkMode }" class="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
    
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex items-center gap-3">
            <img src="/IC-Resulting_Wiesbaden_logo.png" alt="IC-RESULTING Logo" class="w-10 h-10 rounded-xl object-contain" />
            <div>
              <span class="text-lg font-bold text-neutral-900 dark:text-white">Webstree</span>
              <span class="hidden sm:inline text-sm text-neutral-500 dark:text-neutral-400 ml-2">KI-Plattform</span>
            </div>
          </NuxtLink>
          <div class="flex items-center gap-4">
            <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
              <NuxtLink to="/webstree" class="text-primary-600 dark:text-primary-400 font-semibold">Webstree</NuxtLink>
              <NuxtLink to="/qr-menu" class="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">QR-Menü</NuxtLink>
              <NuxtLink to="/dudo-b2b" class="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Dudo B2B</NuxtLink>
            </nav>
            <a href="https://ic-resulting.de/kontakt" target="_blank" class="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-violet-600 text-white text-sm font-semibold rounded-xl hover:bg-violet-700 transition-colors">
              Early Access
            </a>
            <button @click="toggleDarkMode" class="p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              <svg v-if="isDarkMode" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero -->
      <section class="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center mb-12">
            <span class="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-amber-300 mb-6 border border-amber-400/30">
              🚧 In Entwicklung • Bereits bei ersten Kunden im Einsatz • Open Source
            </span>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400">Webstree</span>
              <span class="block text-2xl sm:text-3xl mt-2 font-normal text-violet-100">Die Open Source KI-Plattform für KMU</span>
            </h1>
            <p class="text-xl text-violet-100 max-w-3xl mx-auto leading-relaxed mb-2">
              Umfassende Business-Plattform mit integrierter KI – <strong class="text-white">lokal, sicher, DSGVO-konform</strong>. Keine Token-Limits. Keine API-Gebühren. Volle Kontrolle.
            </p>
            <p class="text-lg text-violet-200 max-w-2xl mx-auto">
              Entstanden in Zusammenarbeit mit <a href="https://ic-resulting.de" target="_blank" class="underline hover:text-white transition-colors">IC-RESULTING</a> & Partner • 🇩🇪 Entwickelt in Deutschland
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto my-10">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div class="text-3xl font-bold text-white">48+</div>
                <div class="text-sm text-violet-200">Features & Module</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div class="text-3xl font-bold text-white">273K+</div>
                <div class="text-sm text-violet-200">Lines of Code</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div class="text-3xl font-bold text-emerald-400">0€</div>
                <div class="text-sm text-violet-200">Open Source</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div class="text-3xl font-bold text-violet-400">KMU</div>
                <div class="text-sm text-violet-200">Zielgruppe</div>
              </div>
            </div>

            <div class="flex flex-wrap justify-center gap-4">
              <a href="https://webstree.com" target="_blank" class="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-violet-400 hover:to-purple-500 transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40">
                Webstree entdecken
              </a>
              <a href="https://ic-resulting.de/kontakt" target="_blank" class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                Early Access anfragen
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>

            <!-- Hero Bild -->
            <div class="mt-12 max-w-4xl mx-auto relative">
              <div class="absolute inset-0 bg-violet-400 rounded-3xl blur-3xl opacity-20"></div>
              <div class="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 shadow-2xl overflow-hidden">
                <img src="/WEBI_WEBSTREE_OpenSource_KI-Plattform.png" alt="Webstree Open Source KI-Plattform – Übersicht aller 48+ Features für KMU" class="w-full h-auto rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Was ist Webstree -->
      <section class="py-20 lg:py-28 bg-white dark:bg-neutral-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-full text-sm font-semibold mb-4">
              Über die Plattform
            </span>
            <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Was ist <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">Webstree</span>?
            </h2>
            <p class="text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              Webstree ist eine umfassende Business-Plattform mit integrierter KI – ein komplettes Ökosystem für Unternehmen, die digital souverän bleiben wollen. 
              Mit über <strong class="text-neutral-900 dark:text-white">273.000 Zeilen Code</strong>, <strong class="text-neutral-900 dark:text-white">48+ Features</strong> und <strong class="text-neutral-900 dark:text-white">437 Komponenten</strong> 
              ist Webstree eine der ambitioniertesten Open-Source-Plattformen aus Deutschland.
            </p>
          </div>
        </div>
      </section>

      <!-- Vorteile -->
      <section class="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/20 dark:from-neutral-900 dark:via-violet-950/20 dark:to-purple-950/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-semibold mb-4">
              Vorteile
            </span>
            <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Warum Webstree für KMU?
            </h2>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="v in vorteile" :key="v.title" class="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all text-center">
              <div :class="['w-14 h-14 mx-auto rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-lg', v.color]">
                <svg v-if="v.icon === 'shield'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <svg v-if="v.icon === 'bolt'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <svg v-if="v.icon === 'server'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                <svg v-if="v.icon === 'users'" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 class="text-lg font-bold text-neutral-900 dark:text-white mb-2">{{ v.title }}</h3>
              <p class="text-neutral-600 dark:text-neutral-400">{{ v.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="py-20 lg:py-28 bg-white dark:bg-neutral-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
              Funktionsumfang
            </span>
            <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              48+ Features in einer Plattform
            </h2>
            <p class="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Webstree vereint Funktionen, für die Unternehmen normalerweise dutzende verschiedene SaaS-Abos benötigen.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="fc in featureCategories" :key="fc.category" class="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all">
              <div class="text-3xl mb-3">{{ fc.icon }}</div>
              <h3 class="text-lg font-bold text-neutral-900 dark:text-white mb-4">{{ fc.category }}</h3>
              <ul class="space-y-2">
                <li v-for="item in fc.items" :key="item" class="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <svg class="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- KI-Assistent -->
      <section class="py-20 lg:py-28 bg-gradient-to-br from-violet-50 via-purple-50/30 to-slate-50 dark:from-neutral-900 dark:via-purple-950/10 dark:to-neutral-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span class="inline-block px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-full text-sm font-semibold mb-4">
                KI-Assistent
              </span>
              <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Mehr als ein Chatbot – Ihr persönlicher <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">KI-Assistent</span>
              </h2>
              <p class="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                Webstree integriert einen KI-Assistenten, der Ihre Besucher intelligent berät, Fragen beantwortet und Anfragen qualifiziert – rund um die Uhr.
              </p>
              <div class="flex items-center gap-4">
                <img src="/WebiMaskot.png" alt="Webi – Dein KI-Assistent" class="w-16 h-16 object-contain" />
                <div>
                  <div class="font-bold text-neutral-900 dark:text-white text-lg">Das ist Webi!</div>
                  <div class="text-violet-600 dark:text-violet-400 font-medium">Dein persönlicher KI-Assistent</div>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500 rounded-3xl blur-3xl opacity-15"></div>
              <div class="relative bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 shadow-2xl overflow-hidden">
                <img src="/Webstree_Chat_Assistent.png" alt="Webstree KI-Assistent Chat – DSGVO-konformer Chatbot für Unternehmens-Websites" class="w-full h-auto rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/20 dark:from-neutral-900 dark:via-blue-950/10 dark:to-violet-950/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full text-sm font-semibold mb-4">
              Technologie
            </span>
            <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Tech Stack – Modern & Robust
            </h2>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div v-for="t in techStack" :key="t.name" class="bg-white dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700 text-center hover:shadow-lg transition-all">
              <div class="text-lg font-bold text-neutral-900 dark:text-white mb-1">{{ t.name }}</div>
              <div class="text-xs text-neutral-500 dark:text-neutral-400">{{ t.desc }}</div>
            </div>
          </div>

          <p class="text-center text-neutral-600 dark:text-neutral-400 mt-8">
            Mit <strong class="text-neutral-900 dark:text-white">390 API-Endpoints</strong> und <strong class="text-neutral-900 dark:text-white">37 Mongoose-Models</strong> – auf Skalierbarkeit und Erweiterbarkeit ausgelegt.
          </p>
        </div>
      </section>

      <!-- Bereitstellung -->
      <section class="py-20 lg:py-28 bg-white dark:bg-neutral-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-sm font-semibold mb-4">
              Bereitstellung
            </span>
            <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Flexible Bereitstellung – Sie entscheiden
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="d in deploymentOptions" :key="d.title" class="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all text-center">
              <div class="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                <svg v-if="d.icon === 'desktop'" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <svg v-if="d.icon === 'server'" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                <svg v-if="d.icon === 'cloud'" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              </div>
              <h3 class="text-xl font-bold text-neutral-900 dark:text-white mb-3">{{ d.title }}</h3>
              <p class="text-neutral-600 dark:text-neutral-400">{{ d.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Made in Germany -->
      <section class="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/20 dark:from-neutral-900 dark:via-violet-950/20 dark:to-purple-950/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span class="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-700 dark:text-amber-400 rounded-full text-sm font-semibold mb-4">
                🇩🇪 Made in Germany
              </span>
              <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Entstanden in Deutschland
              </h2>
              <p class="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                Webstree wird in Zusammenarbeit mit <strong class="text-neutral-900 dark:text-white">IC-RESULTING & Partner</strong> entwickelt. 
                Der Hauptsitz liegt in Wiesbaden, Hessen – mit Forschung und Entwicklung in Kooperation mit Universitäten.
              </p>
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  <span class="text-neutral-700 dark:text-neutral-300">Deutsches Projektmanagement und Qualitätsstandards</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  <span class="text-neutral-700 dark:text-neutral-300">DSGVO-Compliance von Grund auf</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  <span class="text-neutral-700 dark:text-neutral-300">Lokaler Support und Ansprechpartner</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  <span class="text-neutral-700 dark:text-neutral-300">Keine Abhängigkeit von US-Cloud-Diensten</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <a href="https://webstree.com" target="_blank" class="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <span class="text-white font-bold text-lg">W</span>
                </div>
                <div>
                  <div class="font-bold text-neutral-900 dark:text-white">webstree.com</div>
                  <div class="text-sm text-neutral-500 dark:text-neutral-400">Die offizielle Webstree-Plattform</div>
                </div>
                <svg class="w-5 h-5 text-neutral-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <NuxtLink to="/" class="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <span class="text-white font-bold text-lg">WP</span>
                </div>
                <div>
                  <div class="font-bold text-neutral-900 dark:text-white">worldofproject.com</div>
                  <div class="text-sm text-neutral-500 dark:text-neutral-400">Software-Suite & Projektmanagement Tools</div>
                </div>
                <svg class="w-5 h-5 text-neutral-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-20 bg-gradient-to-br from-violet-600 via-purple-700 to-violet-800 relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span class="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-amber-200 mb-6 border border-amber-400/30">
            🚧 In Entwicklung • Early Access verfügbar
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Jetzt Early Access sichern</h2>
          <p class="text-violet-100 text-lg mb-8 max-w-2xl mx-auto">
            Webstree befindet sich in aktiver Entwicklung und wird bereits von ersten Kunden eingesetzt. 
            Sichern Sie sich jetzt frühen Zugang und gestalten Sie die Entwicklung mit.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="https://webstree.com" target="_blank" class="inline-flex items-center gap-2 bg-white text-violet-700 px-8 py-4 rounded-xl font-semibold hover:bg-violet-50 transition-colors shadow-lg">
              Webstree.com besuchen
            </a>
            <a href="https://ic-resulting.de/kontakt" target="_blank" class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
              Beratung anfragen
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-900 text-neutral-400 py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div class="md:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <img src="/IC-Resulting_Wiesbaden_logo.png" alt="IC-RESULTING Logo" class="w-10 h-10 rounded-xl object-contain" />
              <span class="text-lg font-bold text-white">IC-RESULTING & Partner</span>
            </div>
            <p class="text-sm max-w-md mb-4">
              <strong class="text-white">Entstanden in Zusammenarbeit mit IC-RESULTING & Partner.</strong> 
              Entwickelt in Deutschland. Open Source KI-Ökosystem, 100% DSGVO-konform.
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Produkte</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/webstree" class="hover:text-white transition-colors font-medium text-white">Webstree</NuxtLink></li>
              <li><NuxtLink to="/qr-menu" class="hover:text-white transition-colors">UPQR – QR-Menü</NuxtLink></li>
              <li><NuxtLink to="/dudo-b2b" class="hover:text-white transition-colors">Dudo B2B</NuxtLink></li>
              <li><NuxtLink to="/" class="hover:text-white transition-colors">Software Suite</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Links</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="https://webstree.com" target="_blank" class="hover:text-violet-400 transition-colors flex items-center gap-2 font-medium text-white">Webstree.com →</a></li>
              <li><a href="https://ic-resulting.de" target="_blank" class="hover:text-white transition-colors">ic-resulting.de</a></li>
              <li><NuxtLink to="/impressum" class="hover:text-white transition-colors">Impressum</NuxtLink></li>
              <li><NuxtLink to="/datenschutz" class="hover:text-white transition-colors">Datenschutz</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <span>&copy; {{ new Date().getFullYear() }} IC-RESULTING & Partner. Alle Rechte vorbehalten.</span>
          <div class="flex items-center gap-4">
            <span class="px-3 py-1.5 bg-slate-800 rounded-full text-xs flex items-center gap-2">
              <span class="text-base">🇩🇪</span>
              Entwickelt in Deutschland
            </span>
            <a href="https://webstree.com" target="_blank" class="text-violet-400 hover:text-violet-300 transition-colors text-sm">
              Webstree.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
