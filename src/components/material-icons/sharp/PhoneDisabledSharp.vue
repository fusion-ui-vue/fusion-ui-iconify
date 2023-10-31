
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'PhoneDisabledSharp',
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
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fill: 'currentcolor',
        flexShrink: 0,
        transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
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
    <rect fill="none" height="24" width="24"/><g><g><path d="M14.52,17.35C11.39,19.83,7.36,21.22,3,20.97v-5.51l5.27-0.61l2.52,2.52c0.81-0.41,1.58-0.9,2.3-1.45 L1.39,4.22l1.42-1.41L21.19,21.2l-1.41,1.41L14.52,17.35z M15.91,13.11c0.56-0.73,1.05-1.51,1.47-2.33l-2.53-2.53L15.46,3h5.51 c0.25,4.37-1.15,8.4-3.63,11.54L15.91,13.11z"/></g></g>
  </svg>
</template>
        