<script setup lang="ts">
import Separator from "./ui/separator/Separator.vue";
</script>

<template>
  <footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div class="col-span-full xl:col-span-2">
          <a href="#" class="flex font-bold items-center">
            <img src="../icons/EDIcons_128x128_Transparent.png" alt="Logo" class="h-10 w-10 mr-2 bg-gradient-to via-primary rounded-lg size-9 border text-white"/>
            <h3 class="text-2xl">Efficient Driver</h3>
          </a>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Contact</h3>
          <div>
            <a href="mailto:support@efficientdriver.net" class="opacity-60 hover:opacity-100">
              Email
            </a>
          </div>

          <div>
            <a href="tel:+18005551234" class="opacity-60 hover:opacity-100">
              Phone
            </a>
          </div>

          <div>
            <a href="https://www.efficientdriver.net" class="opacity-60 hover:opacity-100">
              Website
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Platforms</h3>
          <div>
            <a href="#" class="opacity-60 hover:opacity-100">
              iOS
            </a>
          </div>

          <div>
            <a href="#" class="opacity-60 hover:opacity-100">
              Android (Future Support)
            </a>
          </div>

          <div>
            <a href="#" class="opacity-60 hover:opacity-100">
              Apple Watch (Future Support)
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Help</h3>
          <div>
            <a href="/contact" class="opacity-60 hover:opacity-100">
              Contact Us
            </a>
          </div>

          <div>
            <a href="/faq" class="opacity-60 hover:opacity-100">
              FAQ
            </a>
          </div>

          <div>
            <a href="/contact" class="opacity-60 hover:opacity-100">
              Feedback
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Socials</h3>
          <div>
            <a href="https://www.instagram.com/" class="opacity-60 hover:opacity-100">
              Instagram
            </a>
          </div>

          <div>
            <a href="https://www.tiktok.com/" class="opacity-60 hover:opacity-100">
              TikTok
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/" class="opacity-60 hover:opacity-100">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <Separator class="my-6" />
      <section className="">
        <h3 class="">
          © 2025
          <a target="_blank" href="https://www.efficientdriver.net"
            className="text-primary transition-all border-primary hover:border-b-2">
            efficientdriver.net
          </a>
        </h3>
      </section>
    </div>
  </footer>
</template>