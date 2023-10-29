
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'Man3Sharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="16,7 8,7 8,15 10,15 10,22 14,22 14,15 16,15"/><rect height="3.18" transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.3431 -7.3137)" width="3.18" x="10.41" y="2.41"/></g></g>
  </svg>
</template>
        