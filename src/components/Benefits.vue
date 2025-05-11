<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Sparkle,
  Tag,
  Paintbrush,
  Blocks,
  LineChart,
  Wallet,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "sparkle",
    title: "Reduce Emissions",
    description:
      "Track and minimize your carbon footprint with every trip, contributing to a greener planet.",
  },
  {
    icon: "wallet",
    title: "Save Fuel Costs",
    description:
      "Quantify fuel savings with detailed trip metrics, helping you save money on every journey.",
  },
  {
    icon: "lineChart",
    title: "Drive Safer",
    description:
      "Get personalized offline coaching to improve your driving habits, keeping you safer on the road.",
  },
  {
    icon: "blocks",
    title: "Privacy First",
    description:
      "Your data stays with you – Local storage ensures privacy, with no internet or hardware required.",
  },
];

const iconMap: Record<
  string,
  | typeof Sparkle
  | typeof Tag
  | typeof Paintbrush
  | typeof Blocks
  | typeof LineChart
  | typeof Wallet
> = {
  sparkle: Sparkle,
  tag: Tag,
  paintbrush: Paintbrush,
  blocks: Blocks,
  lineChart: LineChart,
  wallet: Wallet,
};
</script>

<template>
  <section id="benefits" class="container py-24 sm:py-32">
    <div class="grid lg:grid-cols-2 place-items-center text-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Drive Smarter, Save More – Key Benefits
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          Efficient Driver 2.0 empowers you to reduce emissions, save fuel, and drive safer – all offline, using just your device’s sensors. Discover how we make eco-driving effortless and impactful.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card v-for="({ icon, title, description }, index) in benefitList" :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number">
          <CardHeader>
            <div class="flex justify-between">
              <component class="size-8 mb-6 text-primary" :is="iconMap[icon]" />

              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">0{{
                index + 1 }}</span>
            </div>

            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>