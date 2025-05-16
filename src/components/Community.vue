<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import DiscordIcon from "@/icons/DiscordIcon.vue";
</script>

<template>
  <section id="community" class="py-12">
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0">
          <CardHeader>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <Component class="w-20 h-20 m-auto mb-4" :is="DiscordIcon" />
              Join the Efficiver
              <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Community!
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            Connect with eco-conscious drivers, share tips, and grow your impact with Efficiver. Follow us on social media to join the movement! 🌍
          </CardContent>

          <CardFooter>
            <Button as-child>
              <a href="https://www.instagram.com/" target="_blank">
                Follow Us on Social Media
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    <hr />
  </section>
</template>