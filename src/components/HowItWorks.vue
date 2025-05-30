<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "Download",
    title: "Download the App – No Hardware Needed",
    description:
      "Install Efficient Driver 2.0 from the App Store and start your eco-driving journey without any internet or hardware.",
    image: "roboto.png",
  },
  {
    badgeTitle: "Drive",
    title: "Drive and Track – Offline, Anytime",
    description:
      "Use your device’s sensors to track your driving efficiency offline – No internet required.",
    image: "runner.png",
  },
  {
    badgeTitle: "Analyze",
    title: "Analyze and Save – Fuel & CO2 Insights",
    description:
      "Get detailed trip metrics to quantify fuel savings and reduce CO2 emissions effortlessly.",
    image: "pacheco.png",
  },
  {
    badgeTitle: "Improve",
    title: "Improve and Stay Safe – Personalized Tips",
    description:
      "Receive offline coaching tips to drive safer and earn badges for eco-friendly driving habits.",
    image: "gamestation.png",
  },
];
</script>

<template>
  <section id="features" class="container py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        How It Works
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Get Started with Efficient Driver 2.0 in 4 Easy Steps
      </h2>
    </div>

    <div class="lg:w-[80%] mx-auto relative">
      <div v-for="(
{ badgeTitle, title, description, image }, index
        ) in HowItWorksList" :key="title" :class="[
          'flex mb-8 items-center',
          { ' flex-row-reverse': index % 2 !== 0 },
        ]">
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground w-[80%]">
            {{ description }}
          </CardContent>
        </Card>

        <img :src="image" :alt="`Image describing ${title} `"
          className="w-[150px]  md:w-[250px] lg:w-[300px] mx-auto -scale-x-100 " />
        <div :class="[
          '-z-10 absolute right-0 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl',
          {
            'left-0': index % 2 !== 0,
          },
        ]"></div>
      </div>
    </div>
  </section>
</template>