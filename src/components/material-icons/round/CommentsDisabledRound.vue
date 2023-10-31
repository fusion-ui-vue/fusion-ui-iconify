
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'CommentsDisabledRound',
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
    <rect fill="none" height="24" width="24"/><path d="M1.39,2.81C1,3.2,1,3.83,1.39,4.22L2,4.83V16c0,1.1,0.9,2,2,2h11.17l4.61,4.61c0.39,0.39,1.02,0.39,1.41,0 c0.39-0.39,0.39-1.02,0-1.41L2.81,2.81C2.42,2.42,1.78,2.42,1.39,2.81z M6.38,9.21L8.17,11H7c-0.55,0-1-0.45-1-1 C6,9.68,6.15,9.4,6.38,9.21z M7,14c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h2.17l2,2H7z M14.83,12l-1-1H17c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1h-5.17l-1-1H17c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H8.83l-4-4H20c1.1,0,2,0.9,2,2v15.17L16.83,14H17 c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H14.83z"/>
  </svg>
</template>
        