
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'QuickreplySharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><g><polygon points="22,2 2,2 2,22 6,18 15,18 15,10 22,10"/></g><g><polygon points="22.5,16 20.3,16 22,12 17,12 17,18 19,18 19,23"/></g></g></g>
  </svg>
</template>
        