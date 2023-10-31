
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'InstallMobileRound',
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
    <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><path d="M18.71,13.29l3.59-3.59c0.39-0.39,0.39-1.02,0-1.41l0,0c-0.39-0.39-1.02-0.39-1.41,0L19,10.17V4c0-0.55-0.45-1-1-1h0 c-0.55,0-1,0.45-1,1v6.17l-1.89-1.88c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41l3.59,3.59 C17.69,13.68,18.32,13.68,18.71,13.29z"/><path d="M17,18H7V6h7V1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2v-5h-2V18z"/></g>
  </svg>
</template>
        