<script setup lang="ts">
  import { useColorMode } from '@vueuse/core'
  const mode = useColorMode()

  import { Button } from '@/components/ui/button'
  import { Badge } from '@/components/ui/badge'
  import { ArrowRight, Check } from 'lucide-vue-next'
  import ShareButtons from './ShareButtons.vue'

  const darkImages = [
    'screen-dark_001.jpg',
    'screen-dark_002.jpg',
    'screen-dark_003.jpg',
    'screen-dark_004.jpg',
    'screen-dark_005.jpg',
    'screen-dark_006.jpg'
  ]

  const lightImages = [
    'screen-light_101.jpg',
    'screen-light_102.jpg',
    'screen-light_103.jpg',
    'screen-light_104.jpg',
    'screen-light_105.jpg',
    'screen-light_106.jpg'
  ]
</script>

<template>
  <section class="container">
    <div class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
      <div class="text-center space-y-8">
        <Badge variant="outline" class="text-sm py-2">
          <span class="mr-2 text-primary">
            <Badge>New</Badge>
          </span>
          <span>Limited Time Offer – Free!</span>
        </Badge>

        <div class="max-w-screen-md mx-auto text-center">
          <div class="flex justify-center mb-8">
            <img
              src="/Logo-v1_Transparent.png"
              alt="Efficiver Logo"
              class="w-72 h-72 md:w-96 md:h-96 object-contain rounded-xl shadow-lg dark:shadow-none"
            />
          </div>
          <div class="space-y-4">
            <p class="text-2xl md:text-3xl font-semibold text-muted-foreground">
              The Offline Eco-Driving Assistant.
            </p>
          </div>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Drive smarter with Efficiver – an offline, sensor-based app designed to reduce emissions,
          save fuel, and promote safer driving. Join thousands of eco-conscious drivers and
          businesses in making a difference.
        </p>

        <div class="space-y-4 md:space-y-0 md:space-x-4">
          <Button as-child class="w-5/6 md:w-1/4 font-bold group/arrow">
            <a href="https://apps.apple.com/app/efficiver/id6754255974" target="_blank">
              Download Now
              <ArrowRight
                class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
              />
            </a>
          </Button>

          <Button as-child variant="secondary" class="w-5/6 md:w-1/4 font-bold">
            <a href="/features">Learn More</a>
          </Button>
        </div>

        <div class="flex flex-wrap justify-center gap-6 mt-8 text-base font-medium">
          <span class="flex items-center"
            ><Check class="size-5 mr-2 text-primary" /> No Data Collection</span
          >
          <span class="flex items-center"
            ><Check class="size-5 mr-2 text-primary" /> Background Ready</span
          >
          <span class="flex items-center"
            ><Check class="size-5 mr-2 text-primary" /> FaceID Secured</span
          >
        </div>

        <div class="flex justify-center mt-6">
          <ShareButtons />
        </div>
      </div>

      <div class="relative group mt-14">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <div
          class="grid grid-cols-3 gap-4 w-full max-w-[1200px] mx-auto rounded-lg relative border border-t-2 border-t-primary/30 img-border-animation"
        >
          <img
            v-for="(image, index) in mode === 'light' ? lightImages : darkImages"
            :key="index"
            :src="image"
            :alt="`Efficiver dashboard screenshot ${index + 1}`"
            class="rounded-lg border border-primary/20"
          />
        </div>

        <!-- gradient effect img -->
        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .img-shadow-animation {
    animation-name: img-shadow-animation;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-direction: alternate;
  }

  .img-border-animation {
    animation-name: img-border-animation;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-direction: alternate;
  }

  @keyframes img-shadow-animation {
    from {
      opacity: 0.5;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes img-border-animation {
    from {
      border-top-color: hsl(var(--primary) / 0.1);
    }

    to {
      border-top-color: hsl(var(--primary) / 0.6);
    }
  }
</style>
