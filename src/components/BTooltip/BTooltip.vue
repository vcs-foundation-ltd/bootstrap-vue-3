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
import type { Tooltip } from "bootstrap";
import useEventListener from '../../composables/useEventListener'

const showEventDictionary = {
  hover: "mouseenter",
  focus: "focus",
};

const hideEventDictionary = {
  hover: "mouseleave",
  focus: "blur",
};

const props = defineProps({
  target: {type: String, required: true},
  title: {type: String},
  placement: {type: String as PropType<Placement>, default: 'top'},
  fallbackPlacement: {type: String, default: 'flip'},
  triggers: {type: String as PropType<Tooltip.Options["trigger"]>, default: 'hover click'},
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

const showEvents = computed(() => {
  return props.triggers
    .split(" ")
    .map(
      (trigger) =>
        showEventDictionary[trigger as keyof typeof showEventDictionary]
    )
    .filter(Boolean);
});

const hideEvents = computed(() => {
  return props.triggers
    .split(" ")
    .map(
      (trigger) =>
        hideEventDictionary[trigger as keyof typeof showEventDictionary]
    )
    .filter(Boolean);
});

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
  const _target = document.getElementById(props.target);
  if (_target) {
    target.value = _target;

    popperInstance.value = createPopper(
      target.value,
      tooltip.value as HTMLElement,
      {
        placement: props.placement,
      }
    );

    if (props.triggers !== "manual") {
      showEvents.value.forEach((event) => {
        useEventListener(target.value, event, () => {
          tooltip.value?.classList.add("show");
          popperInstance.value.update();
        });
      });

      hideEvents.value.forEach((event) => {
        useEventListener(target.value, event, () => {
          tooltip.value?.classList.remove("show");
        });
      });

      if (props.triggers.includes("click")) {
        useEventListener(target.value, "click", () => {
          tooltip.value?.classList.toggle("show");
          popperInstance.value.update();
        });
      }
    }
  }
});
</script>
