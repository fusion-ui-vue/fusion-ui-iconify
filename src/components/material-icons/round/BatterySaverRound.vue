
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'BatterySaverRound',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M16,4h-2V3c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v1H8C7.45,4,7,4.45,7,5v16c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V5 C17,4.45,16.55,4,16,4z M14,14h-1v1c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1v-1h-1c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h1v-1 c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v1h1c0.55,0,1,0.45,1,1v0C15,13.55,14.55,14,14,14z"/></g></g>
  </svg>
</template>
        