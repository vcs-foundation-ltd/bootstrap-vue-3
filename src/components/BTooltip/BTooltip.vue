<template>
  <teleport to="body">
    <div v-if="showTooltip" :id="id" ref="tooltip" class="tooltip" role="tooltip" :class="classes">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import {computed, onMounted, PropType, ref} from 'vue'
import {createPopper, Placement} from '@popperjs/core'
import type {ColorVariant} from 'src/types'
import useEventListener from '../../composables/useEventListener'

const props = defineProps({
  target: {type: String, required: true},
  title: {type: String},
  placement: {type: String as PropType<Placement>, default: 'top'},
  fallbackPlacement: {type: String, default: 'flip'},
  triggers: {type: String, default: 'hover click'},
  noFade: {type: Boolean, default: false},
  delay: {type: [Number, Object], default: 50},
  offset: {type: Number, default: 0},
  container: {type: String, default: null},
  boundary: {type: String, default: 'scrollParent'},
  bounaryPadding: {type: Number, default: 5},
  noninteractive: {type: Boolean, default: false},
  variant: {type: String as PropType<ColorVariant>},
  customClass: {type: String},
  id: {type: String},
})

const popperInstance = ref()
const tooltip = ref<HTMLElement>()
const target = ref()
const showTooltip = ref(false)

const classes = computed(() => [
  `bs-tooltip-${props.placement}`,
  props.customClass,
  {
    show: showTooltip.value,
    fade: !props.noFade,
  },
])

onMounted(() => {
  target.value = document.getElementById(props.target)

  if (target.value) {
    popperInstance.value = createPopper(target.value, tooltip.value as HTMLElement, {
      placement: props.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: props.offset,
          },
        },
      ],
    })
  }
})

function show() {
  tooltip.value?.setAttribute('data-show', '')
  popperInstance.value.update()
  showTooltip.value = true
}

useEventListener(target, 'focus', show)
useEventListener(target, 'mouseenter', show)

useEventListener(target, 'blur', () => {
  tooltip.value?.removeAttribute('data-show')
  showTooltip.value = false
})

useEventListener(target, 'mouseleave', () => {
  tooltip.value?.removeAttribute('data-show')
  showTooltip.value = false
})
</script>
