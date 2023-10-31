
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'TornadoRound',
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
    <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M20.11,8l1.16-2c0.77-1.33-0.19-3-1.73-3H4.47c-1.54,0-2.5,1.67-1.73,3l1.16,2H20.11z"/></g><g><path d="M7.95,15l2.32,4.01c0.77,1.33,2.69,1.33,3.46,0L16.05,15H7.95z"/></g><g><polygon points="18.95,10 5.05,10 6.79,13 17.21,13"/></g></g></g>
  </svg>
</template>
        