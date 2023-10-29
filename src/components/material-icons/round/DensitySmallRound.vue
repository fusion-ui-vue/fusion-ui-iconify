
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'DensitySmallRound',
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
    <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M3,3L3,3c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4C3.45,2,3,2.45,3,3z"/><path d="M4,22h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,21.55,3.45,22,4,22z"/><path d="M4,16h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,15.55,3.45,16,4,16z"/><path d="M4,10h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4C3.45,8,3,8.45,3,9v0C3,9.55,3.45,10,4,10z"/></g></g>
  </svg>
</template>
        