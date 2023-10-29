
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'AccessTimeFilledRound',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M16,16 c-0.39,0.39-1.02,0.39-1.41,0l-3.29-3.29C11.11,12.52,11,12.27,11,12V8c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v3.59l3,3 C16.39,14.98,16.39,15.61,16,16z"/></g>
  </svg>
</template>
        