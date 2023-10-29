
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'NorthRound',
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
    <rect fill="none" height="24" width="24"/><path d="M5.71,9.7L5.71,9.7c0.39,0.39,1.02,0.39,1.41,0L11,5.83V21c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V5.83l3.88,3.88 c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L12.7,2.7c-0.39-0.39-1.02-0.39-1.41,0L5.71,8.29 C5.32,8.68,5.32,9.32,5.71,9.7z"/>
  </svg>
</template>
        