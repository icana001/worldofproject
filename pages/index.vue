<script setup lang="ts">
import { ref, onMounted } from 'vue'

// SEO - Structured Data (JSON-LD)
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          // Organization
          {
            '@type': 'Organization',
            '@id': 'https://worldofproject.com/#organization',
            name: 'IC-RESULTING',
            url: 'https://ic-resulting.de',
            logo: {
              '@type': 'ImageObject',
              url: 'https://worldofproject.com/favicon.svg',
            },
            founder: {
              '@type': 'Person',
              name: 'Ibrahim Canakci',
              jobTitle: 'Dipl.-Inf.',
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Obere Webergasse 58',
              addressLocality: 'Wiesbaden',
              postalCode: '65183',
              addressCountry: 'DE',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+49-176-618-659-80',
              email: 'info@ic-resulting.de',
              contactType: 'sales',
              availableLanguage: ['German', 'English'],
            },
            sameAs: [
              'https://www.linkedin.com/in/ibrahim-canakci-ic-resulting/',
              'https://www.xing.com/profile/Ibrahim_Canakci/web_profiles',
            ],
          },
          // WebSite
          {
            '@type': 'WebSite',
            '@id': 'https://worldofproject.com/#website',
            url: 'https://worldofproject.com',
            name: 'WorldOfProject',
            description: 'Self-hosted Projektmanagement-Software für den DACH-Mittelstand',
            publisher: { '@id': 'https://worldofproject.com/#organization' },
            inLanguage: 'de-DE',
          },
          // SoftwareApplication
          {
            '@type': 'SoftwareApplication',
            '@id': 'https://worldofproject.com/#software',
            name: 'WorldOfProject',
            description: 'ProjectOps ohne Overhead - Self-hosted Projektmanagement für One-Page Projekte, Meeting Notes, Zeiterfassung und Leistungsnachweise.',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, Self-hosted',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/PreOrder',
              description: 'Early Access verfügbar',
            },
            featureList: [
              'One-Page Projekte',
              'Meeting Notes mit Actions',
              'Zeiterfassung',
              'Leistungsnachweise',
              'Kanban Board',
              'DSGVO-konform',
              'Self-hosted',
              'KI-Assist',
            ],
            author: { '@id': 'https://worldofproject.com/#organization' },
          },
          // FAQPage
          {
            '@type': 'FAQPage',
            '@id': 'https://worldofproject.com/#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Ist WorldOfProject ein Jira/Asana Ersatz?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nein. Fokus ist Standard-ProjectOps + Nachweise, ohne Overhead. Wir ersetzen keine Enterprise-Tools, sondern bieten eine schlanke Alternative für pragmatische Teams.',
                },
              },
              {
                '@type': 'Question',
                name: 'Kann ich WorldOfProject in eigener Cloud betreiben?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja, Self-host ist Kernprinzip. Du kannst WorldOfProject auf deiner eigenen Infrastruktur (VM, Docker, Kubernetes) betreiben.',
                },
              },
              {
                '@type': 'Question',
                name: 'Was ist mit DSGVO?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Datenhoheit, Rollen, Audit-Log, Export/Löschung – pragmatisch umgesetzt. Durch Self-hosting behältst du die volle Kontrolle über deine Daten.',
                },
              },
              {
                '@type': 'Question',
                name: 'Wie funktioniert KI bei WorldOfProject?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nur Assist-Entwürfe, immer mit Freigabe. Die KI erstellt Vorschläge, du entscheidest was übernommen wird – kein Autopilot.',
                },
              },
              {
                '@type': 'Question',
                name: 'Wann ist WorldOfProject verfügbar?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Im Aufbau – Early Access startet mit Pilotkunden. Melde dich an, um bei den ersten dabei zu sein.',
                },
              },
            ],
          },
          // WebPage
          {
            '@type': 'WebPage',
            '@id': 'https://worldofproject.com/#webpage',
            url: 'https://worldofproject.com',
            name: 'WorldOfProject – ProjectOps Software für Mittelstand | Self-Hosted & DSGVO',
            description: 'Self-hosted Projektmanagement-Software für den DACH-Mittelstand. One-Page Projekte, Meeting Notes, Zeiterfassung & Leistungsnachweise. DSGVO-konform.',
            isPartOf: { '@id': 'https://worldofproject.com/#website' },
            about: { '@id': 'https://worldofproject.com/#software' },
            inLanguage: 'de-DE',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Startseite',
                  item: 'https://worldofproject.com',
                },
              ],
            },
          },
        ],
      }),
    },
  ],
})

// Dark mode toggle
const isDarkMode = ref(false)
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Mobile menu
const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Navigation items
const navItems = [
  { label: 'Überblick', href: '#ueberblick' },
  { label: 'Flow', href: '#flow' },
  { label: 'Module', href: '#module' },
  { label: 'DSGVO', href: '#dsgvo' },
  { label: 'KI', href: '#reporting' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Kontakt', href: '#kontakt' },
]

// Scroll animation
onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })
})

const currentYear = new Date().getFullYear()

const faqItems = [
  {
    question: 'Ist das ein Jira/Asana Ersatz?',
    answer: 'Nein. Fokus ist Standard-ProjectOps + Nachweise, ohne Overhead. Wir ersetzen keine Enterprise-Tools, sondern bieten eine schlanke Alternative für pragmatische Teams.',
  },
  {
    question: 'Kann ich es in eigener Cloud betreiben?',
    answer: 'Ja, Self-host ist Kernprinzip. Du kannst WorldOfProject auf deiner eigenen Infrastruktur (VM, Docker, Kubernetes) betreiben.',
  },
  {
    question: 'Was ist mit DSGVO?',
    answer: 'Datenhoheit, Rollen, Audit-Log, Export/Löschung – pragmatisch umgesetzt. Durch Self-hosting behältst du die volle Kontrolle über deine Daten.',
  },
  {
    question: 'Wie funktioniert KI?',
    answer: 'Nur Assist-Entwürfe, immer mit Freigabe. Die KI erstellt Vorschläge, du entscheidest was übernommen wird – kein Autopilot.',
  },
  {
    question: 'Wann ist es verfügbar?',
    answer: 'Im Aufbau – Early Access startet mit Pilotkunden. Melde dich an, um bei den ersten dabei zu sein.',
  },
]

const flowSteps = [
  { number: '1', title: 'One-Page Projekt', description: 'Ziel, Scope, Owner, Risiken light, nächste Schritte – alles auf einer Seite.' },
  { number: '2', title: 'Meeting Notes', description: 'Agenda, Notes, Decisions – strukturiert erfassen statt in E-Mails verlieren.' },
  { number: '3', title: 'Actions & Board', description: 'Kanban/Scrum light mit „Meine Aufgaben" – Fokus statt Feature-Overload.' },
  { number: '4', title: 'Zeiten', description: 'Stundenrückmeldung pro Projekt oder Task – einfach und nachvollziehbar.' },
  { number: '5', title: 'Leistungsnachweis & Reporting', description: 'PDF/CSV Export, Weekly Digest, Portfolio light – bereit für Freigaben.' },
]

const coreModules = [
  { title: 'One-Page Projekt + Board', description: 'Ein Projekt auf einer Seite. Kanban-Board für Aufgaben. Kein Setup-Marathon.', icon: 'project' },
  { title: 'Meeting Notes → Decisions → Actions', description: 'Strukturierte Notizen. Entscheidungen dokumentieren. Aufgaben ableiten.', icon: 'meeting' },
  { title: 'Zeiten → Leistungsnachweis', description: 'Stundenerfassung. Einreichen & Freigeben. Audit-Log für Compliance.', icon: 'time' },
]

const upcomingModules = [
  { title: 'Portfolio light', description: 'Projekte im Überblick. Ampelstatus. Top-Blocker auf einen Blick.', icon: 'portfolio' },
  { title: 'Report Templates', description: 'Simple Editor für Standardfälle. Pro HTML/CSS für individuelle Layouts.', icon: 'report' },
  { title: 'KI-Schnittstelle', description: 'Entwürfe für Notes, Reports, Tätigkeitsnachweise – immer mit Freigabe.', icon: 'ai' },
]

const roadmapNow = ['One-Page Projekt + Board (Kanban)', 'Meeting Notes → Actions', 'Timesheets (minimal) + Export']
const roadmapNext = ['Leistungsnachweis mit Freigabe + Audit', 'Weekly Digest (1 Seite)', 'Simple Report Templates']
const roadmapLater = ['Portfolio light', 'Pro HTML/CSS Editor', 'KI Drafts (Notes/Reports) + Provider Auswahl']

const trustBadges = [
  { label: 'PRINCE2', description: 'Zertifiziert' },
  { label: 'ITIL', description: 'Best Practices' },
  { label: 'DSGVO', description: 'Konform' },
  { label: 'Self-Hosted', description: 'Datenhoheit' },
]
</script>

<template>
  <div :class="{ dark: isDarkMode }" class="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div class="section-container">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <a href="#" class="flex items-center gap-3 group">
            <svg class="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="22" class="fill-primary-600"/>
              <circle cx="24" cy="24" r="20" stroke="white" stroke-width="1.5" stroke-opacity="0.3"/>
              <ellipse cx="24" cy="24" rx="20" ry="10" stroke="white" stroke-width="1" stroke-opacity="0.4" fill="none"/>
              <ellipse cx="24" cy="24" rx="10" ry="20" stroke="white" stroke-width="1" stroke-opacity="0.4" fill="none"/>
              <line x1="4" y1="24" x2="44" y2="24" stroke="white" stroke-width="1" stroke-opacity="0.4"/>
              <line x1="24" y1="4" x2="24" y2="44" stroke="white" stroke-width="1" stroke-opacity="0.4"/>
              <rect x="16" y="16" width="16" height="16" rx="3" fill="white"/>
              <path d="M20 22h8M20 26h6" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
              <circle cx="32" cy="32" r="6" fill="#10b981"/>
              <path d="M30 32l1.5 1.5 3-3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="flex flex-col">
              <span class="text-lg lg:text-xl font-bold text-neutral-900 dark:text-white leading-tight">WorldOfProject</span>
              <span class="text-xs text-neutral-500 dark:text-neutral-400 hidden sm:block">Ein Produkt von IC-RESULTING</span>
            </div>
          </a>

          <nav class="hidden lg:flex items-center gap-1">
            <a v-for="item in navItems" :key="item.href" :href="item.href" class="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{{ item.label }}</a>
            <a href="https://ic-resulting.de/kontakt" target="_blank" rel="noopener" class="ml-2 btn-primary text-sm py-2">Gespräch vereinbaren</a>
          </nav>

          <div class="flex items-center gap-3">
            <button @click="toggleDarkMode" class="p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors" :aria-label="isDarkMode ? 'Light Mode aktivieren' : 'Dark Mode aktivieren'">
              <svg v-if="isDarkMode" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            </button>
            <button @click="toggleMobileMenu" class="lg:hidden p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors" aria-label="Menü öffnen">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <nav v-if="isMobileMenuOpen" class="lg:hidden py-4 border-t border-neutral-200 dark:border-neutral-800">
          <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMobileMenu" class="block px-3 py-2 text-base font-medium text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{{ item.label }}</a>
          <a href="https://ic-resulting.de/kontakt" target="_blank" rel="noopener" class="block mt-3 mx-3 btn-primary text-center">Gespräch vereinbaren</a>
        </nav>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section id="ueberblick" class="section-padding bg-gradient-to-br from-neutral-50 via-primary-50/30 to-white dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-900 overflow-hidden relative">
        <div class="absolute inset-0 opacity-5">
          <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/></pattern></defs>
            <rect width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>

        <div class="section-container relative">
          <div class="max-w-5xl mx-auto">
            <div class="text-center mb-12">
              <div class="mb-6 animate-on-scroll">
                <span class="badge badge-warning text-sm px-4 py-2">
                  <span class="relative flex h-2 w-2 mr-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  Im Aufbau • Early Access geöffnet
                </span>
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 dark:text-white mb-6 animate-on-scroll text-balance" style="animation-delay: 0.1s">
                ProjectOps<br class="sm:hidden"><span class="text-primary-600"> ohne Overhead.</span>
              </h1>

              <p class="text-lg sm:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl mx-auto animate-on-scroll text-balance leading-relaxed" style="animation-delay: 0.2s">
                One-Page Projekte • Meeting → Decisions → Actions • Zeiten → Leistungsnachweis<br class="hidden lg:inline">
                <span class="text-neutral-900 dark:text-white font-medium">Self-hosted. DSGVO-freundlich. KI als Assist.</span>
              </p>

              <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-on-scroll" style="animation-delay: 0.3s">
                <a href="#kontakt" class="btn-primary text-base px-8 py-4">
                  Early Access anfragen
                  <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
                <a href="#roadmap" class="btn-secondary text-base px-8 py-4">
                  <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  Roadmap ansehen
                </a>
              </div>

              <div class="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll" style="animation-delay: 0.4s">
                <div v-for="badge in trustBadges" :key="badge.label" class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm">
                  <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  <span class="text-sm font-medium text-neutral-900 dark:text-white">{{ badge.label }}</span>
                  <span class="text-xs text-neutral-500 dark:text-neutral-400">{{ badge.description }}</span>
                </div>
              </div>
            </div>

            <!-- Hero Visual -->
            <div class="animate-on-scroll" style="animation-delay: 0.5s">
              <div class="relative max-w-4xl mx-auto">
                <div class="bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                  <div class="flex items-center gap-2 px-4 py-3 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700">
                    <div class="flex gap-1.5">
                      <div class="w-3 h-3 rounded-full bg-red-400"></div>
                      <div class="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div class="w-3 h-3 rounded-full bg-emerald-400"></div>
                    </div>
                    <div class="flex-1 mx-4">
                      <div class="bg-white dark:bg-neutral-800 rounded-md px-3 py-1.5 text-xs text-neutral-500 dark:text-neutral-400 text-center">app.worldofproject.com</div>
                    </div>
                  </div>

                  <div class="p-6 lg:p-8">
                    <div class="grid lg:grid-cols-3 gap-6">
                      <div class="lg:col-span-1 space-y-4">
                        <div class="flex items-center gap-3 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                          <div class="w-8 h-8 bg-primary-100 dark:bg-primary-800 rounded-lg flex items-center justify-center">
                            <svg class="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                          </div>
                          <div><div class="text-sm font-medium text-neutral-900 dark:text-white">Meine Projekte</div><div class="text-xs text-neutral-500">3 aktiv</div></div>
                        </div>
                        <div class="flex items-center gap-3 p-3 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-lg transition-colors">
                          <div class="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                            <svg class="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                          </div>
                          <div><div class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Meine Aufgaben</div><div class="text-xs text-neutral-500">12 offen</div></div>
                        </div>
                        <div class="flex items-center gap-3 p-3 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-lg transition-colors">
                          <div class="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                            <svg class="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </div>
                          <div><div class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Zeiterfassung</div><div class="text-xs text-neutral-500">Diese Woche: 32h</div></div>
                        </div>
                      </div>

                      <div class="lg:col-span-2 space-y-4">
                        <div class="flex items-center justify-between">
                          <h3 class="font-semibold text-neutral-900 dark:text-white">Projekt: CRM Migration</h3>
                          <span class="badge badge-success text-xs">On Track</span>
                        </div>
                        <div class="grid grid-cols-3 gap-3">
                          <div class="bg-neutral-50 dark:bg-neutral-700/50 rounded-lg p-3">
                            <div class="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">To Do</div>
                            <div class="space-y-2">
                              <div class="bg-white dark:bg-neutral-800 p-2 rounded border border-neutral-200 dark:border-neutral-600 text-xs">Anforderungen finalisieren</div>
                              <div class="bg-white dark:bg-neutral-800 p-2 rounded border border-neutral-200 dark:border-neutral-600 text-xs">Testkonzept erstellen</div>
                            </div>
                          </div>
                          <div class="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                            <div class="text-xs font-medium text-amber-600 dark:text-amber-400 mb-2">In Progress</div>
                            <div class="space-y-2">
                              <div class="bg-white dark:bg-neutral-800 p-2 rounded border-l-2 border-amber-400 text-xs">Datenmigration vorbereiten</div>
                            </div>
                          </div>
                          <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3">
                            <div class="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-2">Done</div>
                            <div class="space-y-2">
                              <div class="bg-white dark:bg-neutral-800 p-2 rounded border-l-2 border-emerald-400 text-xs line-through opacity-60">Kickoff Meeting</div>
                              <div class="bg-white dark:bg-neutral-800 p-2 rounded border-l-2 border-emerald-400 text-xs line-through opacity-60">Stakeholder-Analyse</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="absolute -right-4 top-1/4 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-4 hidden lg:block animate-on-scroll" style="animation-delay: 0.7s">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div><div class="text-sm font-medium text-neutral-900 dark:text-white">Leistungsnachweis</div><div class="text-xs text-emerald-600 dark:text-emerald-400">Freigegeben</div></div>
                  </div>
                </div>

                <div class="absolute -left-4 bottom-1/4 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-4 hidden lg:block animate-on-scroll" style="animation-delay: 0.8s">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    </div>
                    <div><div class="text-sm font-medium text-neutral-900 dark:text-white">KI-Assist</div><div class="text-xs text-violet-600 dark:text-violet-400">Entwurf bereit</div></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid sm:grid-cols-3 gap-6 mt-16">
              <div class="card animate-on-scroll text-center" style="animation-delay: 0.6s">
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-900/10 flex items-center justify-center mb-4 mx-auto">
                  <svg class="w-7 h-7 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Weniger Status-Meetings</h3>
                <p class="text-neutral-600 dark:text-neutral-400">Mehr Lieferung statt Abstimmungs-Marathon. Alle Infos auf einen Blick.</p>
              </div>
              <div class="card animate-on-scroll text-center" style="animation-delay: 0.7s">
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-900/10 flex items-center justify-center mb-4 mx-auto">
                  <svg class="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Nachweise & Freigaben</h3>
                <p class="text-neutral-600 dark:text-neutral-400">Sauber dokumentiert, jederzeit exportierbar. Audit-ready.</p>
              </div>
              <div class="card animate-on-scroll text-center" style="animation-delay: 0.8s">
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-100 to-violet-50 dark:from-violet-900/30 dark:to-violet-900/10 flex items-center justify-center mb-4 mx-auto">
                  <svg class="w-7 h-7 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">In 60 Minuten startklar</h3>
                <p class="text-neutral-600 dark:text-neutral-400">Mit Standards, die sofort funktionieren. Kein Setup-Marathon.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- IC-RESULTING Banner -->
      <section class="py-8 bg-neutral-900 dark:bg-neutral-950">
        <div class="section-container">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center"><span class="text-lg font-bold text-primary-600">IC</span></div>
              <div><div class="text-white font-semibold">Ein Produkt von IC-RESULTING</div><div class="text-neutral-400 text-sm">IT-Projektleitung & Lösungen für Unternehmen</div></div>
            </div>
            <div class="flex items-center gap-4">
              <a href="https://ic-resulting.de" target="_blank" rel="noopener" class="text-neutral-400 hover:text-white text-sm transition-colors">ic-resulting.de →</a>
              <span class="text-neutral-600">|</span>
              <span class="text-neutral-400 text-sm">PRINCE2 • ITIL • SÜ2</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Standard Flow Section -->
      <section id="flow" class="section-padding bg-white dark:bg-neutral-900">
        <div class="section-container">
          <div class="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span class="badge badge-primary mb-4 animate-on-scroll">Workflow</span>
            <h2 class="section-title animate-on-scroll">Der Standard-Flow</h2>
            <p class="section-subtitle animate-on-scroll mx-auto">Vom Projektziel bis zum Leistungsnachweis – in fünf klaren Schritten.</p>
          </div>

          <div class="relative max-w-4xl mx-auto">
            <div class="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300 transform lg:-translate-x-1/2"></div>
            <div class="space-y-12">
              <div v-for="(step, index) in flowSteps" :key="step.number" class="relative animate-on-scroll" :style="{ animationDelay: `${index * 0.1}s` }">
                <div class="flex items-start gap-6 lg:gap-12" :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold z-10 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 shadow-lg">{{ step.number }}</div>
                  <div class="flex-1 pb-2 lg:w-5/12 bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm" :class="index % 2 === 0 ? 'lg:mr-auto lg:text-right' : 'lg:ml-auto lg:text-left'">
                    <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-2">{{ step.title }}</h3>
                    <p class="text-neutral-600 dark:text-neutral-400">{{ step.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Modules Section -->
      <section id="module" class="section-padding bg-neutral-50 dark:bg-neutral-800/50">
        <div class="section-container">
          <div class="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span class="badge badge-primary mb-4 animate-on-scroll">Features</span>
            <h2 class="section-title animate-on-scroll">Kernmodule</h2>
            <p class="section-subtitle animate-on-scroll mx-auto">Fokussierte Bausteine für den Projektalltag – nicht mehr, nicht weniger.</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <div v-for="(module, index) in coreModules" :key="module.title" class="card group hover:border-primary-300 dark:hover:border-primary-700 animate-on-scroll" :style="{ animationDelay: `${index * 0.1}s` }">
              <div class="flex items-start justify-between mb-4">
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-900/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg v-if="module.icon === 'project'" class="w-7 h-7 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  <svg v-else-if="module.icon === 'meeting'" class="w-7 h-7 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <svg v-else-if="module.icon === 'time'" class="w-7 h-7 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span class="badge badge-success text-xs">Aktiv</span>
              </div>
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{{ module.title }}</h3>
              <p class="text-neutral-600 dark:text-neutral-400">{{ module.description }}</p>
            </div>
          </div>

          <div class="text-center mb-8"><span class="badge badge-warning">In Entwicklung</span></div>
          <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div v-for="(module, index) in upcomingModules" :key="module.title" class="card border-dashed opacity-80 hover:opacity-100 transition-opacity animate-on-scroll" :style="{ animationDelay: `${(index + 3) * 0.1}s` }">
              <div class="flex items-start justify-between mb-4">
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-900/10 flex items-center justify-center">
                  <svg v-if="module.icon === 'portfolio'" class="w-7 h-7 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                  <svg v-else-if="module.icon === 'report'" class="w-7 h-7 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <svg v-else-if="module.icon === 'ai'" class="w-7 h-7 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{{ module.title }}</h3>
              <p class="text-neutral-600 dark:text-neutral-400">{{ module.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Reporting & KI Section -->
      <section id="reporting" class="section-padding bg-white dark:bg-neutral-900">
        <div class="section-container">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div class="animate-on-scroll">
              <span class="badge badge-primary mb-4">Reporting</span>
              <h2 class="section-title mb-6">Reporting, das auf eine Seite passt.</h2>
              <ul class="space-y-5 mb-8">
                <li class="flex items-start gap-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                  <div class="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  </div>
                  <div><strong class="text-neutral-900 dark:text-white block mb-1">Weekly Digest</strong><span class="text-neutral-600 dark:text-neutral-400">Status, Fortschritt, Blocker, nächste Schritte</span></div>
                </li>
                <li class="flex items-start gap-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                  <div class="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  </div>
                  <div><strong class="text-neutral-900 dark:text-white block mb-1">Leistungsnachweis</strong><span class="text-neutral-600 dark:text-neutral-400">Stunden + Tätigkeiten, freigabefähig</span></div>
                </li>
                <li class="flex items-start gap-4 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                  <div class="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  </div>
                  <div><strong class="text-neutral-900 dark:text-white block mb-1">Portfolio light</strong><span class="text-neutral-600 dark:text-neutral-400">Projekte, Ampel, Top-Blocker</span></div>
                </li>
              </ul>
            </div>

            <div class="animate-on-scroll" style="animation-delay: 0.1s">
              <div class="bg-gradient-to-br from-violet-50 to-primary-50 dark:from-violet-900/20 dark:to-primary-900/20 rounded-2xl p-8 border border-violet-200 dark:border-violet-800">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-14 h-14 rounded-xl bg-white dark:bg-neutral-800 shadow-sm flex items-center justify-center">
                    <svg class="w-7 h-7 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </div>
                  <div><h3 class="text-xl font-semibold text-neutral-900 dark:text-white">KI-Assist</h3><span class="badge badge-primary text-xs">Nicht autonom</span></div>
                </div>
                <ul class="space-y-4 mb-6">
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-violet-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    <span class="text-neutral-700 dark:text-neutral-300">KI erstellt Entwürfe (Notes, Actions, Nachweistext, Weekly Digest)</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-violet-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    <span class="text-neutral-700 dark:text-neutral-300">Du prüfst und übernimmst – kein Autopilot</span>
                  </li>
                </ul>
                <div class="bg-white dark:bg-neutral-800 rounded-xl p-4 border border-violet-200 dark:border-violet-700">
                  <p class="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                    <svg class="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    KI-Provider austauschbar (Cloud oder self-host)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- DSGVO Section -->
      <section id="dsgvo" class="section-padding bg-neutral-50 dark:bg-neutral-800/50">
        <div class="section-container">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <span class="badge badge-success mb-4 animate-on-scroll">
                <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                Self-hosted
              </span>
              <h2 class="section-title animate-on-scroll">DSGVO & Compliance – pragmatisch.</h2>
              <p class="section-subtitle animate-on-scroll mx-auto">Datenhoheit bei dir. Keine Kompromisse bei Sicherheit.</p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div class="flex items-start gap-4 p-5 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 animate-on-scroll">
                <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                </div>
                <div><h4 class="font-semibold text-neutral-900 dark:text-white mb-1">Eure Umgebung</h4><p class="text-sm text-neutral-600 dark:text-neutral-400">Daten bleiben bei euch (VM/Docker)</p></div>
              </div>
              <div class="flex items-start gap-4 p-5 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 animate-on-scroll" style="animation-delay: 0.1s">
                <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <div><h4 class="font-semibold text-neutral-900 dark:text-white mb-1">Rollen & Rechte</h4><p class="text-sm text-neutral-600 dark:text-neutral-400">Admin, Projektleitung, Member, Viewer</p></div>
              </div>
              <div class="flex items-start gap-4 p-5 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 animate-on-scroll" style="animation-delay: 0.2s">
                <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                </div>
                <div><h4 class="font-semibold text-neutral-900 dark:text-white mb-1">Audit-Log</h4><p class="text-sm text-neutral-600 dark:text-neutral-400">Änderungen & Freigaben nachvollziehbar</p></div>
              </div>
              <div class="flex items-start gap-4 p-5 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 animate-on-scroll" style="animation-delay: 0.3s">
                <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                </div>
                <div><h4 class="font-semibold text-neutral-900 dark:text-white mb-1">Export & Löschung</h4><p class="text-sm text-neutral-600 dark:text-neutral-400">Löschkonzept + Datenportabilität</p></div>
              </div>
              <div class="flex items-start gap-4 p-5 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 animate-on-scroll sm:col-span-2 lg:col-span-2" style="animation-delay: 0.4s">
                <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                </div>
                <div><h4 class="font-semibold text-neutral-900 dark:text-white mb-1">Retention & Archivierung</h4><p class="text-sm text-neutral-600 dark:text-neutral-400">Aufbewahrungsfristen für Nachweise konfigurierbar</p></div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center animate-on-scroll">
              <p class="text-white text-lg font-medium">Keine Fremdcloud nötig – optional integrierbar.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Roadmap Section -->
      <section id="roadmap" class="section-padding bg-white dark:bg-neutral-900">
        <div class="section-container">
          <div class="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span class="badge badge-primary mb-4 animate-on-scroll">Entwicklung</span>
            <h2 class="section-title animate-on-scroll">Roadmap</h2>
            <p class="section-subtitle animate-on-scroll mx-auto">Transparent, was kommt – und wann.</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div class="animate-on-scroll">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-4 h-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30"></div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">Now</h3>
                <span class="text-xs text-neutral-500 dark:text-neutral-400">Aktuell</span>
              </div>
              <div class="bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-2xl p-6">
                <ul class="space-y-4">
                  <li v-for="item in roadmapNow" :key="item" class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                    <span class="text-neutral-700 dark:text-neutral-300">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="animate-on-scroll" style="animation-delay: 0.1s">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-4 h-4 rounded-full bg-amber-500 shadow-lg shadow-amber-500/30"></div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">Next</h3>
                <span class="text-xs text-neutral-500 dark:text-neutral-400">Geplant</span>
              </div>
              <div class="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-2xl p-6">
                <ul class="space-y-4">
                  <li v-for="item in roadmapNext" :key="item" class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span class="text-neutral-700 dark:text-neutral-300">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="animate-on-scroll" style="animation-delay: 0.2s">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-4 h-4 rounded-full bg-neutral-400 shadow-lg shadow-neutral-400/30"></div>
                <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">Later</h3>
                <span class="text-xs text-neutral-500 dark:text-neutral-400">Vision</span>
              </div>
              <div class="bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 rounded-2xl p-6">
                <ul class="space-y-4">
                  <li v-for="item in roadmapLater" :key="item" class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-neutral-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span class="text-neutral-700 dark:text-neutral-300">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="section-padding bg-neutral-50 dark:bg-neutral-800/50">
        <div class="section-container">
          <div class="max-w-3xl mx-auto">
            <div class="text-center mb-12">
              <span class="badge badge-primary mb-4 animate-on-scroll">FAQ</span>
              <h2 class="section-title animate-on-scroll">Häufige Fragen</h2>
            </div>
            <div class="space-y-4">
              <div v-for="(faq, index) in faqItems" :key="index" class="card animate-on-scroll" :style="{ animationDelay: `${index * 0.1}s` }">
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-3 flex items-start gap-3">
                  <span class="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary-600 dark:text-primary-400">?</span>
                  {{ faq.question }}
                </h3>
                <p class="text-neutral-600 dark:text-neutral-400 pl-9">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section class="section-padding bg-white dark:bg-neutral-900">
        <div class="section-container">
          <div class="max-w-4xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div class="animate-on-scroll">
                <span class="badge badge-primary mb-4">Über uns</span>
                <h2 class="section-title mb-6">Gebaut aus Praxis.</h2>
                <p class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">WorldOfProject ist ein Produkt von <strong class="text-neutral-900 dark:text-white">IC-RESULTING</strong> – entwickelt aus jahrelanger Projekt- und Service-Management-Erfahrung von <strong class="text-neutral-900 dark:text-white">Dipl.-Inf. Ibrahim Canakci</strong>.</p>
                <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">Ziel: einfache Standards, die Teams sofort einsetzen können – ohne wochenlange Einführung, ohne überbordende Komplexität. ProjectOps-Software so pragmatisch wie die Beratung dahinter.</p>
                <div class="flex flex-wrap gap-3">
                  <span class="badge bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">PRINCE2</span>
                  <span class="badge bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">ITIL</span>
                  <span class="badge bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">DevSecOps</span>
                  <span class="badge bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">KI & Automatisierung</span>
                  <span class="badge bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">SÜ2</span>
                </div>
              </div>

              <div class="animate-on-scroll" style="animation-delay: 0.1s">
                <div class="bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
                  <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 bg-white dark:bg-neutral-700 rounded-xl shadow-sm flex items-center justify-center"><span class="text-2xl font-bold text-primary-600">IC</span></div>
                    <div><div class="font-semibold text-neutral-900 dark:text-white">IC-RESULTING</div><div class="text-sm text-neutral-500 dark:text-neutral-400">Resulting statt Beratung</div></div>
                  </div>
                  <p class="text-neutral-600 dark:text-neutral-400 mb-6 text-sm">IT-Komplettlösungen für Unternehmen: Wir übernehmen Ihre IT-Verantwortung mit klarer Verantwortung und messbaren Ergebnissen.</p>
                  <div class="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      Wiesbaden • Berlin • Köln
                    </div>
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      info@ic-resulting.de
                    </div>
                  </div>
                  <a href="https://ic-resulting.de" target="_blank" rel="noopener" class="inline-flex items-center mt-6 text-primary-600 dark:text-primary-400 font-medium hover:underline">
                    ic-resulting.de besuchen
                    <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact / Early Access Section -->
      <section id="kontakt" class="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs><pattern id="contact-grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" stroke-width="0.5"/></pattern></defs>
            <rect width="100" height="100" fill="url(#contact-grid)"/>
          </svg>
        </div>

        <div class="section-container relative">
          <div class="max-w-2xl mx-auto text-center text-white">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-6 animate-on-scroll">
              <span class="relative flex h-2 w-2 mr-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Early Access
            </span>
            <h2 class="text-3xl lg:text-4xl font-bold mb-6 animate-on-scroll">Early Access anfragen</h2>
            <p class="text-primary-100 text-lg mb-10 animate-on-scroll">Wenn du ProjectOps ohne Overhead testen willst (self-hosted, DACH-Fokus), schreib uns einfach eine E-Mail. Wir melden uns für die nächsten Schritte.</p>

            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 animate-on-scroll">
              <div class="grid sm:grid-cols-3 gap-6">
                <div class="flex flex-col items-center">
                  <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div class="text-sm font-medium mb-1">E-Mail</div>
                  <a href="mailto:info@ic-resulting.de" class="text-primary-200 hover:text-white transition-colors text-sm">info@ic-resulting.de</a>
                </div>
                <div class="flex flex-col items-center">
                  <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div class="text-sm font-medium mb-1">Telefon</div>
                  <a href="tel:+4917661865980" class="text-primary-200 hover:text-white transition-colors text-sm">+49 176 618 659 80</a>
                </div>
                <div class="flex flex-col items-center">
                  <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div class="text-sm font-medium mb-1">Standort</div>
                  <span class="text-primary-200 text-sm">Wiesbaden</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
              <a href="mailto:info@ic-resulting.de?subject=Early%20Access%20Anfrage%20WorldOfProject" class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-colors shadow-lg">
                <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Early Access per E-Mail anfragen
              </a>
              <a href="https://ic-resulting.de/kontakt" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors border border-white/20">
                IC-RESULTING kontaktieren
                <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-neutral-900 dark:bg-neutral-950 text-neutral-400 py-12">
      <div class="section-container">
        <div class="grid md:grid-cols-4 gap-8 mb-10">
          <div class="md:col-span-2">
            <a href="#" class="flex items-center gap-3 mb-4">
              <svg class="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" class="fill-primary-600"/>
                <circle cx="24" cy="24" r="20" stroke="white" stroke-width="1.5" stroke-opacity="0.3"/>
                <ellipse cx="24" cy="24" rx="20" ry="10" stroke="white" stroke-width="1" stroke-opacity="0.4" fill="none"/>
                <ellipse cx="24" cy="24" rx="10" ry="20" stroke="white" stroke-width="1" stroke-opacity="0.4" fill="none"/>
                <rect x="16" y="16" width="16" height="16" rx="3" fill="white"/>
                <path d="M20 22h8M20 26h6" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
                <circle cx="32" cy="32" r="6" fill="#10b981"/>
                <path d="M30 32l1.5 1.5 3-3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-xl font-bold text-white">WorldOfProject</span>
            </a>
            <p class="text-sm mb-4 max-w-md">ProjectOps ohne Overhead. Self-hosted. DSGVO-freundlich. Ein Produkt von IC-RESULTING.</p>
            <p class="text-xs text-neutral-500">Wiesbaden • Berlin • Köln</p>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4">Produkt</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#ueberblick" class="hover:text-white transition-colors">Überblick</a></li>
              <li><a href="#module" class="hover:text-white transition-colors">Module</a></li>
              <li><a href="#roadmap" class="hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#kontakt" class="hover:text-white transition-colors">Early Access</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4">IC-RESULTING</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="https://ic-resulting.de" target="_blank" rel="noopener" class="hover:text-white transition-colors">Website</a></li>
              <li><a href="https://ic-resulting.de/kontakt" target="_blank" rel="noopener" class="hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="https://ic-resulting.de/ueber-uns" target="_blank" rel="noopener" class="hover:text-white transition-colors">Über uns</a></li>
              <li><a href="https://ic-resulting.de/loesungen" target="_blank" rel="noopener" class="hover:text-white transition-colors">Lösungen</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm">© {{ currentYear }} WorldOfProject – Ein Produkt von IC-RESULTING</p>
          <div class="flex items-center gap-6 text-sm">
            <NuxtLink to="/impressum" class="hover:text-white transition-colors">Impressum</NuxtLink>
            <NuxtLink to="/datenschutz" class="hover:text-white transition-colors">Datenschutz</NuxtLink>
            <a href="https://www.linkedin.com/in/ibrahim-canakci-ic-resulting/" target="_blank" rel="noopener" class="hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://www.xing.com/profile/Ibrahim_Canakci/web_profiles" target="_blank" rel="noopener" class="hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.026c-.104.193-.09.385.009.535.074.142.239.22.45.22h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.659-.962-.659H3.648v-.001z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
