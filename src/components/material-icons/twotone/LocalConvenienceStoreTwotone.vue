
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'LocalConvenienceStoreTwotone',
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
  <svg :class="cssClass" class="fn-icon"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 14h2v4h4V9h-3V6H7v3H4v9h4v-4h6zm-1-7h1v2h1V7h1v5h-1v-2h-2V7zM8 9h2V8H8V7h3v3H9v1h2v1H8V9z" opacity=".3"/><path d="M10 16h4v4h8V7h-3V4H5v3H2v13h8v-4zm-2 0v2H4V9h3V6h10v3h3v9h-4v-4H8v2zm3-5H9v-1h2V7H8v1h2v1H8v3h3zm4 1h1V7h-1v2h-1V7h-1v3h2z"/>
  </svg>
</template>
        