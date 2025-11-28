<script setup lang="ts">
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  } from '@/components/ui/accordion'

  interface FAQProps {
    question: string
    answer: string
    value: string
  }

  const FAQList: FAQProps[] = [
    {
      question: 'How does Efficiver detect my engine without hardware?',
      answer:
        "Efficiver uses your iPhone's built-in accelerometer to detect vehicle vibration patterns. This allows us to identify engine type (petrol, diesel, EV) and driving behavior without any external hardware or OBD dongles.",
      value: 'item-1'
    },
    {
      question: 'Does Efficiver require internet or hardware?',
      answer:
        "No. Efficiver works completely offline using your device's sensors - no internet connection or external hardware is needed. Your data never leaves your phone.",
      value: 'item-2'
    },
    {
      question: 'What cars are supported?',
      answer:
        'Efficiver works with all vehicles - petrol, diesel, hybrid, and electric. The app automatically calibrates to your specific vehicle during the first few drives.',
      value: 'item-3'
    },
    {
      question: 'How much fuel can I save with Efficiver?',
      answer:
        'Beta users have reported 8-22% fuel savings depending on driving habits. The app provides real-time feedback to help you develop more efficient driving techniques.',
      value: 'item-4'
    },
    {
      question: 'Is my data safe with Efficiver?',
      answer:
        'Absolutely. Your data stays 100% local on your device with no cloud sync or internet sharing. We never collect, store, or sell your driving data. Your privacy is our priority.',
      value: 'item-5'
    },
    {
      question: 'What are the pricing plans for Efficiver?',
      answer:
        'Currently, the Smart Driver and Eco Master plans are Free for a limited time! Our Enterprise plan is coming soon.',
      value: 'item-6'
    },
    {
      question: 'Which devices are compatible with Efficiver?',
      answer:
        'Efficiver supports iOS 18+ devices. Android version is coming soon, along with Apple Watch and Android Watch support.',
      value: 'item-7'
    },
    {
      question: 'How is Efficiver different from OBD dongle apps?',
      answer:
        "Unlike OBD apps that require $50+ hardware dongles, Efficiver works with just your iPhone. No cables, no Bluetooth pairing issues, no battery drain from external devices - and it's completely free.",
      value: 'item-8'
    },
    {
      question: 'How can I get support for Efficiver?',
      answer:
        'Our support team is here to help! Contact us at support@efficiver.com for assistance or visit our FAQ section for quick answers.',
      value: 'item-9'
    }
  ]
</script>

<template>
  <section id="faq" class="container md:w-[700px] py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQs</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">Frequently Asked Questions</h2>
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

      <a href="mailto:support@efficiver.com" class="underline"
        >Contact us at support@efficiver.com</a
      >
    </h3>
  </section>
</template>
