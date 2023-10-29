
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'SignalWifiStatusbar2BarTwotone',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M19.77,13.22L24,8.98C20.93,5.9,16.69,4,12,4C7.31,4,3.07,5.9,0,8.98l4.23,4.24 C6.22,11.23,8.97,10,12,10S17.78,11.23,19.77,13.22z" fill-opacity=".3"/><path d="M19.77,13.22C17.78,11.23,15.03,10,12,10s-5.78,1.23-7.77,3.22L12,21L19.77,13.22z"/></g></g>
  </svg>
</template>
        