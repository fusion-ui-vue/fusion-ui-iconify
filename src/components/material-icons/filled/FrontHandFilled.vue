
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'FrontHandFilled',
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
    <rect fill="none" height="24" width="24"/><path d="M19.75,8c-0.69,0-1.25,0.56-1.25,1.25V15H18c-1.65,0-3,1.35-3,3h-1c0-2.04,1.53-3.72,3.5-3.97l0-10.78 C17.5,2.56,16.94,2,16.25,2C15.56,2,15,2.56,15,3.25V11h-1V1.25C14,0.56,13.44,0,12.75,0S11.5,0.56,11.5,1.25V11h-1V2.75 c0-0.69-0.56-1.25-1.25-1.25S8,2.06,8,2.75V12H7V5.75C7,5.06,6.44,4.5,5.75,4.5S4.5,5.06,4.5,5.75v10c0,4.56,3.69,8.25,8.25,8.25 S21,20.31,21,15.75v-6.5C21,8.56,20.44,8,19.75,8z"/>
  </svg>
</template>
        