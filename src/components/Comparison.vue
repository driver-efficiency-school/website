<script setup lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
  import { Badge } from '@/components/ui/badge'
  import { Check, X } from 'lucide-vue-next'

  interface ComparisonRow {
    feature: string
    efficiver: boolean | string
    obdApps: boolean | string
  }

  const comparisonData: ComparisonRow[] = [
    { feature: 'Hardware Required', efficiver: false, obdApps: true },
    { feature: 'Cost', efficiver: 'Free Forever', obdApps: '$50-150 dongle' },
    { feature: 'Works Offline', efficiver: true, obdApps: false },
    { feature: 'Privacy First', efficiver: true, obdApps: false },
    { feature: 'Background Tracking', efficiver: true, obdApps: true },
    { feature: 'Works with All Vehicles', efficiver: true, obdApps: false },
    { feature: 'EV Support', efficiver: true, obdApps: false },
    { feature: 'Setup Time', efficiver: '30 seconds', obdApps: '15+ minutes' },
    { feature: 'Battery Drain', efficiver: 'Minimal', obdApps: 'High' }
  ]
</script>

<template>
  <section id="comparison" class="container py-24 sm:py-32">
    <div class="text-center mb-12">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">Why Efficiver?</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">No $50 OBD Dongle Needed</h2>

      <p class="md:w-2/3 mx-auto text-xl text-muted-foreground">
        See how Efficiver compares to traditional OBD-based driving apps. Save money, protect your
        privacy, and get started in seconds.
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      <Card class="overflow-hidden">
        <CardHeader class="bg-muted/50">
          <div class="grid grid-cols-3 gap-4 text-center">
            <CardTitle class="text-lg">Feature</CardTitle>
            <CardTitle class="text-lg">
              <Badge variant="default" class="text-base px-4 py-1">Efficiver</Badge>
            </CardTitle>
            <CardTitle class="text-lg text-muted-foreground">OBD Apps</CardTitle>
          </div>
        </CardHeader>
        <CardContent class="p-0">
          <div
            v-for="(row, index) in comparisonData"
            :key="row.feature"
            :class="[
              'grid grid-cols-3 gap-4 p-4 text-center items-center',
              index % 2 === 0 ? 'bg-background' : 'bg-muted/30'
            ]"
          >
            <div class="text-left font-medium">{{ row.feature }}</div>
            <div class="flex justify-center">
              <template v-if="typeof row.efficiver === 'boolean'">
                <Check v-if="row.efficiver" class="h-6 w-6 text-green-500" />
                <X v-else class="h-6 w-6 text-red-500" />
              </template>
              <span v-else class="text-green-600 dark:text-green-400 font-semibold">{{
                row.efficiver
              }}</span>
            </div>
            <div class="flex justify-center">
              <template v-if="typeof row.obdApps === 'boolean'">
                <Check v-if="row.obdApps" class="h-6 w-6 text-green-500" />
                <X v-else class="h-6 w-6 text-red-500" />
              </template>
              <span v-else class="text-muted-foreground">{{ row.obdApps }}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
