<script setup lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
  import { Badge } from '@/components/ui/badge'
  import { Button } from '@/components/ui/button'
  import { ArrowRight, BrainCircuit, Leaf, Banknote } from 'lucide-vue-next'
  import { config } from '@/lib/config'

  const emit = defineEmits(['navigate'])

  interface Flagship {
    icon: typeof BrainCircuit
    color: string
    title: string
    body: string
  }

  const flagships: Flagship[] = [
    {
      icon: BrainCircuit,
      color: 'text-green-600 dark:text-green-400',
      title: 'Smart Detection',
      body: 'Efficiver now learns your car. No more rev-range setup — a one-minute calibration on first launch and acceleration and braking are picked up automatically. Runs entirely on your iPhone; nothing leaves your device.'
    },
    {
      icon: Leaf,
      color: 'text-blue-600 dark:text-blue-400',
      title: 'Eco Route',
      body: 'Plan an eco-friendly route inside Efficiver and open it in Apple or Google Maps for turn-by-turn directions. Efficiver quietly logs the drive for you and saves it when you arrive — no need to keep the app open.'
    },
    {
      icon: Banknote,
      color: 'text-orange-600 dark:text-orange-400',
      title: 'Wallet Watch',
      body: 'See how much money and CO₂ you saved on every drive, in your local currency (₹, $, £, and more). Set your fuel price and baseline consumption in Settings.'
    }
  ]
</script>

<template>
  <section id="whats-new" class="container py-24 sm:py-32">
    <div class="text-center mb-12">
      <Badge variant="default" class="mb-4 text-sm py-1.5 px-4">NEW — v1.1</Badge>

      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">What's New in Efficiver 1.1</h2>

      <h3 class="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-6">
        Three new flagship features — and a lot of polish. Now available on the App Store.
      </h3>

      <div class="flex flex-col md:flex-row justify-center items-center gap-3">
        <Button as-child class="w-5/6 md:w-auto font-bold group/arrow">
          <a :href="config.app.ios" target="_blank" rel="noopener">
            Download v1.1 on the App Store
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
        <span>More improvements in v1.1</span>
        <ArrowRight class="size-4 transition-transform group-open:rotate-90" />
      </summary>
      <ul class="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
        <li>Rename a session straight from the in-drive top bar.</li>
        <li>Add notes to any session, up to 255 characters.</li>
        <li>
          Weather widget shows live vs cached data, counts down to the next refresh, and flags
          failed refresh attempts.
        </li>
        <li>Faster launch animation; smoother scrolling.</li>
        <li>Clearer banner when a drive auto-continues.</li>
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
