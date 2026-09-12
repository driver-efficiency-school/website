<script setup lang="ts">
  import { useColorMode } from '@vueuse/core'
  const mode = useColorMode()
</script>
<template>
  <section id="how-it-works" class="container py-16 sm:py-20">
    <div class="grid md:grid-cols-[1fr_auto] items-center gap-10 max-w-5xl mx-auto">
      <div>
        <p class="text-primary text-sm uppercase tracking-widest font-semibold">Getting started</p>
        <h2 class="text-3xl sm:text-4xl font-bold mt-3">Set up once. Start your drive.</h2>
        <p class="text-muted-foreground text-lg mt-5">
          Do the setup while parked. You do not need to buy or fit an OBD dongle.
        </p>
        <ol class="list-decimal pl-5 space-y-5 mt-7 text-muted-foreground">
          <li>
            <strong class="text-foreground">Choose your vehicle and permissions.</strong> Select
            petrol, diesel or electric and allow the location and motion access needed for
            recording.
          </li>
          <li>
            <strong class="text-foreground">Keep your phone in a stable position.</strong> Follow
            Smart Detection’s parked calibration instructions. For an engine, this is about a minute
            running and a minute off. Recalibrate after changing vehicle or phone position.
          </li>
          <li>
            <strong class="text-foreground">Start recording before you move.</strong> Logging
            continues when you switch to Maps or Music. Review the results after parking.
          </li>
        </ol>
        <a href="#help" class="inline-block mt-7 font-semibold underline underline-offset-4"
          >Read the complete setup guide →</a
        >
      </div>
      <figure class="flex flex-col items-center">
        <img
          :src="mode === 'light' ? 'screen-light_101.webp' : 'screen-dark_001.webp'"
          alt="Efficiver start screen with its Drive button"
          width="1206"
          height="2622"
          loading="lazy"
          class="w-44 sm:w-52 rounded-3xl border shadow-lg"
        />
        <figcaption class="text-xs text-muted-foreground mt-4">
          The start screen · iPhone shown
        </figcaption>
      </figure>
    </div>
  </section>
</template>
