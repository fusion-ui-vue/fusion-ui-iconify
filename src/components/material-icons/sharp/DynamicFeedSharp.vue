
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'DynamicFeedSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g/><g><polygon points="8,8 6,8 6,17 17,17 17,15 8,15"/><path d="M22,3H10v10h12V3z M20,11h-8V7h8V11z"/><polygon points="4,12 2,12 2,21 13,21 13,19 4,19"/></g></g><g display="none"><g display="inline"/><g display="inline"><polygon points="8,8 6,8 6,17 17,17 17,15 8,15"/><path d="M22,3H10v10h12V3z M20,11h-8V7h8V11z"/><polygon points="4,12 2,12 2,21 13,21 13,19 4,19"/></g></g>
  </svg>
</template>
        