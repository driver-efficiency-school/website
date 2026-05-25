<script setup lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
  import { Badge } from '@/components/ui/badge'
  import { Button } from '@/components/ui/button'
  import { ArrowRight, Map, Cloud, Accessibility } from 'lucide-vue-next'
  import { config } from '@/lib/config'

  const emit = defineEmits(['navigate'])

  interface Flagship {
    icon: typeof Map
    color: string
    title: string
    body: string
  }

  const flagships: Flagship[] = [
    {
      icon: Map,
      color: 'text-blue-600 dark:text-blue-400',
      title: 'Live drive map',
      body: 'A full-screen Apple Maps view that follows you smoothly as you drive. Pinch to zoom, two-finger drag to rotate. Acceleration and braking events appear as colored markers (green / orange / red) along your route — on the live map and again on the past-trip Route card. When iPhone is in Low Power Mode, the map politely pauses to save battery.'
    },
    {
      icon: Cloud,
      color: 'text-orange-600 dark:text-orange-400',
      title: 'iCloud sync',
      body: 'Your driving sessions and the Smart Detection model now sync across your iPhones and iPad via your own private iCloud database. Sign in to iCloud on each device and Efficiver picks up where you left off. Optional and off by default.'
    },
    {
      icon: Accessibility,
      color: 'text-green-600 dark:text-green-400',
      title: 'Built accessibility-first',
      body: 'Full VoiceOver support, Dynamic Type from default through AX5, Reduce Motion respected across every animation, Reduce Transparency, Differentiate Without Color, Bold Text, and lifecycle announcements for drive start / stop / saved. Few driving apps are built this way.'
    }
  ]
</script>

<template>
  <section id="whats-new" class="container py-24 sm:py-32">
    <div class="text-center mb-12">
      <Badge variant="default" class="mb-4 text-sm py-1.5 px-4">NEW — v1.2</Badge>

      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">What's New in Efficiver 1.2</h2>

      <h3 class="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-6">
        A live drive map, iCloud sync, and a deep accessibility pass — now on the App Store.
      </h3>

      <div class="flex flex-col md:flex-row justify-center items-center gap-3">
        <Button as-child class="w-5/6 md:w-auto font-bold group/arrow">
          <a :href="config.app.ios" target="_blank" rel="noopener">
            Download v1.2 on the App Store
            <ArrowRight class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
          </a>
        </Button>
        <Button
          variant="secondary"
          class="w-5/6 md:w-auto font-bold"
          @click="emit('navigate', 'releases')"
        >
          Read full release notes
        </Button>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <Card
        v-for="{ icon, color, title, body } in flagships"
        :key="title"
        class="h-full bg-background border-2 border-primary/10 shadow-sm hover:shadow-md transition-shadow"
      >
        <CardHeader class="flex justify-center items-center pb-4">
          <div class="bg-primary/10 p-3 rounded-full ring-8 ring-primary/5 mb-3">
            <component :is="icon" :class="['size-7', color]" />
          </div>
          <CardTitle class="text-xl text-center">{{ title }}</CardTitle>
        </CardHeader>
        <CardContent class="text-muted-foreground text-center text-base leading-relaxed">
          {{ body }}
        </CardContent>
      </Card>
    </div>

    <details class="mx-auto max-w-2xl rounded-lg border bg-card p-5 group">
      <summary
        class="cursor-pointer font-semibold text-base list-none flex justify-between items-center"
      >
        <span>More improvements in v1.2</span>
        <ArrowRight class="size-4 transition-transform group-open:rotate-90" />
      </summary>
      <ul class="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
        <li>"Eco Route" is now "Efficient Route" everywhere in the app.</li>
        <li>Per-waypoint event markers appear on the past-trip Route card in Session Detail.</li>
        <li>Drive gauge inner circle is now visible in light mode (was effectively invisible).</li>
        <li>Page-bullet and Stop button tap targets grown to Apple's 44pt minimum touch target.</li>
        <li>Calibration phase-change confirmations spell out the transition before saving.</li>
        <li>Wallet Watch Save button moved to the toolbar.</li>
      </ul>
    </details>
  </section>
</template>

<style scoped>
  /* Suppress Safari/iOS default disclosure triangle so our custom
     ArrowRight indicator is the only affordance. */
  summary::-webkit-details-marker {
    display: none;
  }
</style>
