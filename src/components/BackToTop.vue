<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { Button } from '@/components/ui/button'
  import { ArrowUp } from 'lucide-vue-next'

  const isVisible = ref(false)

  function handleScroll() {
    isVisible.value = window.scrollY > 400
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <Transition name="fade">
    <Button
      v-if="isVisible"
      variant="outline"
      size="icon"
      class="fixed bottom-8 right-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <ArrowUp class="h-5 w-5" />
    </Button>
  </Transition>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
