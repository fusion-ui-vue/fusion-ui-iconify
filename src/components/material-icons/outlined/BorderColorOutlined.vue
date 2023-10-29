
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'BorderColorOutlined',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M16.81,8.94l-3.75-3.75L4,14.25V18h3.75L16.81,8.94z M6,16v-0.92l7.06-7.06l0.92,0.92L6.92,16H6z"/><path d="M19.71,6.04c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34C17.17,2.09,16.92,2,16.66,2c-0.25,0-0.51,0.1-0.7,0.29l-1.83,1.83 l3.75,3.75L19.71,6.04z"/><rect height="4" width="20" x="2" y="20"/></g></g>
  </svg>
</template>
        