<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Benefits from "./components/Benefits.vue";
import Features from "./components/Features.vue";
import Services from "./components/Services.vue";
import HowItWorks from "./components/HowItWorks.vue";
import Sponsors from "./components/Sponsors.vue";
import Testimonials from "./components/Testimonials.vue";
import Team from "./components/Team.vue";
import Pricing from "./components/Pricing.vue";
import Community from "./components/Community.vue";
import Contact from "./components/Contact.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";
import TermsOfUse from "./components/TermsOfUse.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";
import { ref, onMounted } from 'vue';

const showTerms = ref(false);
const showPrivacy = ref(false);

function navigate(target: 'main' | 'terms' | 'privacy') {
  showTerms.value = target === 'terms';
  showPrivacy.value = target === 'privacy';
  window.location.hash = target === 'main' ? '' : target;
  if (showTerms.value || showPrivacy.value) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Handle initial and dynamic hash changes
function handleHashChange() {
  const hash = window.location.hash.replace('#', '');
  showTerms.value = hash === 'terms';
  showPrivacy.value = hash === 'privacy';
  if (showTerms.value || showPrivacy.value) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

onMounted(() => {
  handleHashChange(); // Check initial hash on page load
  window.addEventListener('hashchange', handleHashChange);
});
</script>

<template>
  <Navbar @navigate="navigate" />
  <div v-if="!showTerms && !showPrivacy">
    <Hero />
    <Sponsors />
    <Benefits />
    <Features />
    <Services />
    <HowItWorks />
    <Testimonials />
    <Team />
    <Community />
    <Pricing />
    <Contact />
    <FAQ />
  </div>
  <TermsOfUse v-else-if="showTerms" />
  <PrivacyPolicy v-else-if="showPrivacy" />
  <Footer @navigate="navigate" />
</template>