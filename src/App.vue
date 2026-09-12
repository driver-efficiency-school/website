<script setup lang="ts">
  import { defineAsyncComponent, ref, onMounted } from 'vue'
  import { config } from '@/lib/config'

  // Critical above-the-fold components - load immediately
  import Navbar from './components/Navbar.vue'
  import Hero from './components/Hero.vue'
  import Footer from './components/Footer.vue'

  // Below-the-fold components - lazy load
  const DriveStory = defineAsyncComponent(() => import('./components/DriveStory.vue'))
  const EverydayValue = defineAsyncComponent(() => import('./components/EverydayValue.vue'))
  const Compatibility = defineAsyncComponent(() => import('./components/Compatibility.vue'))
  const FleetPage = defineAsyncComponent(() => import('./components/FleetPage.vue'))
  const WhatsNew = defineAsyncComponent(() => import('./components/WhatsNew.vue'))
  const Features = defineAsyncComponent(() => import('./components/Features.vue'))
  const HowItWorks = defineAsyncComponent(() => import('./components/HowItWorks.vue'))
  const Comparison = defineAsyncComponent(() => import('./components/Comparison.vue'))
  // Testimonials.vue DELETED 2026-07-29 (was unrendered since
  // WEBSITE_AUDIT_V12 I8). The template-default placeholder reviews and
  // shadcn-stock avatars were an FTC compliance risk, and one fabricated
  // "Fleet Manager" review claiming a 10% emissions cut sat next to a real
  // fleet product. If real App Store / Play review excerpts are ever
  // shown, build it fresh from attributed quotes.
  //
  // Team.vue also removed from render per user 2026-05-25 — social
  // handles haven't been migrated to the `efficiver-*` namespace yet
  // (see WEBSITE_AUDIT_V12 I10). Re-introduce once handles are live.
  const Pricing = defineAsyncComponent(() => import('./components/Pricing.vue'))
  const FleetCallout = defineAsyncComponent(() => import('./components/FleetCallout.vue'))
  // Community.vue removed from render 2026-06-23 — its only CTA was a disabled
  // "Follow Us on Social Media" button under a Discord icon, but no social /
  // community presence is configured (config.socials are empty). Re-introduce
  // with a working link once a real community (e.g. Discord) exists.
  const NewsletterSignup = defineAsyncComponent(() => import('./components/NewsletterSignup.vue'))
  const FAQ = defineAsyncComponent(() => import('./components/FAQ.vue'))
  const Contact = defineAsyncComponent(() => import('./components/Contact.vue'))
  const BackToTop = defineAsyncComponent(() => import('./components/BackToTop.vue'))

  // Conditional pages - only load when needed
  //
  // Investors.vue removed from render (D2, review findings 10/11): the page
  // presented a $5B market, 1,000+ users and 100,000 active users "by year-end"
  // with no date, metric definition, source or method — and no year named. It
  // also still described an iPhone-only product. The figures need dated
  // definitions only the owner holds, and an unsourced Series-A page is the
  // highest-liability surface on the site. File kept, like Testimonials/Team/
  // Community/Sponsors; re-introduce with dated, defined, labelled figures.
  const TermsOfUse = defineAsyncComponent(() => import('./components/TermsOfUse.vue'))
  const PrivacyPolicy = defineAsyncComponent(() => import('./components/PrivacyPolicy.vue'))
  const Accessibility = defineAsyncComponent(() => import('./components/Accessibility.vue'))
  const Help = defineAsyncComponent(() => import('./components/Help.vue'))
  const ComingSoon = defineAsyncComponent(() => import('./components/ComingSoon.vue'))
  const Releases = defineAsyncComponent(() => import('./components/Releases.vue'))

  const showFleet = ref(false)
  const showTerms = ref(false)
  const showPrivacy = ref(false)
  const showAccessibility = ref(false)
  const showHelp = ref(false)
  const showComingSoon = ref(false)
  const showReleases = ref(false)

  function navigate(
    target:
      | 'main'
      | 'terms'
      | 'privacy'
      | 'accessibility'
      | 'help'
      | 'coming-soon'
      | 'releases'
      | 'fleet-guide'
  ) {
    showFleet.value = target === 'fleet-guide'
    showTerms.value = target === 'terms'
    showPrivacy.value = target === 'privacy'
    showAccessibility.value = target === 'accessibility'
    showHelp.value = target === 'help'
    showComingSoon.value = target === 'coming-soon'
    showReleases.value = target === 'releases'
    window.location.hash = target === 'main' ? '' : target
    if (
      showFleet.value ||
      showTerms.value ||
      showPrivacy.value ||
      showAccessibility.value ||
      showHelp.value ||
      showComingSoon.value ||
      showReleases.value
    ) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Handle initial and dynamic hash changes
  function handleHashChange() {
    const hash = window.location.hash.replace('#', '')
    showFleet.value = hash === 'fleet-guide' || hash === 'fleet'
    showTerms.value = hash === 'terms'
    showPrivacy.value = hash === 'privacy'
    showAccessibility.value = hash === 'accessibility'
    showHelp.value = hash === 'help'
    showComingSoon.value = hash === 'coming-soon'
    showReleases.value = hash === 'releases'
    if (
      showFleet.value ||
      showTerms.value ||
      showPrivacy.value ||
      showAccessibility.value ||
      showHelp.value ||
      showComingSoon.value ||
      showReleases.value
    ) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  onMounted(() => {
    handleHashChange() // Check initial hash on page load
    window.addEventListener('hashchange', handleHashChange)
  })
</script>

<template>
  <Navbar @navigate="navigate" />
  <main
    v-if="
      !showFleet &&
      !showTerms &&
      !showPrivacy &&
      !showAccessibility &&
      !showHelp &&
      !showComingSoon &&
      !showReleases
    "
  >
    <Hero />
    <DriveStory />
    <EverydayValue />
    <HowItWorks />
    <Features />
    <Compatibility />
    <Comparison />
    <Pricing />
    <section class="container py-12">
      <div
        class="rounded-2xl border bg-muted/30 p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
      >
        <div>
          <p class="text-primary text-sm font-semibold">Driving for work?</p>
          <h2 class="text-2xl font-bold mt-2">The same app. A shared view for your fleet.</h2>
          <p class="text-muted-foreground mt-3">
            Explore team coaching, on-duty sharing and manager reports.
          </p>
        </div>
        <a
          href="#fleet-guide"
          class="shrink-0 rounded-lg bg-primary text-primary-foreground px-5 py-3 font-semibold"
          >Explore Efficiver Fleet →</a
        >
      </div>
    </section>
    <details class="container">
      <summary class="cursor-pointer text-sm text-muted-foreground">
        Fleet enquiries and joining information
      </summary>
      <FleetCallout />
    </details>
    <section v-if="config.features.newsletter" id="newsletter" class="container py-24 sm:py-32">
      <div class="mx-auto max-w-2xl text-center">
        <NewsletterSignup />
      </div>
    </section>
    <Contact v-if="config.features.contact" />
    <FAQ />
    <WhatsNew @navigate="navigate" />
  </main>
  <FleetPage v-if="showFleet" />
  <TermsOfUse v-else-if="showTerms" />
  <PrivacyPolicy v-else-if="showPrivacy" />
  <Accessibility v-else-if="showAccessibility" @navigate="navigate" />
  <Help v-else-if="showHelp" />
  <ComingSoon v-else-if="showComingSoon" />
  <Releases v-else-if="showReleases" @navigate="navigate" />
  <Footer @navigate="navigate" />
  <BackToTop />
</template>
