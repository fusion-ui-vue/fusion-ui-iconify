
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'DonutLargeFilled',
  props: {
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    const fontSize = computed(() => {
      const _size = +props.size;
      if (isNaN(_size)) {
        const [_, size, unit] = /(d+)(w+)/.exec(props.size) || [];
        return unit === 'px' ? pxToRem(+size) : props.size;
      } else {
        return pxToRem(_size);
      }
    });

    return {
      fontSize,
      color: props.color
    }
  }
}
</script>

<template>
  <svg class="fn-icon"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" :style="{ fontSize, color }">
    <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M11,5.08V2C6,2.5,2,6.81,2,12s4,9.5,9,10v-3.08c-3-0.48-6-3.4-6-6.92S8,5.56,11,5.08z M18.97,11H22c-0.47-5-4-8.53-9-9 v3.08C16,5.51,18.54,8,18.97,11z M13,18.92V22c5-0.47,8.53-4,9-9h-3.03C18.54,16,16,18.49,13,18.92z"/></g></g></g>
  </svg>
</template>
        