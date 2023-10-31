
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'DoorBackTwotone',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M7,19h10V5H7V19z M9,11h2v2H9V11z" opacity=".3"/><path d="M19,19V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v14H3v2h18v-2H19z M17,19H7V5h10V19z"/><rect height="2" width="2" x="9" y="11"/></g></g>
  </svg>
</template>
        