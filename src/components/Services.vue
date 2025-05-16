<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Eco-Driving Insights",
    description:
      "Track your driving efficiency offline and get insights to reduce emissions and save fuel.",
    pro: 0,
  },
  {
    title: "Privacy Protection",
    description:
      "Your data stays local on your device – No internet sharing, ensuring complete privacy.",
    pro: 0,
  },
  {
    title: "Safety Coaching",
    description:
      "Receive personalized offline tips to improve your driving habits and stay safer on the road.",
    pro: 0,
  },
  {
    title: "Enterprise Solutions",
    description:
      "Scalable multi-user support and custom reports for driving schools and fleets.",
    pro: 1,
  },
];
</script>

<template>
  <section id="services" class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Services
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Drive Smarter with Efficiver
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Explore the core offerings of Efficiver – designed to help you reduce emissions, save fuel, drive safer, and support your business, all while keeping your data private.
    </h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
      <div v-for="{ title, description, pro } in serviceList" :key="title">
        <Card class="bg-muted/60 dark:bg-card h-full relative">
          <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
          </CardHeader>
          <Badge v-if="pro === ProService.YES" variant="secondary" class="absolute -top-2 -right-3">PRO</Badge>
        </Card>
      </div>
    </div>
  </section>
</template>