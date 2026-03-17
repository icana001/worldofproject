<script setup lang="ts">
useSeoMeta({
  title: 'Dudo B2B – Digitale Bestands- & Bestellverwaltung | IC-RESULTING',
  description: 'Dudo B2B: Die digitale Plattform für Bestands- und Bestellverwaltung. Mehr Übersicht, weniger Aufwand – zentrale Steuerung über Lager, Filialen und Bestellungen. Entwickelt in Wiesbaden.',
  ogTitle: 'Dudo B2B – Digitale Bestands- & Bestellverwaltung',
  ogDescription: 'Zentrale Steuerung für Lager, Filialen und Bestellungen. Digitale Bestandsverwaltung für Unternehmen mit mehreren Standorten.',
  ogImage: 'https://worldofproject.com/DUDU_Plattform_Werbung.png',
  twitterTitle: 'Dudo B2B – Digitale Bestands- & Bestellverwaltung',
  twitterDescription: 'Zentrale Plattform für Bestands- und Bestellverwaltung. Mehr Übersicht, weniger Aufwand.',
  twitterImage: 'https://worldofproject.com/DUDU_Plattform_Werbung.png',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://worldofproject.com/dudo-b2b/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Dudo B2B',
        applicationCategory: 'BusinessApplication',
        description: 'Digitale Plattform für Bestands- und Bestellverwaltung. Zentrale Steuerung über Lager, Filialen und Bestellungen.',
        url: 'https://worldofproject.com/dudo-b2b/',
        image: 'https://worldofproject.com/DUDU_Plattform_Werbung.png',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR',
          description: 'Kontaktieren Sie uns für ein individuelles Angebot',
        },
        featureList: [
          'Zentrale Bestandsübersicht',
          'Digitale Bestellprozesse',
          'Standortübergreifende Verwaltung',
          'Echtzeit-Bestandsdaten',
          'Automatisierte Abläufe',
          'Klare Datenbasis',
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
    title: 'Zentrale Übersicht',
    desc: 'Alle Lager- und Filialbestände auf einen Blick – standortübergreifend und in Echtzeit.',
    icon: 'eye',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Bessere Bestandskontrolle',
    desc: 'Exakte Bestandsdaten statt manueller Listen – für weniger Fehlbestände und Überbestände.',
    icon: 'chart',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    title: 'Digitale Bestellprozesse',
    desc: 'Bestellungen digital erfassen, verfolgen und auswerten – vom Bedarf bis zur Lieferung.',
    icon: 'cart',
    color: 'from-violet-500 to-violet-600',
  },
  {
    title: 'Weniger manueller Aufwand',
    desc: 'Automatisierte Abläufe ersetzen manuelle Abstimmung per Telefon, E-Mail oder Tabelle.',
    icon: 'bolt',
    color: 'from-amber-500 to-amber-600',
  },
  {
    title: 'Klare Datenbasis',
    desc: 'Fundierte Entscheidungen auf Basis aktueller Zahlen statt Bauchgefühl.',
    icon: 'database',
    color: 'from-rose-500 to-rose-600',
  },
  {
    title: 'Einfache Steuerung',
    desc: 'Produkte, Standorte, Bestellungen und Einkäufe zentral verwalten – ohne Systembrüche.',
    icon: 'cog',
    color: 'from-cyan-500 to-cyan-600',
  },
]

const module = [
  { name: 'Produktverwaltung', desc: 'Artikel, Kategorien, Varianten' },
  { name: 'Lagerbestand', desc: 'Echtzeit-Bestandsführung je Standort' },
  { name: 'Filialmanagement', desc: 'Standorte zentral verwalten' },
  { name: 'Bestellungen', desc: 'Interne Bestellprozesse digital abbilden' },
  { name: 'Externe Einkäufe', desc: 'Lieferantenbestellungen erfassen' },
  { name: 'Dashboard & Auswertungen', desc: 'Kennzahlen und Reports' },
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
              <span class="text-lg font-bold text-neutral-900 dark:text-white">IC-RESULTING</span>
              <span class="hidden sm:inline text-sm text-neutral-500 dark:text-neutral-400 ml-2">Produkte</span>
            </div>
          </NuxtLink>
          <div class="flex items-center gap-4">
            <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
              <NuxtLink to="/webstree" class="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Webstree</NuxtLink>
              <NuxtLink to="/qr-menu" class="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">QR-Menü</NuxtLink>
              <NuxtLink to="/dudo-b2b" class="text-primary-600 dark:text-primary-400 font-semibold">Dudo B2B</NuxtLink>
            </nav>
            <a href="https://ic-resulting.de/kontakt" target="_blank" class="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors">
              Kontakt
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
      <section class="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center">
            <span class="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-blue-300 mb-6 border border-blue-400/30">
              Produktlösung • Bestands- & Bestellverwaltung
            </span>
            <img src="/Logo_Dudo.png" alt="Dudo B2B Logo" class="h-16 mx-auto mb-4 object-contain" />
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Dudo B2B</span>
            </h1>
            <p class="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-2">
              Die digitale Plattform für <strong class="text-white">Bestands- und Bestellverwaltung</strong> – mehr Übersicht, weniger Aufwand, bessere Steuerung über Lager, Filialen und Bestellungen.
            </p>
            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://ic-resulting.de/kontakt" target="_blank" class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-400 hover:to-cyan-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                Jetzt Projekt besprechen
              </a>
              <a href="https://ic-resulting.de/loesungen" target="_blank" class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                Alle Lösungen
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Vorteile -->
      <section class="py-20 lg:py-28 bg-white dark:bg-neutral-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
              Vorteile
            </span>
            <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Warum <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Dudo B2B</span>?
            </h2>
            <p class="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Dudo B2B schafft Transparenz und Effizienz in Unternehmen mit Lager und mehreren Filialen – durch eine zentrale, digitale Steuerung aller Bestände und Bestellungen.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="v in vorteile" :key="v.title" class="bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all">
              <div :class="['w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-lg', v.color]">
                <!-- Eye -->
                <svg v-if="v.icon === 'eye'" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                <!-- Chart -->
                <svg v-if="v.icon === 'chart'" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                <!-- Cart -->
                <svg v-if="v.icon === 'cart'" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
                <!-- Bolt -->
                <svg v-if="v.icon === 'bolt'" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <!-- Database -->
                <svg v-if="v.icon === 'database'" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                <!-- Cog -->
                <svg v-if="v.icon === 'cog'" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 class="text-lg font-bold text-neutral-900 dark:text-white mb-2">{{ v.title }}</h3>
              <p class="text-neutral-600 dark:text-neutral-400">{{ v.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Module -->
      <section class="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 dark:from-neutral-900 dark:via-blue-950/20 dark:to-cyan-950/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-semibold mb-4">
              Funktionen
            </span>
            <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Die wichtigsten Module im Überblick
            </h2>
            <p class="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Dudo B2B vereint alle relevanten Prozesse rund um Produkte, Bestände, Bestellungen und Standorte in einer Plattform – übersichtlich, digital und effizient.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(m, i) in module" :key="m.name" class="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold mb-4">
                {{ i + 1 }}
              </div>
              <h3 class="text-lg font-bold text-neutral-900 dark:text-white mb-2">{{ m.name }}</h3>
              <p class="text-neutral-600 dark:text-neutral-400">{{ m.desc }}</p>
            </div>
          </div>

          <!-- Plattform Bild -->
          <div class="mt-12 relative">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl blur-3xl opacity-15"></div>
            <div class="relative bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 shadow-2xl overflow-hidden">
              <img src="/DUDU_Plattform_Werbung.png" alt="Dudo B2B Plattform – Digitale Bestands- und Bestellverwaltung" class="w-full h-auto rounded-xl" />
            </div>
          </div>

          <div class="mt-12 bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700 text-center">
            <p class="text-lg text-neutral-700 dark:text-neutral-300">
              <strong class="text-neutral-900 dark:text-white">Ergebnis:</strong> Eine zentrale Datenbasis für fundierte Entscheidungen und weniger manuellen Aufwand.
            </p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-20 bg-gradient-to-br from-blue-600 via-cyan-700 to-blue-800 relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Interesse an Dudo B2B?</h2>
          <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam besprechen, wie Dudo B2B Ihre Bestands- und Bestellprozesse verbessern kann – unverbindlich und ohne Verkaufsdruck.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="https://ic-resulting.de/kontakt" target="_blank" class="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Kontakt aufnehmen
            </a>
            <a href="https://ic-resulting.de/loesungen" target="_blank" class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
              Alle Lösungen ansehen
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
            <p class="text-sm max-w-md">
              IT-Komplettlösungen für Unternehmen: Wir übernehmen Ihre IT-Verantwortung mit klarer Verantwortung und messbaren Ergebnissen.
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Produkte</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/webstree" class="hover:text-white transition-colors">Webstree</NuxtLink></li>
              <li><NuxtLink to="/qr-menu" class="hover:text-white transition-colors">UPQR – QR-Menü</NuxtLink></li>
              <li><NuxtLink to="/dudo-b2b" class="hover:text-white transition-colors font-medium text-white">Dudo B2B</NuxtLink></li>
              <li><NuxtLink to="/" class="hover:text-white transition-colors">Software Suite</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Links</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="https://ic-resulting.de" target="_blank" class="hover:text-white transition-colors">ic-resulting.de</a></li>
              <li><NuxtLink to="/impressum" class="hover:text-white transition-colors">Impressum</NuxtLink></li>
              <li><NuxtLink to="/datenschutz" class="hover:text-white transition-colors">Datenschutz</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <span>&copy; {{ new Date().getFullYear() }} IC-RESULTING & Partner. Alle Rechte vorbehalten.</span>
          <span class="px-3 py-1.5 bg-slate-800 rounded-full text-xs flex items-center gap-2">
            <span class="text-base">🇩🇪</span>
            Entwickelt in Deutschland
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>
