<script setup lang="ts">
  import { type HTMLAttributes, computed } from 'vue'
  import { DialogDescription, type DialogDescriptionProps } from 'radix-vue'
  import { cn } from '@/lib/utils'

  const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes['class'] }>()

  const delegatedProps = computed(() => {
    const { class: _class, ...delegated } = props
    void _class

    return delegated
  })
</script>

<template>
  <DialogDescription
    :class="cn('text-sm text-muted-foreground', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogDescription>
</template>
