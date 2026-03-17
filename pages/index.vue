<script setup lang="ts">
import { ref, computed } from 'vue'

// SEO - Webstree KI-Plattform / AI Platform
useSeoMeta({
  title: 'IC-RESULTING Software Suite | Webstree KI-Plattform, UPQR, Dudo B2B',
  description: 'IC-RESULTING Software Suite: Webstree KI-Plattform, UPQR digitales QR-Menü und Dudo B2B Bestandsverwaltung. Deutsche Software – lokal, sicher, DSGVO-konform. Entwickelt in Wiesbaden.',
  ogTitle: 'IC-RESULTING Software Suite | Webstree, UPQR & Dudo B2B',
  ogDescription: 'Professionelle Softwarelösungen für KMU: KI-Plattform, digitales QR-Menü und Bestandsverwaltung. Entwickelt in Deutschland, DSGVO-konform.',
  ogImage: 'https://worldofproject.com/IC-Resulting_Wiesbaden_logo.png',
  twitterTitle: 'IC-RESULTING Software Suite | Webstree, UPQR & Dudo B2B',
  twitterDescription: 'Professionelle Software für KMU: KI-Plattform, QR-Menü, Bestandsverwaltung. DSGVO-konform, entwickelt in Wiesbaden.',
  twitterImage: 'https://worldofproject.com/IC-Resulting_Wiesbaden_logo.png',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://worldofproject.com' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'IC-RESULTING Software Suite',
        description: 'Professionelle Softwarelösungen für KMU: Webstree KI-Plattform, UPQR digitales QR-Menü und Dudo B2B Bestandsverwaltung.',
        url: 'https://worldofproject.com',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Webstree – Open Source KI-Plattform',
              url: 'https://worldofproject.com/webstree/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'UPQR – Digitales QR-Menü',
              url: 'https://worldofproject.com/qr-menu/',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Dudo B2B – Bestandsverwaltung',
              url: 'https://worldofproject.com/dudo-b2b/',
            },
          ],
        },
        publisher: {
          '@type': 'Organization',
          name: 'IC-RESULTING & Partner',
          url: 'https://ic-resulting.de',
          logo: {
            '@type': 'ImageObject',
            url: 'https://worldofproject.com/IC-Resulting_Wiesbaden_logo.png',
          },
        },
      }),
    },
  ],
})

// Dark mode
const isDarkMode = ref(false)
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

// Categories
const categories = [
  { id: 'ppm', name: 'PPM Software', icon: 'project', color: 'blue', count: 3 },
  { id: 'ki', name: 'KI-Tools', icon: 'ai', color: 'violet', count: 4 },
  { id: 'automation', name: 'Automatisierung', icon: 'automation', color: 'emerald', count: 2 },
  { id: 'devsecops', name: 'DevSecOps', icon: 'security', color: 'amber', count: 3 },
  { id: 'reporting', name: 'Reporting', icon: 'report', color: 'rose', count: 2 },
  { id: 'integration', name: 'Integrationen', icon: 'integration', color: 'cyan', count: 5 },
]

const activeCategory = ref<string | null>(null)
const selectedTool = ref<any>(null)

// Tools data
const tools = ref([
  // PPM Software
  {
    id: 'worldofproject',
    category: 'ppm',
    name: 'WorldOfProject',
    tagline: 'ProjectOps ohne Overhead',
    description: 'Self-hosted Projektmanagement für One-Page Projekte, Meeting Notes, Zeiterfassung und Leistungsnachweise.',
    features: ['One-Page Projekte', 'Meeting Notes → Actions', 'Zeiterfassung & Leistungsnachweise', 'Kanban Board', 'DSGVO-konform', 'Self-hosted'],
    status: 'beta',
    screenshots: [
      { title: 'Dashboard', desc: 'Übersicht aller Projekte mit Ampelstatus' },
      { title: 'Projekt-Board', desc: 'Kanban-Ansicht mit Drag & Drop' },
      { title: 'Zeiterfassung', desc: 'Einfache Stundenrückmeldung pro Task' },
    ],
    demoCode: `// Projekt anlegen
const projekt = await createProject({
  name: "CRM Migration",
  owner: "Max Mustermann",
  scope: "Phase 1: Analyse & Design",
  deadline: "2026-06-30"
});

// Meeting Notes mit KI-Assist
const notes = await generateMeetingNotes({
  projectId: projekt.id,
  participants: ["Team Lead", "Dev", "PO"],
  aiAssist: true // KI erstellt Entwurf
});`,
  },
  {
    id: 'portfolio-light',
    category: 'ppm',
    name: 'Portfolio Light',
    tagline: 'Projektportfolio auf einen Blick',
    description: 'Übersicht aller Projekte mit Ampelstatus, Budget-Tracking und Top-Blocker Analyse.',
    features: ['Multi-Projekt-Übersicht', 'Ampelstatus (R/Y/G)', 'Budget-Tracking', 'Ressourcen-Heatmap', 'Executive Reports'],
    status: 'coming',
    screenshots: [
      { title: 'Portfolio Dashboard', desc: 'Alle Projekte mit Status auf einen Blick' },
      { title: 'Budget-Übersicht', desc: 'Plan vs. Ist Vergleich' },
    ],
    demoCode: `// Portfolio Status abrufen
const portfolio = await getPortfolioStatus({
  filter: { status: ["active", "at-risk"] },
  sortBy: "priority"
});

// Executive Summary generieren
const report = await generateExecSummary({
  period: "Q1-2026",
  includeBlockers: true,
  format: "pdf"
});`,
  },
  {
    id: 'resource-planner',
    category: 'ppm',
    name: 'Resource Planner',
    tagline: 'Kapazitätsplanung leicht gemacht',
    description: 'Visuelle Ressourcenplanung mit Auslastungsansicht und Skill-Matrix.',
    features: ['Kapazitätsplanung', 'Skill-Matrix', 'Urlaubsübersicht', 'Auslastungs-Heatmap', 'Konflikt-Erkennung'],
    status: 'coming',
    screenshots: [
      { title: 'Auslastung', desc: 'Team-Kapazität im Überblick' },
    ],
    demoCode: `// Verfügbarkeit prüfen
const available = await checkAvailability({
  skills: ["Vue.js", "DevOps"],
  period: { start: "2026-03-01", end: "2026-03-31" },
  minCapacity: 0.5 // 50%
});`,
  },

  // KI-Tools
  {
    id: 'ki-meeting-notes',
    category: 'ki',
    name: 'KI Meeting Notes',
    tagline: 'Meetings automatisch dokumentieren',
    description: 'KI-gestützte Erstellung von Meeting-Protokollen, Decisions und Action Items aus Audioaufnahmen oder Notizen.',
    features: ['Automatische Transkription', 'Action Item Extraktion', 'Decision Tracking', 'Participant Detection', 'Multi-Language Support'],
    status: 'active',
    screenshots: [
      { title: 'Transkription', desc: 'Echtzeit-Mitschrift mit Speaker Detection' },
      { title: 'Actions', desc: 'Automatisch erkannte Aufgaben mit Verantwortlichen' },
    ],
    demoCode: `// Meeting aufnehmen und analysieren
const meeting = await processMeeting({
  audioUrl: "meeting-2026-02-28.mp3",
  language: "de",
  extractActions: true,
  identifySpeakers: true
});

// Ergebnis
console.log(meeting.summary);
// "Diskussion über Q2 Roadmap. 
//  3 Entscheidungen getroffen, 
//  7 Action Items erstellt."

meeting.actions.forEach(action => {
  console.log(\`[\${action.assignee}] \${action.title}\`);
});`,
  },
  {
    id: 'ki-code-review',
    category: 'ki',
    name: 'KI Code Review',
    tagline: 'Intelligente Code-Analyse',
    description: 'Automatische Code-Reviews mit Fokus auf Security, Performance und Best Practices.',
    features: ['Security Scan', 'Performance Hints', 'Code Quality Score', 'Auto-Fix Suggestions', 'CI/CD Integration'],
    status: 'active',
    screenshots: [
      { title: 'Review Dashboard', desc: 'Übersicht aller Findings' },
      { title: 'Inline Suggestions', desc: 'Direkte Vorschläge im Code' },
    ],
    demoCode: `// Code Review starten
const review = await analyzeCode({
  repo: "github.com/company/app",
  branch: "feature/user-auth",
  checks: ["security", "performance", "style"]
});

// Ergebnisse
console.log(\`Score: \${review.score}/100\`);
console.log(\`Critical: \${review.findings.critical.length}\`);

// Auto-Fix anwenden
await applyFixes(review.autoFixable);`,
  },
  {
    id: 'ki-dokumentation',
    category: 'ki',
    name: 'KI Dokumentation',
    tagline: 'Docs die sich selbst schreiben',
    description: 'Automatische Generierung von technischer Dokumentation aus Code, APIs und Kommentaren.',
    features: ['API Docs Generation', 'README Generator', 'Changelog Automation', 'Diagram Generation', 'Multi-Format Export'],
    status: 'beta',
    screenshots: [
      { title: 'API Docs', desc: 'Automatisch generierte OpenAPI Dokumentation' },
    ],
    demoCode: `// Dokumentation generieren
const docs = await generateDocs({
  source: "./src",
  output: "./docs",
  formats: ["markdown", "html", "pdf"],
  includeExamples: true,
  language: "de"
});

// Changelog aus Git History
const changelog = await generateChangelog({
  since: "v2.0.0",
  groupBy: "type" // feat, fix, docs, etc.
});`,
  },
  {
    id: 'ki-test-generator',
    category: 'ki',
    name: 'KI Test Generator',
    tagline: 'Tests automatisch erstellen',
    description: 'Generiert Unit Tests, Integration Tests und E2E Tests basierend auf vorhandenem Code.',
    features: ['Unit Test Generation', 'E2E Test Scenarios', 'Edge Case Detection', 'Coverage Optimization', 'Framework Support'],
    status: 'coming',
    screenshots: [
      { title: 'Test Suite', desc: 'Generierte Tests mit Coverage Report' },
    ],
    demoCode: `// Tests für Funktion generieren
const tests = await generateTests({
  file: "./src/utils/validation.ts",
  framework: "vitest",
  coverage: 90, // Ziel-Coverage
  includeEdgeCases: true
});

// Tests ausführen
const results = await runTests(tests);
console.log(\`Passed: \${results.passed}/\${results.total}\`);`,
  },

  // Automatisierung
  {
    id: 'workflow-engine',
    category: 'automation',
    name: 'Workflow Engine',
    tagline: 'Prozesse automatisieren',
    description: 'Visual Workflow Builder für komplexe Geschäftsprozesse mit Bedingungen, Schleifen und Integrationen.',
    features: ['Visual Builder', 'Conditional Logic', 'Webhook Triggers', 'Scheduled Tasks', '50+ Integrationen'],
    status: 'active',
    screenshots: [
      { title: 'Workflow Builder', desc: 'Drag & Drop Prozessdesign' },
      { title: 'Execution Log', desc: 'Detaillierte Ausführungsprotokolle' },
    ],
    demoCode: `// Workflow definieren
const workflow = createWorkflow({
  name: "Onboarding Prozess",
  trigger: { type: "webhook", path: "/new-employee" },
  steps: [
    { action: "createUser", params: { role: "employee" } },
    { action: "sendEmail", template: "welcome" },
    { action: "createJiraTicket", project: "IT-SETUP" },
    { action: "notifySlack", channel: "#hr" }
  ]
});

// Workflow aktivieren
await workflow.deploy();`,
  },
  {
    id: 'data-pipeline',
    category: 'automation',
    name: 'Data Pipeline',
    tagline: 'ETL ohne Kopfschmerzen',
    description: 'Visueller ETL-Builder für Datenintegration, Transformation und Synchronisation.',
    features: ['Visual ETL Builder', 'Real-time Sync', 'Data Validation', 'Error Handling', 'Scheduling'],
    status: 'beta',
    screenshots: [
      { title: 'Pipeline Editor', desc: 'Datenfluss visualisieren' },
    ],
    demoCode: `// Data Pipeline erstellen
const pipeline = createPipeline({
  name: "CRM Sync",
  source: { type: "salesforce", query: "SELECT * FROM Contact" },
  transform: [
    { map: { vorname: "FirstName", nachname: "LastName" } },
    { filter: { field: "Status", equals: "Active" } }
  ],
  destination: { type: "postgres", table: "customers" },
  schedule: "0 */4 * * *" // Alle 4 Stunden
});`,
  },

  // DevSecOps
  {
    id: 'security-scanner',
    category: 'devsecops',
    name: 'Security Scanner',
    tagline: 'Vulnerabilities finden',
    description: 'Automatisierte Security-Scans für Dependencies, Container und Infrastructure as Code.',
    features: ['Dependency Scanning', 'Container Security', 'IaC Scanning', 'Secret Detection', 'SBOM Generation'],
    status: 'active',
    screenshots: [
      { title: 'Scan Results', desc: 'Vulnerabilities nach Severity' },
      { title: 'Dependency Graph', desc: 'Visualisierung der Abhängigkeiten' },
    ],
    demoCode: `// Security Scan starten
const scan = await runSecurityScan({
  targets: [
    { type: "dependencies", path: "./package.json" },
    { type: "container", image: "app:latest" },
    { type: "terraform", path: "./infra" }
  ],
  failOn: "high" // Build fehlschlagen bei High/Critical
});

// Report generieren
const report = await generateSecurityReport(scan, {
  format: "sarif",
  includeRemediation: true
});`,
  },
  {
    id: 'compliance-checker',
    category: 'devsecops',
    name: 'Compliance Checker',
    tagline: 'Regelkonformität prüfen',
    description: 'Automatische Prüfung gegen Compliance-Frameworks wie ISO 27001, SOC2, DSGVO.',
    features: ['ISO 27001 Checks', 'SOC2 Controls', 'DSGVO Compliance', 'Custom Policies', 'Audit Reports'],
    status: 'beta',
    screenshots: [
      { title: 'Compliance Dashboard', desc: 'Status aller Controls' },
    ],
    demoCode: `// Compliance Check
const result = await checkCompliance({
  frameworks: ["iso27001", "dsgvo"],
  scope: {
    infrastructure: true,
    application: true,
    data: true
  }
});

console.log(\`Compliant: \${result.compliantControls}/\${result.totalControls}\`);
console.log(\`Gaps: \${result.gaps.length}\`);`,
  },
  {
    id: 'deployment-guard',
    category: 'devsecops',
    name: 'Deployment Guard',
    tagline: 'Sichere Deployments',
    description: 'Policy-basierte Deployment-Kontrolle mit Approval Workflows und Rollback-Automatisierung.',
    features: ['Policy Engine', 'Approval Workflows', 'Auto-Rollback', 'Canary Deployments', 'Feature Flags'],
    status: 'coming',
    screenshots: [
      { title: 'Deployment Pipeline', desc: 'Status und Approvals' },
    ],
    demoCode: `// Deployment mit Guards
const deployment = await deploy({
  environment: "production",
  version: "v2.5.0",
  guards: {
    requireApproval: ["tech-lead", "security"],
    healthCheck: { timeout: 300, threshold: 95 },
    autoRollback: true
  },
  strategy: "canary",
  canaryPercent: 10
});`,
  },

  // Reporting
  {
    id: 'report-builder',
    category: 'reporting',
    name: 'Report Builder',
    tagline: 'Reports visuell erstellen',
    description: 'Drag & Drop Report Designer mit Live-Datenanbindung und Scheduling.',
    features: ['Visual Designer', 'Live Data Binding', 'Scheduled Delivery', 'PDF/Excel Export', 'Embed Support'],
    status: 'active',
    screenshots: [
      { title: 'Report Designer', desc: 'Visueller Editor mit Widgets' },
      { title: 'Preview', desc: 'Live-Vorschau mit echten Daten' },
    ],
    demoCode: `// Report erstellen
const report = createReport({
  name: "Weekly Status",
  layout: [
    { type: "header", content: "Projektstatus KW {{week}}" },
    { type: "chart", source: "tasks", chartType: "burndown" },
    { type: "table", source: "blockers", columns: ["title", "owner", "age"] },
    { type: "kpi", metrics: ["velocity", "burnRate", "forecast"] }
  ],
  schedule: "every monday 8:00",
  recipients: ["team@company.de"]
});`,
  },
  {
    id: 'dashboard-studio',
    category: 'reporting',
    name: 'Dashboard Studio',
    tagline: 'Live Dashboards bauen',
    description: 'Echtzeit-Dashboards mit Widgets, Alerts und Multi-Source Datenanbindung.',
    features: ['Real-time Updates', 'Custom Widgets', 'Alert Rules', 'Multi-Source', 'Embeddable'],
    status: 'active',
    screenshots: [
      { title: 'Dashboard', desc: 'Live-Metriken und Widgets' },
    ],
    demoCode: `// Dashboard erstellen
const dashboard = createDashboard({
  name: "DevOps Metrics",
  refresh: 30, // Sekunden
  widgets: [
    { type: "number", metric: "deploys_today", threshold: { warn: 5, crit: 10 } },
    { type: "timeseries", metric: "response_time_p99", range: "24h" },
    { type: "status", services: ["api", "db", "cache"] }
  ],
  alerts: [
    { condition: "response_time_p99 > 500", channel: "slack" }
  ]
});`,
  },

  // Integrationen
  {
    id: 'jira-connector',
    category: 'integration',
    name: 'Jira Connector',
    tagline: 'Bidirektionale Jira-Sync',
    description: 'Zwei-Wege-Synchronisation mit Jira inkl. Custom Fields, Workflows und Attachments.',
    features: ['Bi-directional Sync', 'Custom Field Mapping', 'Workflow Sync', 'Attachment Sync', 'Bulk Operations'],
    status: 'active',
    screenshots: [
      { title: 'Mapping Config', desc: 'Field-Mapping Konfiguration' },
    ],
    demoCode: `// Jira Sync konfigurieren
const jiraSync = configureJiraSync({
  instance: "company.atlassian.net",
  project: "PROJ",
  mapping: {
    "title": "summary",
    "description": "description",
    "status": { 
      "todo": "To Do", 
      "doing": "In Progress", 
      "done": "Done" 
    }
  },
  syncInterval: 300 // 5 Minuten
});`,
  },
  {
    id: 'slack-bot',
    category: 'integration',
    name: 'Slack Bot',
    tagline: 'Projektinfos in Slack',
    description: 'Bot für Statusupdates, Erinnerungen und Quick Actions direkt in Slack.',
    features: ['Status Commands', 'Daily Standups', 'Reminder Bot', 'Quick Actions', 'Thread Updates'],
    status: 'active',
    screenshots: [
      { title: 'Slack Commands', desc: 'Bot-Interaktionen' },
    ],
    demoCode: `// Slack Bot konfigurieren
const bot = configureSlackBot({
  commands: {
    "/status": "showProjectStatus",
    "/standup": "startStandup",
    "/remind": "createReminder"
  },
  notifications: {
    channel: "#project-updates",
    events: ["task.completed", "blocker.created"]
  }
});`,
  },
  {
    id: 'teams-connector',
    category: 'integration',
    name: 'Teams Connector',
    tagline: 'Microsoft Teams Integration',
    description: 'Native Teams-Integration mit Tabs, Bots und Adaptive Cards.',
    features: ['Teams Tab', 'Bot Commands', 'Adaptive Cards', 'Meeting Integration', 'File Sync'],
    status: 'beta',
    screenshots: [
      { title: 'Teams Tab', desc: 'Projekt-Dashboard in Teams' },
    ],
    demoCode: `// Teams Connector
const teams = configureTeams({
  tab: { 
    name: "Projekte", 
    defaultView: "dashboard" 
  },
  bot: {
    commands: ["/projekt", "/aufgaben", "/zeit"]
  },
  cards: {
    taskCreated: "adaptive-card-task.json"
  }
});`,
  },
  {
    id: 'sap-connector',
    category: 'integration',
    name: 'SAP Connector',
    tagline: 'SAP Integration',
    description: 'Integration mit SAP für Zeiten, Projekte und Kostenstellen.',
    features: ['Zeit-Sync', 'Projekt-Import', 'Kostenstellen', 'BAPI Support', 'RFC Calls'],
    status: 'coming',
    screenshots: [
      { title: 'SAP Mapping', desc: 'Daten-Mapping zu SAP' },
    ],
    demoCode: `// SAP Integration
const sap = configureSAP({
  connection: {
    ashost: "sap.company.de",
    sysnr: "00",
    client: "100"
  },
  sync: {
    projects: { bapi: "BAPI_PROJECT_GETINFO" },
    timeEntries: { bapi: "BAPI_CATIMESHEETMGR_INSERT" }
  }
});`,
  },
  {
    id: 'api-gateway',
    category: 'integration',
    name: 'API Gateway',
    tagline: 'Universelle API',
    description: 'REST & GraphQL API für alle Integrationen mit Rate Limiting und API Keys.',
    features: ['REST API', 'GraphQL', 'Webhooks', 'Rate Limiting', 'API Keys'],
    status: 'active',
    screenshots: [
      { title: 'API Docs', desc: 'Interaktive API-Dokumentation' },
    ],
    demoCode: `// API Beispiel
const response = await fetch("https://api.worldofproject.com/v1/projects", {
  headers: { "Authorization": "Bearer YOUR_API_KEY" }
});

const projects = await response.json();

// GraphQL
const query = \`
  query {
    projects(status: ACTIVE) {
      id
      name
      tasks { id title status }
    }
  }
\`;`,
  },
])

// Computed
const filteredTools = computed(() => {
  if (!activeCategory.value) return tools.value
  return tools.value.filter(t => t.category === activeCategory.value)
})

const stats = computed(() => ({
  total: tools.value.length,
  active: tools.value.filter(t => t.status === 'active').length,
  beta: tools.value.filter(t => t.status === 'beta').length,
  coming: tools.value.filter(t => t.status === 'coming').length,
}))

// Methods
const selectCategory = (id: string | null) => {
  activeCategory.value = activeCategory.value === id ? null : id
}

const openToolDetail = (tool: any) => {
  selectedTool.value = tool
}

const closeToolDetail = () => {
  selectedTool.value = null
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active': return { text: 'Aktiv', class: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' }
    case 'beta': return { text: 'Beta', class: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' }
    case 'coming': return { text: 'Coming Soon', class: 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400' }
    default: return { text: status, class: 'bg-neutral-100 text-neutral-600' }
  }
}

const getCategoryColor = (color: string) => {
  const colors: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    violet: 'from-violet-500 to-violet-600',
    emerald: 'from-emerald-500 to-emerald-600',
    amber: 'from-amber-500 to-amber-600',
    rose: 'from-rose-500 to-rose-600',
    cyan: 'from-cyan-500 to-cyan-600',
  }
  return colors[color] || colors.blue
}
</script>

<template>
  <div :class="{ dark: isDarkMode }" class="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
    
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <a href="#" class="flex items-center gap-3">
            <img src="/IC-Resulting_Wiesbaden_logo.png" alt="IC-RESULTING Logo" class="w-10 h-10 rounded-xl object-contain" />
            <div>
              <span class="text-lg font-bold text-neutral-900 dark:text-white">IC-RESULTING</span>
              <span class="hidden sm:inline text-sm text-neutral-500 dark:text-neutral-400 ml-2">Software Suite</span>
            </div>
          </a>

          <div class="flex items-center gap-4">
            <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
              <NuxtLink to="/webstree" class="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Webstree</NuxtLink>
              <NuxtLink to="/qr-menu" class="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">QR-Menü</NuxtLink>
              <NuxtLink to="/dudo-b2b" class="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Dudo B2B</NuxtLink>
            </nav>
            <a href="https://ic-resulting.de/kontakt" target="_blank" class="hidden sm:inline-flex btn-primary text-sm py-2 px-4">
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
      <!-- Hero / Dashboard Header -->
      <section class="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center mb-12">
            <span class="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-amber-300 mb-6 border border-amber-400/30">
              🚧 In Entwicklung • Bereits bei ersten Kunden im Einsatz • Open Source
            </span>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400">Webstree</span> – KI für KMU
            </h1>
            <p class="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-2">
              <strong class="text-white">Digital souverän bleiben.</strong> Die Open Source KI-Plattform für kleine und mittlere Unternehmen.
            </p>
            <p class="text-lg text-blue-200 max-w-2xl mx-auto">
              Lokal. Sicher. DSGVO-konform. Entstanden in Zusammenarbeit mit <a href="https://ic-resulting.de" target="_blank" class="underline hover:text-white transition-colors">IC-RESULTING</a> & Partner.
            </p>
            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://webstree.com" target="_blank" class="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-violet-400 hover:to-purple-500 transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40">
                <img src="/logo.svg" alt="Webstree" class="w-7 h-7 object-contain" />
                Webstree entdecken
              </a>
              <a href="https://ic-resulting.de/kontakt" target="_blank" class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                Kontakt aufnehmen
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>

          <!-- Stats Cards - Webstree für KMU -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
              <div class="text-3xl font-bold text-white mb-1">48+</div>
              <div class="text-sm text-blue-200">Features & Module</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-amber-400/30 hover:bg-white/15 transition-colors">
              <div class="text-3xl font-bold text-amber-400 mb-1">🚧</div>
              <div class="text-sm text-blue-200">In Entwicklung</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
              <div class="text-3xl font-bold text-emerald-400 mb-1">0€</div>
              <div class="text-sm text-blue-200">Open Source</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
              <div class="text-3xl font-bold text-violet-400 mb-1">KMU</div>
              <div class="text-sm text-blue-200">Zielgruppe</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Webstree KI-Plattform Section -->
      <section class="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/20 dark:from-neutral-900 dark:via-violet-950/20 dark:to-purple-950/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-700 dark:text-amber-400 rounded-full text-sm font-semibold mb-4">
              🚧 In Entwicklung • Für KMU konzipiert • Bereits im Einsatz
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              Webstree – <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">Digital souverän</span>
            </h2>
            <p class="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Die KI-Plattform für <strong class="text-neutral-900 dark:text-white">kleine und mittlere Unternehmen</strong>. 
              Behalten Sie die Kontrolle über Ihre Daten – lokal, sicher, unabhängig von Cloud-Anbietern.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Text Content -->
            <div>
              <h3 class="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Warum Webstree für KMU?
              </h3>
              <p class="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                <strong class="text-neutral-900 dark:text-white">Webstree</strong> ist die Open Source KI-Plattform, 
                die speziell für die Bedürfnisse von KMU entwickelt wird. Keine teuren Cloud-Abos, keine Datenabhängigkeit – 
                Sie behalten die volle Kontrolle. <em class="text-amber-600 dark:text-amber-400">Derzeit in Entwicklung.</em>
              </p>
              
              <div class="space-y-5 mb-10">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-neutral-900 dark:text-white text-lg">Flexible Bereitstellung</h4>
                    <p class="text-neutral-600 dark:text-neutral-400">Betrieb auf lokalem Desktop, eigenem Server oder gemieteter Infrastruktur – Sie entscheiden, wo Ihre KI läuft.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-neutral-900 dark:text-white text-lg">Team-Collaboration</h4>
                    <p class="text-neutral-600 dark:text-neutral-400">Arbeiten Sie in Echtzeit mit Kollegen zusammen – gemeinsame Dokumente, Chat und KI-gestützte Workflows.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-neutral-900 dark:text-white text-lg">Absolute Datensouveränität</h4>
                    <p class="text-neutral-600 dark:text-neutral-400">Ihre Daten verlassen niemals Ihre Infrastruktur. DSGVO-konform by Design, Made in Germany.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-neutral-900 dark:text-white text-lg">Keine laufenden KI-Kosten</h4>
                    <p class="text-neutral-600 dark:text-neutral-400">Unbegrenzte Nutzung ohne Token-Limits oder API-Gebühren – mit Open-Source-KI-Modellen.</p>
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap gap-4">
                <a href="https://webstree.com" target="_blank" class="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  Webstree.com besuchen
                </a>
                <a href="https://ic-resulting.de/kontakt" target="_blank" class="inline-flex items-center gap-2 border-2 border-violet-300 dark:border-violet-700 text-violet-700 dark:text-violet-400 px-8 py-4 rounded-xl font-semibold hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all">
                  Beratung anfragen
                </a>
              </div>
            </div>

            <!-- Visual Card with Mascot -->
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <div class="relative bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-8 shadow-2xl">
                <!-- Mascot Header -->
                <div class="flex flex-col items-center text-center mb-8">
                  <div class="relative mb-4">
                    <div class="absolute inset-0 bg-violet-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    <img src="/WebiMaskot.png" alt="WEBI – KI-Maskottchen" class="relative w-28 h-28 object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 class="text-2xl font-bold text-neutral-900 dark:text-white mb-1">WEBI</h3>
                  <p class="text-violet-600 dark:text-violet-400 font-medium">AI Autonomous Business Platform</p>
                  <!-- Webstree Logo -->
                  <a href="https://webstree.com" target="_blank" class="mt-3 flex items-center gap-2 px-4 py-2 bg-slate-800 dark:bg-transparent rounded-lg hover:bg-slate-700 dark:hover:bg-neutral-700/50 transition-colors">
                    <img src="/logo.svg" alt="Webstree" class="h-6 object-contain" />
                  </a>
                </div>

                <!-- Feature Grid -->
                <div class="grid grid-cols-2 gap-3 mb-6">
                  <div class="p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl text-center">
                    <div class="w-10 h-10 mx-auto mb-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Office Suite</span>
                  </div>
                  <div class="p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl text-center">
                    <div class="w-10 h-10 mx-auto mb-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    </div>
                    <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">KI-Chat</span>
                  </div>
                  <div class="p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl text-center">
                    <div class="w-10 h-10 mx-auto mb-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Teamwork</span>
                  </div>
                  <div class="p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl text-center">
                    <div class="w-10 h-10 mx-auto mb-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    </div>
                    <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Open Source</span>
                  </div>
                </div>

                <!-- Deployment Options -->
                <div class="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl p-4 mb-6 border border-violet-100 dark:border-violet-800">
                  <p class="text-sm font-semibold text-neutral-900 dark:text-white mb-2">Deployment-Optionen:</p>
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-white dark:bg-neutral-800 rounded-full text-xs font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600">Desktop (Win/Mac/Linux)</span>
                    <span class="px-3 py-1 bg-white dark:bg-neutral-800 rounded-full text-xs font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600">Eigener Server</span>
                    <span class="px-3 py-1 bg-white dark:bg-neutral-800 rounded-full text-xs font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600">Private Cloud</span>
                  </div>
                </div>

                <!-- CTA -->
                <a href="https://ic-resulting.de/kontakt" target="_blank" class="block w-full text-center bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
                  Early Access anfragen →
                </a>
                
                <p class="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-4">
                  In Entwicklung – Kontaktieren Sie uns für Informationen
                </p>
              </div>
            </div>
          </div>

          <!-- Vision Section with IDEA_WEBSTREE -->
          <div class="mt-20 pt-16 border-t border-neutral-200 dark:border-neutral-700">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <!-- Image -->
              <div class="relative order-2 lg:order-1">
                <div class="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500 rounded-3xl blur-3xl opacity-15"></div>
                <div class="relative bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 shadow-2xl overflow-hidden">
                  <img 
                    src="/WEBI_WEBSTREE_OpenSource_KI-Plattform.png" 
                    alt="Webstree Open Source KI-Plattform – Übersicht aller 48+ Features für KMU" 
                    class="w-full h-auto rounded-xl"
                  />
                </div>
              </div>

              <!-- Text Content -->
              <div class="order-1 lg:order-2">
                <span class="inline-block px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 text-violet-700 dark:text-violet-400 rounded-full text-sm font-semibold mb-4">
                  Unsere Vision
                </span>
                <h3 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                  Eine Plattform, die mit Ihnen <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">wächst</span>
                </h3>
                <p class="text-lg text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  Webstree ist mehr als eine Software – es ist ein wachsendes Ökosystem intelligenter Werkzeuge, 
                  die Ihre Arbeitsweise revolutionieren. Von der ersten Idee bis zur finalen Umsetzung.
                </p>
                
                <div class="space-y-4 mb-8">
                  <div class="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl">
                    <div class="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <div>
                      <h4 class="font-bold text-neutral-900 dark:text-white">Kontinuierliche Weiterentwicklung</h4>
                      <p class="text-sm text-neutral-600 dark:text-neutral-400">Neue Features und KI-Modelle werden regelmäßig integriert</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl">
                    <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    </div>
                    <div>
                      <h4 class="font-bold text-neutral-900 dark:text-white">Modularer Aufbau</h4>
                      <p class="text-sm text-neutral-600 dark:text-neutral-400">Wählen Sie nur die Module, die Sie wirklich brauchen</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    </div>
                    <div>
                      <h4 class="font-bold text-neutral-900 dark:text-white">Skalierbar für jede Teamgröße</h4>
                      <p class="text-sm text-neutral-600 dark:text-neutral-400">Vom Einzelunternehmer bis zum Enterprise-Team</p>
                    </div>
                  </div>
                </div>

                <div class="flex flex-wrap gap-4">
                  <a href="https://ic-resulting.de/kontakt" target="_blank" class="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl">
                    Jetzt Early Access anfragen
                  </a>
                  <a href="https://ic-resulting.de/kontakt" target="_blank" class="inline-flex items-center gap-2 text-violet-700 dark:text-violet-400 px-6 py-3 rounded-xl font-semibold hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all">
                    Vertriebspartner werden →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Categories -->
      <section class="py-8 bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 sticky top-16 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-wrap gap-3 justify-center">
            <button
              @click="selectCategory(null)"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                !activeCategory ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900' : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
              ]"
            >
              Alle ({{ tools.length }})
            </button>
            <button
              v-for="cat in categories"
              :key="cat.id"
              @click="selectCategory(cat.id)"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2',
                activeCategory === cat.id ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900' : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
              ]"
            >
              {{ cat.name }}
              <span class="text-xs opacity-60">({{ cat.count }})</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Tools Grid -->
      <section id="tools" class="py-16 lg:py-20 bg-white dark:bg-neutral-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Unsere Software-Tools</h2>
            <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Professionelle Lösungen für Projektmanagement, KI-Automatisierung und DevSecOps
            </p>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="tool in filteredTools"
              :key="tool.id"
              @click="openToolDetail(tool)"
              class="group bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-700 transition-all cursor-pointer"
            >
              <div class="flex items-start justify-between mb-4">
                <div :class="['w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white', getCategoryColor(categories.find(c => c.id === tool.category)?.color || 'blue')]">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span :class="['px-3 py-1 rounded-full text-xs font-medium', getStatusBadge(tool.status).class]">
                  {{ getStatusBadge(tool.status).text }}
                </span>
              </div>

              <h3 class="text-xl font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {{ tool.name }}
              </h3>
              <p class="text-sm text-primary-600 dark:text-primary-400 mb-3">{{ tool.tagline }}</p>
              <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2">{{ tool.description }}</p>

              <div class="flex flex-wrap gap-2">
                <span v-for="feature in tool.features.slice(0, 3)" :key="feature" class="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-xs text-neutral-600 dark:text-neutral-400">
                  {{ feature }}
                </span>
                <span v-if="tool.features.length > 3" class="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-xs text-neutral-500">
                  +{{ tool.features.length - 3 }}
                </span>
              </div>

              <div class="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-700 flex items-center justify-between">
                <span class="text-xs text-neutral-500 dark:text-neutral-500">
                  {{ categories.find(c => c.id === tool.category)?.name }}
                </span>
                <span class="text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Details
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-br from-violet-600 via-purple-700 to-violet-800 relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span class="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-amber-200 mb-6 border border-amber-400/30">
            🚧 In Entwicklung • Early Access verfügbar
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Werden Sie Teil der Webstree-Community</h2>
          <p class="text-violet-100 text-lg mb-8 max-w-2xl mx-auto">
            Die KI-Plattform für KMU entsteht gerade. Erste Kunden setzen Webstree bereits ein – 
            sichern Sie sich jetzt frühen Zugang und gestalten Sie die Entwicklung mit.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="https://ic-resulting.de/kontakt" target="_blank" class="inline-flex items-center gap-3 bg-white text-violet-700 px-8 py-4 rounded-xl font-semibold hover:bg-violet-50 transition-colors shadow-lg">
              <img src="/logo.svg" alt="Webstree" class="w-6 h-6 object-contain" />
              Early Access anfragen
            </a>
            <a href="https://ic-resulting.de/kontakt" target="_blank" class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
              Beratung für KMU
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
          <p class="text-violet-200/80 text-sm mt-6">
            Entstanden in Zusammenarbeit mit IC-RESULTING & Partner • Entwickelt in Deutschland
          </p>
        </div>
      </section>
    </main>

    <!-- Tool Detail Modal -->
    <Teleport to="body">
      <div v-if="selectedTool" class="fixed inset-0 z-50 overflow-y-auto" @click.self="closeToolDetail">
        <div class="min-h-screen px-4 py-8 flex items-start justify-center">
          <div class="fixed inset-0 bg-black/60 backdrop-blur-sm" @click="closeToolDetail"></div>
          
          <div class="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <!-- Modal Header -->
            <div class="sticky top-0 bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 p-6 flex items-start justify-between z-10">
              <div class="flex items-center gap-4">
                <div :class="['w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center text-white', getCategoryColor(categories.find(c => c.id === selectedTool.category)?.color || 'blue')]">
                  <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-neutral-900 dark:text-white">{{ selectedTool.name }}</h2>
                  <p class="text-primary-600 dark:text-primary-400">{{ selectedTool.tagline }}</p>
                </div>
              </div>
              <button @click="closeToolDetail" class="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors">
                <svg class="w-6 h-6 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <!-- Modal Content -->
            <div class="p-6 space-y-8">
              <!-- Description -->
              <div>
                <p class="text-lg text-neutral-700 dark:text-neutral-300">{{ selectedTool.description }}</p>
                <span :class="['inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium', getStatusBadge(selectedTool.status).class]">
                  {{ getStatusBadge(selectedTool.status).text }}
                </span>
              </div>

              <!-- Features -->
              <div>
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Features</h3>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div v-for="feature in selectedTool.features" :key="feature" class="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-lg">
                    <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                    <span class="text-neutral-700 dark:text-neutral-300">{{ feature }}</span>
                  </div>
                </div>
              </div>

              <!-- Screenshots Preview -->
              <div v-if="selectedTool.screenshots?.length">
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Vorschau</h3>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div v-for="(shot, index) in selectedTool.screenshots" :key="index" class="bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-700 dark:to-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-600">
                    <div class="aspect-video bg-neutral-200 dark:bg-neutral-600 rounded-lg mb-3 flex items-center justify-center">
                      <svg class="w-12 h-12 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <h4 class="font-medium text-neutral-900 dark:text-white">{{ shot.title }}</h4>
                    <p class="text-sm text-neutral-500 dark:text-neutral-400">{{ shot.desc }}</p>
                  </div>
                </div>
              </div>

              <!-- Code Example -->
              <div v-if="selectedTool.demoCode">
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Code-Beispiel</h3>
                <div class="bg-neutral-900 rounded-xl overflow-hidden">
                  <div class="flex items-center gap-2 px-4 py-3 bg-neutral-800 border-b border-neutral-700">
                    <div class="w-3 h-3 rounded-full bg-red-400"></div>
                    <div class="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div class="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span class="ml-2 text-xs text-neutral-500">example.ts</span>
                  </div>
                  <pre class="p-4 text-sm text-neutral-300 overflow-x-auto"><code>{{ selectedTool.demoCode }}</code></pre>
                </div>
              </div>

              <!-- CTA -->
              <div class="flex flex-col sm:flex-row gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <a href="https://ic-resulting.de/kontakt" target="_blank" class="flex-1 btn-primary text-center py-3">
                  Demo anfragen
                </a>
                <button @click="closeToolDetail" class="flex-1 btn-secondary py-3">
                  Schließen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

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
            <a href="https://webstree.com" target="_blank" class="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-violet-900/50 to-purple-900/50 border border-violet-700/50 rounded-lg w-fit hover:from-violet-800/50 hover:to-purple-800/50 transition-colors">
              <img src="/logo.svg" alt="Webstree" class="w-5 h-5 object-contain" />
              <span class="text-sm text-violet-300">Webstree – Entwickelt in Deutschland</span>
            </a>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Standort Deutschland</h4>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2">
                <span class="text-violet-400">📍</span>
                Wiesbaden, Hessen
              </li>
              <li>info@ic-resulting.de</li>
              <li>+49 176 618 659 80</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Produkte</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/webstree" class="hover:text-violet-400 transition-colors font-medium text-white">Webstree – KI-Plattform</NuxtLink></li>
              <li><NuxtLink to="/qr-menu" class="hover:text-white transition-colors">UPQR – QR-Menü</NuxtLink></li>
              <li><NuxtLink to="/dudo-b2b" class="hover:text-white transition-colors">Dudo B2B</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4">Links</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="https://webstree.com" target="_blank" class="hover:text-violet-400 transition-colors flex items-center gap-2 font-medium text-white">
                Webstree.com →
              </a></li>
              <li><a href="https://ic-resulting.de" target="_blank" class="hover:text-white transition-colors">ic-resulting.de</a></li>
              <li><NuxtLink to="/impressum" class="hover:text-white transition-colors">Impressum</NuxtLink></li>
              <li><NuxtLink to="/datenschutz" class="hover:text-white transition-colors">Datenschutz</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <span>© {{ new Date().getFullYear() }} Entstanden in Zusammenarbeit mit IC-RESULTING & Partner.</span>
          <div class="flex items-center gap-4">
            <span class="px-3 py-1.5 bg-slate-800 rounded-full text-xs flex items-center gap-2">
              <span class="text-base">🇩🇪</span>
              Entwickelt in Deutschland
            </span>
            <a href="https://webstree.com" target="_blank" class="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors">
              <img src="/logo.svg" alt="Webstree" class="w-4 h-4 object-contain" />
              Webstree.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.btn-primary {
  @apply inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors;
}

.btn-secondary {
  @apply inline-flex items-center justify-center px-6 py-3 bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white font-semibold rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
