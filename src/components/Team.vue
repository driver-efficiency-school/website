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
  emoji: string;
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
    emoji: "👨‍💻",
    firstName: "Dhamodharan",
    lastName: "Krishnan",
    positions: ["Technology Head", "Eco-Driving Innovator"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/efficientdriver-dhamodharan/",
      },
      {
        name: "Github",
        url: "https://github.com/efficientdriver-dhamodharan",
      },
      {
        name: "X",
        url: "https://x.com/efficientdriver_dhamodharan",
      },
    ],
  },
  {
    emoji: "👩‍💼",
    firstName: "Karuneswara",
    lastName: "Dhamodharan",
    positions: ["Marketing Head", "Marketing Advocate"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/efficientdriver-karuneswara/",
      },
      {
        name: "X",
        url: "https://x.com/efficientdriver_karuneswara",
      },
    ],
  },
  {
    emoji: "👨‍🔧",
    firstName: "Praba",
    lastName: "Natarajan",
    positions: ["Operations Head", "Operations Expert"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/efficientdriver-praba/",
      },
      {
        name: "Github",
        url: "https://github.com/efficientdriver-praba",
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
        Meet the Team Behind Efficiver
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <Card v-for="{
        emoji,
        firstName,
        lastName,
        positions,
        socialNetworks,
      } in teamList" :key="`${firstName}-${lastName}`"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden flex items-center justify-center">
            <div class="w-full aspect-square flex items-center justify-center text-8xl bg-gradient-to-br from-primary/10 to-primary/20 transition-all duration-200 ease-linear group-hover/hoverimg:scale-[1.01]">
              {{ emoji }}
            </div>
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