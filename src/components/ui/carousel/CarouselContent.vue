<script setup lang="ts">
  import { useCarousel } from './useCarousel'
  import type { WithClassAsProps } from './interface'
  import { cn } from '@/lib/utils'

  defineOptions({
    inheritAttrs: false
  })

  const props = defineProps<WithClassAsProps>()

  const { carouselRef, orientation } = useCarousel()

  // vue-tsc 3 doesn't treat template ref bindings (ref="carouselRef")
  // as usage of the script-local variable. Expose it so the unused-
  // locals check passes and parents can still reach the embla node.
  defineExpose({ carouselRef })
</script>

<template>
  <div ref="carouselRef" class="overflow-hidden">
    <div
      :class="cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', props.class)"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </div>
</template>
