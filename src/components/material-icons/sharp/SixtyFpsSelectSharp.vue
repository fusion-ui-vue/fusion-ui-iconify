
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'SixtyFpsSelectSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M18,6v6h-3V6H18z M20,4h-7v10h7V4z M11,6V4H4v10h7V8H6V6H11z M9,10v2H6v-2H9z M5,22H3v-5h2V22z M9,22H7v-5h2V22z M13,22 h-2v-5h2V22z M21,22h-6v-5h6V22z"/></g></g>
  </svg>
</template>
        