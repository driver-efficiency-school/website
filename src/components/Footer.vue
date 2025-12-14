<script setup lang="ts">
  import { ref } from 'vue'
  import Separator from './ui/separator/Separator.vue'

  const emit = defineEmits(['navigate'])

  const version = 'v1.0.21 (25121504)'
  const copied = ref(false)

  function copyVersion() {
    navigator.clipboard.writeText(version)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
</script>

<template>
  <footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div class="col-span-full xl:col-span-2">
          <a href="/#" class="flex font-bold items-center" @click="emit('navigate', 'main')">
            <img
              src="../icons/EDIcons_128x128_Transparent.webp"
              alt="Efficiver Logo - Free Driving Coach App"
              class="h-10 w-10 mr-2 bg-gradient-to via-primary rounded-lg size-9 border text-white"
            />
            <h3 class="text-2xl">Efficiver</h3>
          </a>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Contact</h3>
          <div>
            <a href="mailto:support@efficiver.com" class="opacity-60 hover:opacity-100"> Email </a>
          </div>
          <div>
            <a href="tel:+18005551234" class="opacity-60 hover:opacity-100"> Phone </a>
          </div>
          <div>
            <a href="https://www.efficiver.com" class="opacity-60 hover:opacity-100"> Website </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Platforms</h3>
          <div>
            <a href="/#" class="opacity-60 hover:opacity-100" @click="emit('navigate', 'main')">
              iOS
            </a>
          </div>
          <div>
            <span class="text-muted-foreground cursor-not-allowed"> Android (Coming Soon) </span>
          </div>
          <div>
            <span class="text-muted-foreground cursor-not-allowed">
              Apple Watch (Coming Soon)
            </span>
          </div>
          <div>
            <span class="text-muted-foreground cursor-not-allowed">
              Android Watch (Coming Soon)
            </span>
          </div>
          <div>
            <a
              href="/#"
              class="opacity-60 hover:opacity-100"
              @click.prevent="emit('navigate', 'coming-soon')"
            >
              Dashboard (Coming Soon)
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Help</h3>
          <div>
            <a
              href="#contact"
              class="opacity-60 hover:opacity-100"
              @click="emit('navigate', 'main')"
            >
              Contact Us
            </a>
          </div>
          <div>
            <a href="#faq" class="opacity-60 hover:opacity-100" @click="emit('navigate', 'main')">
              FAQ
            </a>
          </div>
          <div>
            <a
              href="#newsletter"
              class="opacity-60 hover:opacity-100"
              @click="emit('navigate', 'main')"
            >
              Newsletter
            </a>
          </div>
          <div>
            <a
              href="#contact"
              class="opacity-60 hover:opacity-100"
              @click="emit('navigate', 'main')"
            >
              Feedback
            </a>
          </div>
          <div>
            <a
              href="#investors"
              class="opacity-60 hover:opacity-100 cursor-pointer"
              @click="emit('navigate', 'investors')"
            >
              Investors
            </a>
          </div>
          <div>
            <a
              href="#terms"
              class="opacity-60 hover:opacity-100 cursor-pointer"
              @click="emit('navigate', 'terms')"
            >
              Terms of Use
            </a>
          </div>
          <div>
            <a
              href="#privacy"
              class="opacity-60 hover:opacity-100 cursor-pointer"
              @click="emit('navigate', 'privacy')"
            >
              Privacy Policy
            </a>
          </div>
          <div>
            <a
              href="#help"
              class="opacity-60 hover:opacity-100 cursor-pointer"
              @click="emit('navigate', 'help')"
            >
              Help & Support
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Socials</h3>
          <div>
            <span class="text-muted-foreground cursor-not-allowed"> Instagram </span>
          </div>
          <div>
            <span class="text-muted-foreground cursor-not-allowed"> TikTok </span>
          </div>
          <div>
            <span class="text-muted-foreground cursor-not-allowed"> LinkedIn </span>
          </div>
        </div>
      </div>

      <Separator class="my-6" />
      <section class="flex flex-col sm:flex-row items-center justify-between gap-2">
        <h3>
          © 2015–2025
          <a
            target="_blank"
            href="https://www.efficiver.com"
            class="text-primary transition-all border-primary hover:border-b-2"
          >
            Efficiver
          </a>
          <span class="text-muted-foreground">(formerly Efficient Driver)</span>
          <span class="hidden sm:inline"> • All rights reserved</span>
        </h3>
        <button
          class="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          :title="copied ? 'Copied!' : 'Click to copy version'"
          @click="copyVersion"
        >
          {{ copied ? 'Copied!' : version }}
        </button>
      </section>
    </div>
  </footer>
</template>
