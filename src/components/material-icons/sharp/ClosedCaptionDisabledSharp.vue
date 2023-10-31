
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'ClosedCaptionDisabledSharp',
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
    <rect fill="none" height="24" width="24"/><path d="M6.83,4H21v14.17L17.83,15H18v-2h-1.5v0.5h-0.17l-1.83-1.83V10.5h2V11H18V9h-5v1.17L6.83,4z M19.78,22.61L17.17,20H3V5.83 L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M11,13.83L10.17,13H9.5v0.5h-2v-3h0.17L6.17,9H6v6h5V13.83z"/>
  </svg>
</template>
        