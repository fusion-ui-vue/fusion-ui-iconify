
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'StarBorderPurple500Filled',
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
    <g><g><path d="M0,0h24v24H0V0z" fill="none"/></g></g><g><path d="M12,8.89L12.94,12h2.82l-2.27,1.62l0.93,3.01L12,14.79l-2.42,1.84l0.93-3.01L8.24,12h2.82L12,8.89 M12,2l-2.42,8H2 l6.17,4.41L5.83,22L12,17.31L18.18,22l-2.35-7.59L22,10h-7.58L12,2L12,2z"/></g>
  </svg>
</template>
        