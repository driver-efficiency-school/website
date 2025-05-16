<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check } from "lucide-vue-next";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  discount: string | null; // Added for discount badge
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Free Trial",
    popular: 0,
    price: 0,
    description: "Try with a 200km trial – perfect to start.",
    discount: null, // No discount for free plan
    buttonText: "Start Free Trial",
    benefitList: [
      "200km trial",
      "Basic eco-driving score",
      "GPS speed tracking",
      "Weather display (cached)",
      "Limited session details",
    ],
  },
  {
    title: "Smart Driver",
    popular: 0,
    price: 1.99,
    description: "Ideal for learners – detailed metrics, coaching.",
    discount: "50% OFF",
    buttonText: "Get Started",
    benefitList: [
      "Unlimited trips",
      "Detailed trip metrics",
      "Fuel/CO2 savings estimate",
      "Offline driving tips",
      "Custom profiles",
    ],
  },
  {
    title: "Eco Master",
    popular: 1,
    price: 2.99,
    description: "Best for eco-drivers – analytics, gamified fun.",
    discount: "50% OFF",
    buttonText: "Get Started",
    benefitList: [
      "All Smart Driver features",
      "Idle detection",
      "Gamified badges",
      "Advanced offline analytics",
      "Auto start mode",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 19.99,
    description: "For businesses – scalable, robust solution.",
    discount: "60% OFF",
    buttonText: "Contact Us",
    benefitList: [
      "Multi-user support",
      "Custom reports",
      "Advanced analytics",
      "Dedicated support",
      "30-day free trial",
    ],
  },
];
</script>

<template>
  <section class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Pricing
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Affordable Plans for Every Driver
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
      Unlock the full potential of Efficiver with our flexible plans – now up to 60% off for a limited time! Start free, upgrade, or go Enterprise.
    </h3>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
      <Card v-for="{
        title,
        popular,
        price,
        description,
        discount,
        buttonText,
        benefitList,
      } in plans" :key="title" :class="{
          'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]':
            popular === PopularPlan?.YES,
        }">
        <CardHeader class="relative">
          <CardTitle class="pb-2">
            {{ title }}
          </CardTitle>
          <span v-if="discount" class="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
            {{ discount }}
          </span>

          <CardDescription class="pb-4">{{ description }}</CardDescription>

          <div>
            <span class="text-3xl font-bold">${{ price }}</span>
            <span class="text-muted-foreground"> {{ title === 'Enterprise' ? '/user/year' : '/month' }}</span>
          </div>
        </CardHeader>

        <CardContent class="flex">
          <div class="space-y-4">
            <span v-for="benefit in benefitList" :key="benefit" class="flex">
              <Check class="text-primary mr-2" />
              <h3>{{ benefit }}</h3>
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <Button :variant="popular === PopularPlan?.NO ? 'secondary' : 'default'" class="w-full">
            {{ buttonText }}
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>