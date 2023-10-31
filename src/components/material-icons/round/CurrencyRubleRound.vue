
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'CurrencyRubleRound',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M8,21c0.55,0,1-0.45,1-1v-2h3c0.55,0,1-0.45,1-1s-0.45-1-1-1H9v-2h4.5c3.22,0,5.79-2.76,5.47-6.04 C18.7,5.1,16.14,3,13.26,3l-0.96,0H8C7.45,3,7,3.45,7,4v8H6c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h1v2H6c-0.55,0-1,0.45-1,1 s0.45,1,1,1h1v2C7,20.55,7.45,21,8,21z M13.5,12H9V5h4.5C15.43,5,17,6.57,17,8.5S15.43,12,13.5,12z"/></g>
  </svg>
</template>
        