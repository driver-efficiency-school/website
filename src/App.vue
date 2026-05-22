<script setup lang="ts">
  import { defineAsyncComponent, ref, onMounted } from 'vue'
  import { config } from '@/lib/config'

  // Critical above-the-fold components - load immediately
  import Navbar from './components/Navbar.vue'
  import Hero from './components/Hero.vue'
  import Footer from './components/Footer.vue'

  // Below-the-fold components - lazy load
  const WhatsNew = defineAsyncComponent(() => import('./components/WhatsNew.vue'))
  const Features = defineAsyncComponent(() => import('./components/Features.vue'))
  const HowItWorks = defineAsyncComponent(() => import('./components/HowItWorks.vue'))
  const Comparison = defineAsyncComponent(() => import('./components/Comparison.vue'))
  const Testimonials = defineAsyncComponent(() => import('./components/Testimonials.vue'))
  const Team = defineAsyncComponent(() => import('./components/Team.vue'))
  const Pricing = defineAsyncComponent(() => import('./components/Pricing.vue'))
  const Community = defineAsyncComponent(() => import('./components/Community.vue'))
  const NewsletterSignup = defineAsyncComponent(() => import('./components/NewsletterSignup.vue'))
  const FAQ = defineAsyncComponent(() => import('./components/FAQ.vue'))
  const Contact = defineAsyncComponent(() => import('./components/Contact.vue'))
  const BackToTop = defineAsyncComponent(() => import('./components/BackToTop.vue'))
  const ExitIntentPopup = defineAsyncComponent(() => import('./components/ExitIntentPopup.vue'))

  // Conditional pages - only load when needed
  const Investors = defineAsyncComponent(() => import('./components/Investors.vue'))
  const TermsOfUse = defineAsyncComponent(() => import('./components/TermsOfUse.vue'))
  const PrivacyPolicy = defineAsyncComponent(() => import('./components/PrivacyPolicy.vue'))
  const Help = defineAsyncComponent(() => import('./components/Help.vue'))
  const ComingSoon = defineAsyncComponent(() => import('./components/ComingSoon.vue'))
  const Releases = defineAsyncComponent(() => import('./components/Releases.vue'))

  const showInvestors = ref(false)
  const showTerms = ref(false)
  const showPrivacy = ref(false)
  const showHelp = ref(false)
  const showComingSoon = ref(false)
  const showReleases = ref(false)

  function navigate(
    target: 'main' | 'investors' | 'terms' | 'privacy' | 'help' | 'coming-soon' | 'releases'
  ) {
    showInvestors.value = target === 'investors'
    showTerms.value = target === 'terms'
    showPrivacy.value = target === 'privacy'
    showHelp.value = target === 'help'
    showComingSoon.value = target === 'coming-soon'
    showReleases.value = target === 'releases'
    window.location.hash = target === 'main' ? '' : target
    if (
      showInvestors.value ||
      showTerms.value ||
      showPrivacy.value ||
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
    showInvestors.value = hash === 'investors'
    showTerms.value = hash === 'terms'
    showPrivacy.value = hash === 'privacy'
    showHelp.value = hash === 'help'
    showComingSoon.value = hash === 'coming-soon'
    showReleases.value = hash === 'releases'
    if (
      showInvestors.value ||
      showTerms.value ||
      showPrivacy.value ||
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
  <div
    v-if="
      !showInvestors && !showTerms && !showPrivacy && !showHelp && !showComingSoon && !showReleases
    "
  >
    <Hero />
    <WhatsNew @navigate="navigate" />
    <Features />
    <Comparison />
    <HowItWorks />
    <Testimonials />
    <Team />
    <Community />
    <Pricing />
    <section v-if="config.features.newsletter" id="newsletter" class="container py-24 sm:py-32">
      <div class="mx-auto max-w-2xl text-center">
        <NewsletterSignup />
      </div>
    </section>
    <Contact v-if="config.features.contact" />
    <FAQ />
  </div>
  <Investors v-if="showInvestors" />
  <TermsOfUse v-else-if="showTerms" />
  <PrivacyPolicy v-else-if="showPrivacy" />
  <Help v-else-if="showHelp" />
  <ComingSoon v-else-if="showComingSoon" />
  <Releases v-else-if="showReleases" @navigate="navigate" />
  <Footer @navigate="navigate" />
  <BackToTop />
  <ExitIntentPopup />
</template>
