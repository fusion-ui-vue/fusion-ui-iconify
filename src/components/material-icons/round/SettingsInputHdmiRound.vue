
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'SettingsInputHdmiRound',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M18,7V4c0-1.1-0.9-2-2-2H8C6.9,2,6,2.9,6,4v3C5.45,7,5,7.45,5,8v4.7c0,0.2,0.06,0.39,0.17,0.55L8,19v2c0,0.55,0.45,1,1,1h6 c0.55,0,1-0.45,1-1v-2l2.83-5.75C18.94,13.09,19,12.89,19,12.7V8C19,7.45,18.55,7,18,7z M16,7h-2V5.5C14,5.22,13.78,5,13.5,5 S13,5.22,13,5.5V7h-2V5.5C11,5.22,10.78,5,10.5,5S10,5.22,10,5.5V7H8V4h8V7z"/></g>
  </svg>
</template>
        