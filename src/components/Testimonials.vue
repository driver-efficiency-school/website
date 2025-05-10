<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Star } from "lucide-vue-next";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Smith",
    userName: "Eco-Conscious Driver",
    comment:
      "Efficient Driver 2.0 helped me save 15% on fuel in just one month! The offline feature is a game-changer.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Priya Sharma",
    userName: "Driving School Owner",
    comment:
      "This app is perfect for training our students offline – the custom reports are invaluable for our business.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Maria Gonzalez",
    userName: "Learner Driver",
    comment:
      "The offline coaching tips improved my driving habits, and I feel much safer on the road now!",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ethan Brown",
    userName: "Fleet Manager",
    comment:
      "Our fleet reduced emissions by 10% thanks to Efficient Driver 2.0’s enterprise features. Highly recommend!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sophia Lee",
    userName: "Eco Enthusiast",
    comment:
      "I love the gamified badges – they make eco-driving fun while helping me reduce my carbon footprint!",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Adam Carter",
    userName: "Commuter",
    comment:
      "The privacy-first approach gives me peace of mind – my data stays on my device, and I still get great insights.",
    rating: 4.8,
  },
];
</script>

<template>
  <section id="testimonials" class="container py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Testimonials
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        What Drivers Are Saying About Efficient Driver 2.0
      </h2>
    </div>

    <Carousel :opts="{
      align: 'start',
    }" class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto">
      <CarouselContent>
        <CarouselItem v-for="review in reviewList" :key="review.name" class="md:basis-1/2 lg:basis-1/3">
          <Card class="bg-muted/50 dark:bg-card">
            <CardContent class="pt-6 pb-0">
              <div class="flex gap-1 pb-6">
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
              </div>

              "{{ review.comment }}"
            </CardContent>

            <CardHeader>
              <div class="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage :src="review.image" alt="@efficientdriver" />
                  <AvatarFallback>ED</AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <CardTitle class="text-lg">{{ review.name }}</CardTitle>
                  <CardDescription>{{ review.userName }}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
</template>