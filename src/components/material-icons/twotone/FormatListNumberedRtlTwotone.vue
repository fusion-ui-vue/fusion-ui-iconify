
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'FormatListNumberedRtlTwotone',
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
  <svg class="fn-icon"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" :style="{ fontSize, color }">
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 11h14v2H2zm16 6h2v.5h-1v1h1v.5h-2v1h3v-4h-3zm0-6h1.8L18 13.1v.9h3v-1h-1.8l1.8-2.1V10h-3zm2-3V4h-2v1h1v3zM2 17h14v2H2zM2 5h14v2H2z"/>
  </svg>
</template>
        