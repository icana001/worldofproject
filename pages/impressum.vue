<script setup lang="ts">
useHead({
  title: 'Impressum – WorldOfProject | IC-RESULTING',
  meta: [
    { name: 'robots', content: 'noindex, follow' },
    { name: 'description', content: 'Impressum von WorldOfProject - Ein Produkt von IC-RESULTING, Dipl.-Inf. Ibrahim Canakci, Wiesbaden.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://worldofproject.com/impressum' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-neutral-900">
    <!-- Header -->
    <header class="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <svg class="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="22" class="fill-primary-600"/>
              <circle cx="24" cy="24" r="20" stroke="white" stroke-width="1.5" stroke-opacity="0.3"/>
              <rect x="16" y="16" width="16" height="16" rx="3" fill="white"/>
              <path d="M20 22h8M20 26h6" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
              <circle cx="32" cy="32" r="6" fill="#10b981"/>
              <path d="M30 32l1.5 1.5 3-3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-lg font-bold text-neutral-900 dark:text-white">WorldOfProject</span>
          </NuxtLink>
          <NuxtLink to="/" class="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Zurück
          </NuxtLink>
        </div>
      </div>
    </header>

    <main class="py-12 lg:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-8">Impressum</h1>

        <div class="prose prose-neutral dark:prose-invert max-w-none">
          <section class="mb-10">
            <h2 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Angaben gemäß § 5 TMG</h2>
            <div class="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
              <p class="text-neutral-700 dark:text-neutral-300 mb-4">
                <strong class="text-neutral-900 dark:text-white">IC-RESULTING</strong><br>
                Dipl.-Inf. Ibrahim Canakci
              </p>
              <p class="text-neutral-700 dark:text-neutral-300 mb-4">
                Obere Webergasse 58<br>
                65183 Wiesbaden<br>
                Deutschland
              </p>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Kontakt</h2>
            <div class="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 space-y-3">
              <p class="text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                <svg class="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+4917661865980" class="text-primary-600 dark:text-primary-400 hover:underline">+49 (0) 176 618 659 80</a>
              </p>
              <p class="text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                <svg class="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@ic-resulting.de" class="text-primary-600 dark:text-primary-400 hover:underline">info@ic-resulting.de</a>
              </p>
              <p class="text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                <svg class="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                <a href="https://ic-resulting.de" target="_blank" rel="noopener" class="text-primary-600 dark:text-primary-400 hover:underline">ic-resulting.de</a>
              </p>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Umsatzsteuer-ID / Steuernummer</h2>
            <div class="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
              <p class="text-neutral-700 dark:text-neutral-300">
                Steuernummer: <strong class="text-neutral-900 dark:text-white">040 809 05418</strong>
              </p>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div class="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
              <p class="text-neutral-700 dark:text-neutral-300">
                Dipl.-Inf. Ibrahim Canakci<br>
                Obere Webergasse 58<br>
                65183 Wiesbaden
              </p>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Haftungsausschluss</h2>
            
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium text-neutral-900 dark:text-white mb-2">Haftung für Inhalte</h3>
                <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-medium text-neutral-900 dark:text-white mb-2">Haftung für Links</h3>
                <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-medium text-neutral-900 dark:text-white mb-2">Urheberrecht</h3>
                <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Streitschlichtung</h2>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener" class="text-primary-600 dark:text-primary-400 hover:underline">https://ec.europa.eu/consumers/odr</a>. 
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-neutral-100 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500 dark:text-neutral-400">
          <p>© {{ new Date().getFullYear() }} WorldOfProject – Ein Produkt von IC-RESULTING</p>
          <div class="flex items-center gap-4">
            <NuxtLink to="/" class="hover:text-neutral-900 dark:hover:text-white transition-colors">Startseite</NuxtLink>
            <NuxtLink to="/datenschutz" class="hover:text-neutral-900 dark:hover:text-white transition-colors">Datenschutz</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
