<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useColorMode } from '@vueuse/core'
  const mode = useColorMode()
  const selected = ref(0)
  const steps = [
    {
      title: 'Understand your score',
      body: 'See acceleration, braking and idle information together. The score gives you a starting point; the individual events help explain it.',
      image: '002',
      light: '102',
      alt: 'Efficiver live score screen with acceleration, braking and idle indicators',
      detail:
        'A driving-efficiency score is not a safety rating. Review the screen while parked. GPS quality affects the result; follow the app’s signal warnings.'
    },
    {
      title: 'Put events in context',
      body: 'Look back at where events happened along your recorded route. Use that context to understand a trip, rather than judging yourself by one number.',
      image: '003',
      light: '103',
      alt: 'Efficiver live drive map with recorded route markers',
      detail:
        'Recording and scoring work offline. Maps need a connection. Logging continues when you switch to Maps or Music; keep your attention on the road.'
    },
    {
      title: 'Compare before you leave',
      body: 'Look at route alternatives by travel time and distance, then continue in your navigation app. Choose what suits the journey.',
      image: '006',
      light: '106',
      alt: 'Efficiver Efficient Route screen comparing travel time, distance and estimated costs',
      detail:
        'Route ranking and cost differences are estimates, not measured savings. Route planning needs internet; the ranking does not measure actual fuel consumption.'
    }
  ]
  const step = computed(() => steps[selected.value])
</script>
<template>
  <section id="first-drive" class="container py-16 sm:py-20">
    <div class="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      <div>
        <p class="text-primary text-sm uppercase tracking-widest font-semibold">
          From information to action
        </p>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
          Know what to work on next.
        </h2>
        <p class="text-muted-foreground text-lg mt-5">
          A score tells part of the story. Explore the details that help you make sense of it.
        </p>
        <div class="space-y-3 mt-8" aria-label="Driving feedback examples">
          <button
            v-for="(item, index) in steps"
            :key="item.title"
            :aria-pressed="selected === index"
            aria-controls="drive-story-panel"
            class="w-full rounded-2xl border p-5 text-left flex gap-4 transition-colors"
            :class="
              selected === index ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted'
            "
            @click="selected = index"
          >
            <span class="text-primary font-semibold">0{{ index + 1 }}</span
            ><span
              ><span class="font-semibold block">{{ item.title }}</span
              ><span class="block text-sm text-muted-foreground leading-relaxed mt-2">{{
                item.body
              }}</span></span
            >
          </button>
        </div>
      </div>
      <figure
        id="drive-story-panel"
        class="rounded-3xl bg-muted/40 border p-6 sm:p-8 flex flex-col items-center"
      >
        <img
          :src="`screen-${mode === 'light' ? 'light_' + step.light : 'dark_' + step.image}.webp`"
          :alt="step.alt"
          width="1206"
          height="2622"
          loading="lazy"
          class="w-52 sm:w-60 rounded-3xl border shadow-lg"
        />
        <figcaption
          aria-live="polite"
          class="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed"
        >
          {{ step.detail }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>
