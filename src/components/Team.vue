<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import LinkedInIcon from "@/icons/LinkedInIcon.vue";
import GithubIcon from "@/icons/GithubIcon.vue";
import XIcon from "@/icons/XIcon.vue";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/250?img=58",
    firstName: "Dhamodharan",
    lastName: "Krishnan",
    positions: ["Technolgy Head", "Eco-Driving Innovator"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/efficientdriver-alex/",
      },
      {
        name: "Github",
        url: "https://github.com/efficientdriver-alex",
      },
      {
        name: "X",
        url: "https://x.com/efficientdriver_alex",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Karuneswara",
    lastName: "Dhamodharan",
    positions: ["Marekting Head", "Marketing Advocate"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/efficientdriver-priya/",
      },
      {
        name: "X",
        url: "https://x.com/efficientdriver_priya",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Praba",
    lastName: "Natarajan",
    positions: ["Operations Head", "Operations Expert"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/efficientdriver-david/",
      },
      {
        name: "Github",
        url: "https://github.com/efficientdriver-david",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/250?img=58",
    firstName: "Dhamodharan",
    lastName: "Krishnan",
    positions: ["Lead Developer", "iOS Developer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/efficientdriver-alex/",
      },
      {
        name: "Github",
        url: "https://github.com/efficientdriver-alex",
      },
      {
        name: "X",
        url: "https://x.com/efficientdriver_alex",
      },
    ],
  },
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return LinkedInIcon;

    case "Github":
      return GithubIcon;

    case "X":
      return XIcon;
  }
};
</script>

<template>
  <section id="team" class="container lg:w-[75%] py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">Team</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Meet the Team Behind Efficient Driver 2.0
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <Card v-for="{
        imageUrl,
        firstName,
        lastName,
        positions,
        socialNetworks,
      } in teamList" :key="imageUrl"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img :src="imageUrl" alt=""
              class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]" />
          </div>
          <CardTitle class="py-6 pb-4 px-6">{{ firstName }}
            <span class="text-primary">{{ lastName }}</span>
          </CardTitle>
        </CardHeader>

        <CardContent v-for="(position, index) in positions" :key="index" :class="{
          'pb-0 text-muted-foreground ': true,
          'pb-4': index === positions.length - 1,
        }">
          {{ position }}<span v-if="index < positions.length - 1">,</span>
        </CardContent>

        <CardFooter class="space-x-4 mt-auto">
          <a v-for="{ name, url } in socialNetworks" key="name" :href="url" target="_blank"
            class="hover:opacity-80 transition-all" :aria-label="`Visit our ${name} page`">
            <component :is="socialIcon(name)" />
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>