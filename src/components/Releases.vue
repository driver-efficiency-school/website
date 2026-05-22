<script setup lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
  import { Badge } from '@/components/ui/badge'
  import { Button } from '@/components/ui/button'
  import { ExternalLinkIcon, BrainCircuit, Leaf, Banknote, Plus, Minus } from 'lucide-vue-next'
  import { config } from '@/lib/config'
</script>

<template>
  <div class="container mx-auto px-6 sm:px-8 py-12 sm:py-16 max-w-4xl">
    <div class="text-center mb-12">
      <Badge variant="default" class="mb-4">CURRENT — v1.1</Badge>
      <h1 class="text-3xl md:text-4xl font-bold mb-3">Release notes</h1>
      <p class="text-lg text-muted-foreground">
        Every Efficiver release, in one place. Older entries are collapsed — tap to expand.
      </p>
    </div>

    <!-- v1.1 -->
    <Card class="mb-6 border-2 border-primary/30 shadow-md">
      <CardHeader>
        <div class="flex justify-between items-baseline gap-4">
          <CardTitle class="text-2xl">v1.1 — Three flagship features</CardTitle>
          <span class="text-sm text-muted-foreground whitespace-nowrap">May 2026</span>
        </div>
      </CardHeader>
      <CardContent class="space-y-6 text-base">
        <p class="text-muted-foreground">
          v1.1 brings three new flagship features and a meaningful polish pass across the app — now
          available on the App Store.
        </p>

        <div class="flex gap-4 items-start">
          <div class="bg-green-500/10 p-2 rounded-full ring-4 ring-green-500/5 shrink-0">
            <BrainCircuit class="size-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-1">Smart Detection</h3>
            <p class="text-muted-foreground">
              Efficiver now learns your car on its own. No more rev-range setup — tap
              <em>Calibrate Smart Detection</em> on first launch (about a minute) and acceleration
              and braking are picked up automatically. Everything runs on your iPhone; nothing
              leaves your device.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <div class="bg-blue-500/10 p-2 rounded-full ring-4 ring-blue-500/5 shrink-0">
            <Leaf class="size-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-1">Eco Route</h3>
            <p class="text-muted-foreground">
              Plan an eco-friendly route inside Efficiver and open it in Apple or Google Maps for
              turn-by-turn directions. Efficiver quietly logs the drive for you and saves it when
              you arrive — no need to keep the app open. Turn it on in
              <em>Settings → Driving Preferences → Auto Track Drive</em>.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <div class="bg-orange-500/10 p-2 rounded-full ring-4 ring-orange-500/5 shrink-0">
            <Banknote class="size-5 text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-1">Wallet Watch</h3>
            <p class="text-muted-foreground">
              See how much money and CO₂ you saved on every drive, in your local currency (₹, $, £,
              and more). Set your fuel price and baseline consumption in
              <em>Settings → Wallet Watch</em>.
            </p>
          </div>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-1">Faster and smoother</h3>
          <p class="text-muted-foreground">
            The app launches quicker, scrolls more smoothly, and feels more responsive throughout —
            especially on long drives.
          </p>
        </div>

        <div>
          <h3 class="font-semibold text-lg mb-2">Smaller improvements</h3>
          <ul class="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Rename a session straight from the in-drive top bar.</li>
            <li>Add notes to any session, up to 255 characters.</li>
            <li>
              Weather widget shows live vs cached data, counts down to the next refresh, and flags
              failed refresh attempts.
            </li>
            <li>Refreshed launch animation and a clearer banner when a drive auto-continues.</li>
          </ul>
        </div>
      </CardContent>
    </Card>

    <!-- v1.0.1 -->
    <details class="mb-4 group">
      <summary class="cursor-pointer">
        <Card class="hover:border-primary/40 transition-colors">
          <CardHeader>
            <div class="flex justify-between items-center gap-4">
              <CardTitle class="text-xl">v1.0.1 — Notifications, privacy & app size</CardTitle>
              <div class="flex items-center gap-3">
                <span class="text-sm text-muted-foreground whitespace-nowrap">April 2026</span>
                <Plus class="size-5 text-muted-foreground group-open:hidden" />
                <Minus class="size-5 text-primary hidden group-open:inline" />
              </div>
            </div>
          </CardHeader>
        </Card>
      </summary>
      <Card class="mt-2 ml-2 border-l-2 border-l-primary/30">
        <CardContent class="pt-6 space-y-4">
          <div>
            <h3 class="font-semibold mb-1">🔔 Notifications</h3>
            <p class="text-muted-foreground">
              Auto-detection alerts (drive started/stopped) no longer pile up in Notification Center
              across multiple drives — newer alerts now replace older ones of the same type.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-1">🛡️ Privacy & permissions</h3>
            <p class="text-muted-foreground">
              Clearer permission prompt for motion sensors, explaining how Efficiver detects when
              your engine is running.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-1">📦 App size</h3>
            <p class="text-muted-foreground">
              Optimized internal code for a smaller, more efficient app.
            </p>
          </div>
        </CardContent>
      </Card>
    </details>

    <!-- v1.0 -->
    <details class="mb-4 group">
      <summary class="cursor-pointer">
        <Card class="hover:border-primary/40 transition-colors">
          <CardHeader>
            <div class="flex justify-between items-center gap-4">
              <CardTitle class="text-xl">v1.0 — Initial release</CardTitle>
              <div class="flex items-center gap-3">
                <span class="text-sm text-muted-foreground whitespace-nowrap">Q1 2026</span>
                <Plus class="size-5 text-muted-foreground group-open:hidden" />
                <Minus class="size-5 text-primary hidden group-open:inline" />
              </div>
            </div>
          </CardHeader>
        </Card>
      </summary>
      <Card class="mt-2 ml-2 border-l-2 border-l-primary/30">
        <CardContent class="pt-6">
          <p class="text-muted-foreground">
            The first public release of Efficiver — the free, offline eco-driving coach for iPhone.
            Calibrate for petrol, diesel or EV; track acceleration, braking, cornering and idle time
            in real time; save fuel and CO₂ with personalised coaching, all entirely on your device.
          </p>
        </CardContent>
      </Card>
    </details>

    <div class="mt-12 text-center">
      <Button as-child variant="default">
        <a :href="config.app.ios" target="_blank" rel="noopener">
          Download the latest version
          <ExternalLinkIcon class="size-4 ml-2" />
        </a>
      </Button>
    </div>
  </div>
</template>

<style scoped>
  summary {
    list-style: none;
  }
  summary::-webkit-details-marker {
    display: none;
  }
</style>
