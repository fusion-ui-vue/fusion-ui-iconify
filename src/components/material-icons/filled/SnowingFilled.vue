
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'SnowingFilled',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M6 12.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM4.75 6a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm12 8a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm0-8a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm-9 12a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm0-8a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm3 4a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm0-8a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm3 12a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zm0-8a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z"/></g>
  </svg>
</template>
        