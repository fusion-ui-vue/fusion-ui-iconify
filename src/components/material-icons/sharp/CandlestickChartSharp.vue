
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'CandlestickChartSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><g><polygon points="9,4 7,4 7,6 5,6 5,18 7,18 7,20 9,20 9,18 11,18 11,6 9,6"/></g><g><polygon points="19,8 17,8 17,4 15,4 15,8 13,8 13,15 15,15 15,20 17,20 17,15 19,15"/></g></g></g>
  </svg>
</template>
        