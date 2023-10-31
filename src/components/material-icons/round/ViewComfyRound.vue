
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'ViewComfyRound',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M2,5v5c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1H3C2.45,4,2,4.45,2,5z M11,20h10c0.55,0,1-0.45,1-1v-5 c0-0.55-0.45-1-1-1H11c-0.55,0-1,0.45-1,1v5C10,19.55,10.45,20,11,20z M3,20h4c0.55,0,1-0.45,1-1v-5c0-0.55-0.45-1-1-1H3 c-0.55,0-1,0.45-1,1v5C2,19.55,2.45,20,3,20z"/></g>
  </svg>
</template>
        