
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'ArrowCircleRightTwotone',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,12c0-4.41,3.59-8,8-8s8,3.59,8,8s-3.59,8-8,8S4,16.41,4,12 M12,11l-4,0v2l4,0v3l4-4l-4-4V11z" opacity=".3"/><path d="M4,12c0-4.41,3.59-8,8-8s8,3.59,8,8s-3.59,8-8,8S4,16.41,4,12 M2,12c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10 c0-5.52-4.48-10-10-10C6.48,2,2,6.48,2,12L2,12z M12,11l-4,0v2l4,0v3l4-4l-4-4V11z"/></g></g>
  </svg>
</template>
        