
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'MpSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M21,3H3v18h18V3z M6,9h6.5v6H11v-4.5h-1v3H8.5v-3h-1V15H6V9z M15,15h-1.5V9H18v4.5h-3V15z M15,12h1.5v-1.5H15V12z"/></g></g>
  </svg>
</template>
        