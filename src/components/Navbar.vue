<script lang="ts" setup>
import { ref } from "vue";

import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
mode.value = "dark";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Menu, ExternalLinkIcon } from "lucide-vue-next";
import DashIcon from "@/icons/DashIcon.vue";
import ToggleTheme from "./ToggleTheme.vue";

const emit = defineEmits(['navigate']);

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const externalList: RouteProps[] = [
  {
    href: "https://dash.driver.efficiency.school",
    label: "Dashboard",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Drive Green",
    description: "Cut emissions with offline eco-insights.",
  },
  {
    title: "Save Fuel",
    description: "Track savings, boost efficiency fast.",
  },
  {
    title: "Stay Safe",
    description: "Get offline tips for safer driving.",
  },
];

const isOpen = ref<boolean>(false);
</script>

<template>
  <header :class="{
    'shadow-light': mode === 'light',
    'shadow-dark': mode === 'dark',
    'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2 bg-card shadow-md': true,
  }">
    <a href="/#" class="font-bold text-lg flex items-center" @click="emit('navigate', 'main')">
      <img src="../icons/EDIcons_128x128_Transparent.png" alt="Logo" class="h-10 w-10 mr-2 bg-gradient-to via-primary rounded-lg size-9 border text-white"/>
      Efficient Driver
    </a>
    <!-- Mobile -->
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu @click="isOpen = true" class="cursor-pointer" />
        </SheetTrigger>

        <SheetContent side="left" class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card">
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <a href="/#" class="font-bold text-lg flex items-center" @click="emit('navigate', 'main')">
                  <img src="../icons/EDIcons_128x128_Transparent.png" alt="Logo" class="h-10 w-10 mr-2 bg-gradient-to via-primary rounded-lg size-9 border text-white"/>
                  Efficient Driver
                </a>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <Button v-for="{ href, label } in routeList" :key="label" as-child variant="ghost"
                class="justify-start text-base">
                <a @click="emit('navigate', 'main'); isOpen = false" :href="href">
                  {{ label }}
                </a>
              </Button>
              <Separator class="my-2" />
              <Button v-for="{ href, label } in externalList" :key="label" as-child variant="ghost" class="justify-start text-base">
                <a @click="isOpen = false" :href="href" target="_blank">
                  {{ label }}
                  <ExternalLinkIcon class="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2" />
            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop -->
    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-card text-base">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="grid w-[512px] grid-cols-2 gap-5 p-4">
              <img src="../icons/EDIcons_256x256_Transparent.png" alt="Beach" class="h-full w-full rounded-md object-cover" />
              <ul class="flex flex-col gap-2">
                <li v-for="{ title, description } in featureList" :key="title"
                  class="rounded-md p-3 text-sm hover:bg-muted">
                  <p class="mb-1 font-semibold leading-none text-foreground">
                    {{ title }}
                  </p>
                  <p class="line-clamp-2 text-muted-foreground">
                    {{ description }}
                  </p>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button v-for="{ href, label } in routeList" :key="label" as-child variant="ghost"
              class="justify-start text-base">
              <a @click="emit('navigate', 'main')" :href="href">
                {{ label }}
              </a>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <div class="hidden lg:flex">
      <ToggleTheme />
      <Button as-child size="sm" variant="ghost" aria-label="Efficient Driver Dashboard">
        <a aria-label="Efficient Driver Dashboard" href="https://dash.driver.efficiency.school" target="_blank">
          <DashIcon class="size-5" />
        </a>
      </Button>
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}
.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>