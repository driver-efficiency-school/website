<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Paintbrush,
  MessageCircle,
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  MousePointerClick,
  Newspaper,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Offline Eco-Driving",
    description:
      "Track your driving efficiency anywhere – No internet or hardware required.",
  },
  {
    icon: "goal",
    title: "Fuel & CO2 Savings",
    description:
      "Quantify fuel savings and CO2 reductions with detailed trip metrics.",
  },
  {
    icon: "badgeCheck",
    title: "Safer Driving Tips",
    description:
      "Get personalized offline coaching to improve your driving habits and safety.",
  },
  {
    icon: "pictureInPicture",
    title: "Gamified Experience",
    description:
      "Earn badges and achieve eco-driving goals with fun challenges.",
  },
  {
    icon: "mousePointerClick",
    title: "Privacy Protection",
    description:
      "Your data stays local – No internet, no sharing, just privacy.",
  },
  {
    icon: "newspaper",
    title: "Business Solutions",
    description:
      "Multi-user support and custom reports for driving schools and fleets.",
  },
];

const iconMap: Record<
  string,
  | typeof TabletSmartphone
  | typeof BadgeCheck
  | typeof Goal
  | typeof PictureInPicture
  | typeof Paintbrush
  | typeof MousePointerClick
  | typeof MessageCircle
  | typeof Newspaper
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  pictureInPicture: PictureInPicture,
  paintbrush: Paintbrush,
  mousePointerClick: MousePointerClick,
  messageCircle: MessageCircle,
  newspaper: Newspaper,
};
</script>

<template>
  <section id="features" class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Features
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Why Choose Efficient Driver 2.0?
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Discover the powerful features that make Efficient Driver 2.0 the ultimate offline eco-driving app – designed to help you save fuel, reduce emissions, and drive safer, all without needing internet or hardware.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="{ icon, title, description } in featureList" :key="title">
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
              <component :is="iconMap[icon]" class="size-6 text-primary" />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>