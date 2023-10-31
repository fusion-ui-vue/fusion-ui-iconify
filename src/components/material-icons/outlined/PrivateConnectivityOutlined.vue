
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'PrivateConnectivityOutlined',
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
    <rect fill="none" height="24" width="24"/><path d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7z M5.07,13c0.49,3.39,3.4,6,6.93,6c3.53,0,6.44-2.61,6.93-6 L22,13v-2l-3.07,0c-0.49-3.39-3.4-6-6.93-6l0,0c-3.53,0-6.44,2.61-6.93,6c0,0-3.07,0-3.07,0v2L5.07,13z M14,10.5V9.61 c0-1-0.68-1.92-1.66-2.08C11.08,7.32,10,8.29,10,9.5v1c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-3 C15,10.95,14.55,10.5,14,10.5z M12,13.75c-0.41,0-0.75-0.34-0.75-0.75c0-0.41,0.34-0.75,0.75-0.75s0.75,0.34,0.75,0.75 C12.75,13.41,12.41,13.75,12,13.75z M13,10.5h-2v-1c0-0.55,0.45-1,1-1s1,0.45,1,1V10.5z"/>
  </svg>
</template>
        