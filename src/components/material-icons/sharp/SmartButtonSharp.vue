
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'SmartButtonSharp',
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
    <g><rect fill="none" height="24" width="24"/><path d="M22,17h-3l0-2h1V9H4v6h6v2H2V7h20V17z M14.5,19l1.09-2.41L18,15.5l-2.41-1.09L14.5,12l-1.09,2.41L11,15.5l2.41,1.09 L14.5,19z M17,14l0.62-1.38L19,12l-1.38-0.62L17,10l-0.62,1.38L15,12l1.38,0.62L17,14z"/></g>
  </svg>
</template>
        