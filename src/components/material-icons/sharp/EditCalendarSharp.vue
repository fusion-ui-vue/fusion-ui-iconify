
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'EditCalendarSharp',
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
    <rect fill="none" height="24" width="24"/><g><path d="M12,22H3V4h3V2h2v2h8V2h2v2h3v8h-2v-2H5v10h7V22z M22.13,16.99l1.41-1.41l-2.12-2.12l-1.41,1.41L22.13,16.99z M21.42,17.7 l-5.3,5.3H14v-2.12l5.3-5.3L21.42,17.7z"/></g>
  </svg>
</template>
        