<script setup lang="ts">
  import Navbar from './components/Navbar.vue'
  import Hero from './components/Hero.vue'
  import Features from './components/Features.vue'
  import HowItWorks from './components/HowItWorks.vue'
  import Testimonials from './components/Testimonials.vue'
  import Team from './components/Team.vue'
  import Pricing from './components/Pricing.vue'
  import Community from './components/Community.vue'
  import NewsletterSignup from './components/NewsletterSignup.vue'
  import FAQ from './components/FAQ.vue'
  import Contact from './components/Contact.vue'
  import Footer from './components/Footer.vue'
  import Investors from './components/Investors.vue'
  import TermsOfUse from './components/TermsOfUse.vue'
  import PrivacyPolicy from './components/PrivacyPolicy.vue'
  import ComingSoon from './components/ComingSoon.vue'
  import { ref, onMounted } from 'vue'

  const showInvestors = ref(false)
  const showTerms = ref(false)
  const showPrivacy = ref(false)
  const showComingSoon = ref(false)

  function navigate(target: 'main' | 'investors' | 'terms' | 'privacy' | 'coming-soon') {
    showInvestors.value = target === 'investors'
    showTerms.value = target === 'terms'
    showPrivacy.value = target === 'privacy'
    showComingSoon.value = target === 'coming-soon'
    window.location.hash = target === 'main' ? '' : target
    if (showInvestors.value || showTerms.value || showPrivacy.value || showComingSoon.value) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Handle initial and dynamic hash changes
  function handleHashChange() {
    const hash = window.location.hash.replace('#', '')
    showInvestors.value = hash === 'investors'
    showTerms.value = hash === 'terms'
    showPrivacy.value = hash === 'privacy'
    showComingSoon.value = hash === 'coming-soon'
    if (showInvestors.value || showTerms.value || showPrivacy.value || showComingSoon.value) {
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
  <div v-if="!showInvestors && !showTerms && !showPrivacy && !showComingSoon">
    <Hero />
    <Features />
    <HowItWorks />
    <Testimonials />
    <Team />
    <Community />
    <Pricing />
    <section class="container py-24 sm:py-32">
      <div class="mx-auto max-w-2xl text-center">
        <NewsletterSignup />
      </div>
    </section>
    <Contact />
    <FAQ />
  </div>
  <Investors v-if="showInvestors" />
  <TermsOfUse v-else-if="showTerms" />
  <PrivacyPolicy v-else-if="showPrivacy" />
  <ComingSoon v-else-if="showComingSoon" />
  <Footer @navigate="navigate" />
</template>
