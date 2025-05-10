<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Does Efficient Driver 2.0 require internet or hardware?",
    answer: "No. Efficient Driver 2.0 works completely offline using your device’s sensors – no internet or hardware is needed.",
    value: "item-1",
  },
  {
    question: "What are the pricing plans for Efficient Driver 2.0?",
    answer:
      "We offer a 200km free trial, followed by affordable plans: Smart Driver at $1.99/month, Eco Master at $2.99/month, and Enterprise at $19.99/user/year (currently 50% off!).",
    value: "item-2",
  },
  {
    question: "Is my data safe with Efficient Driver 2.0?",
    answer:
      "Yes. Your data stays local on your device with no internet sharing, ensuring complete privacy.",
    value: "item-3",
  },
  {
    question: "Which devices are compatible with Efficient Driver 2.0?",
    answer:
      "Efficient Driver 2.0 supports iOS 18+ devices, with future support for Apple Watch, Android, and embedded devices.",
    value: "item-4",
  },
  {
    question: "How can I get support for Efficient Driver 2.0?",
    answer: "Our support team is here to help! Contact us at support@efficientdriver.net for assistance.",
    value: "item-5",
  },
];
</script>

<template>
  <section id="faq" class="container md:w-[700px] py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQS</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Frequently Asked Questions
      </h2>
    </div>

    <Accordion type="single" collapsible class="AccordionRoot">
      <AccordionItem v-for="{ question, answer, value } in FAQList" :key="value" :value="value">
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>
    <h3 class="font-medium mt-4">
      Still have questions?
      <a href="#" class="text-muted-foreground"></a>

      <a href="mailto:support@efficientdriver.net" class="underline">Contact us at support@efficientdriver.net</a>
    </h3>
  </section>
</template>