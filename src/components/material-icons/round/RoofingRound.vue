
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'RoofingRound',
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
    <rect fill="none" height="24" width="24"/><path d="M13,18h-2v-2h2V18z M9,15v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-4c0-0.55-0.45-1-1-1h-4C9.45,14,9,14.45,9,15z M19,9.3 L19,9.3V5c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v1.6v0l-3.33-3c-0.38-0.34-0.96-0.34-1.34,0l-8.36,7.53 C2.63,11.43,2.84,12,3.3,12h1.31c0.25,0,0.49-0.09,0.67-0.26L12,5.69l6.71,6.05C18.9,11.91,19.14,12,19.38,12h1.31 c0.46,0,0.68-0.57,0.33-0.87L19,9.3z"/>
  </svg>
</template>
        