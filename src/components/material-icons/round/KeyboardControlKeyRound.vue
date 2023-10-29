
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'KeyboardControlKeyRound',
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
    <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><path d="M5.71,12.71L5.71,12.71c0.39,0.39,1.02,0.39,1.41,0L12,7.83l4.88,4.88c0.39,0.39,1.02,0.39,1.41,0v0 c0.39-0.39,0.39-1.02,0-1.41l-5.59-5.59c-0.39-0.39-1.02-0.39-1.41,0l-5.59,5.59C5.32,11.68,5.32,12.32,5.71,12.71z"/></g>
  </svg>
</template>
        