<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertCircle, CheckCircle, Loader2 } from "lucide-vue-next";
import { apiService, type ContactFormData } from "@/lib/api";

interface ContactFormProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

const contactForm = reactive<ContactFormProps>({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  subject: "General Inquiry",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');
const errorMessage = ref('');

const handleSubmit = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  submitStatus.value = 'idle';
  errorMessage.value = '';

  try {
    const formData: ContactFormData = {
      name: `${contactForm.firstName} ${contactForm.lastName}`.trim(),
      email: contactForm.email,
      phone: contactForm.phone.trim() || undefined,
      company: contactForm.company.trim() || undefined,
      subject: contactForm.subject,
      message: contactForm.message,
      source: 'www.efficiver.com'
    };

    await apiService.submitContactForm(formData);
    submitStatus.value = 'success';

    // Reset form on success
    Object.assign(contactForm, {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      subject: "General Inquiry",
      message: "",
    });

  } catch (error) {
    submitStatus.value = 'error';
    errorMessage.value = error instanceof Error ? error.message : 'An unexpected error occurred';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="container py-24 sm:py-32">
    <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
    <div class="max-w-2xl mx-auto">
      <Card class="bg-muted/60 dark:bg-card">
        <CardHeader class="text-primary text-2xl"> </CardHeader>
        <CardContent>
          <form @submit.prevent="handleSubmit" class="grid gap-4">
            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex flex-col w-full gap-1.5">
                <Label for="first-name">First Name</Label>
                <Input id="first-name" type="text" placeholder="Alex" v-model="contactForm.firstName" />
              </div>

              <div class="flex flex-col w-full gap-1.5">
                <Label for="last-name">Last Name</Label>
                <Input id="last-name" type="text" placeholder="Smith" v-model="contactForm.lastName" />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="phone">Phone (Optional)</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" v-model="contactForm.phone" />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="company">Company (Optional)</Label>
              <Input id="company" type="text" placeholder="Your Company" v-model="contactForm.company" />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="subject">Subject</Label>

              <Select v-model="contactForm.subject">
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="General Inquiry">
                      General Inquiry
                    </SelectItem>
                    <SelectItem value="Billing Support">
                      Billing Support
                    </SelectItem>
                    <SelectItem value="Technical Support">Technical Support</SelectItem>
                    <SelectItem value="Enterprise Solutions">Enterprise Solutions</SelectItem>
                    <SelectItem value="Feature Request">Feature Request</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="message">Message</Label>
              <Textarea id="message" placeholder="Your message about Efficiver..." rows="5" v-model="contactForm.message" />
            </div>

            <Alert v-if="submitStatus === 'error'" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {{ errorMessage || 'There was an error sending your message. Please try again.' }}
              </AlertDescription>
            </Alert>

            <Alert v-if="submitStatus === 'success'" variant="default" class="border-green-200 bg-green-50 text-green-800">
              <CheckCircle class="w-4 h-4" />
              <AlertTitle>Message Sent!</AlertTitle>
              <AlertDescription>
                Thank you for contacting us. We'll get back to you soon!
              </AlertDescription>
            </Alert>

            <Button class="mt-4" :disabled="isSubmitting" type="submit">
              <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
              {{ isSubmitting ? 'Sending...' : 'Send message' }}
            </Button>
          </form>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </div>
  </section>
</template>