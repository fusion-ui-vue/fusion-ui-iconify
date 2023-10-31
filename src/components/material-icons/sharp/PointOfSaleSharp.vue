
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'PointOfSaleSharp',
  props: {
    size: {
      type: [Number, String],
      default: 'inherit'
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    const cssClass = computed(() => {
      let fontSize;
      const _size = +props.size;
      if (isNaN(_size)) {
        const [_, size, unit] = /(d+)(w+)/.exec(props.size) || [];
        fontSize = unit === 'px' ? pxToRem(+size) : props.size;
      } else {
        fontSize = pxToRem(_size);
      }

      return css({
        fontSize,
        color: props.color
      });
    });

    return {
      cssClass
    };
  }
}
</script>

<template>
  <svg :class="cssClass" class="fn-icon"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
    <g><rect fill="none" height="24" width="24"/><path d="M19,2H5c0,0,0,0,0,0v6c0,0,0,0,0,0h14c0,0,0,0,0,0L19,2C19,2,19,2,19,2z M17,6H7V4h10V6z M22,22H2c0,0,0,0,0,0v-3h20L22,22 C22,22,22,22,22,22z M18,9H6c0,0,0,0,0,0l-4,9h20L18,9z M10,16H8v-1h2V16z M10,14H8v-1h2V14z M10,12H8v-1h2V12z M13,16h-2v-1h2V16z M13,14h-2v-1h2V14z M13,12h-2v-1h2V12z M16,16h-2v-1h2V16z M16,14h-2v-1h2V14z M16,12h-2v-1h2V12z"/></g>
  </svg>
</template>
        