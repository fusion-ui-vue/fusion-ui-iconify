
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'HexagonRound',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M16.05,3H7.95C7.24,3,6.58,3.38,6.22,4l-4.04,7c-0.36,0.62-0.36,1.38,0,2l4.04,7c0.36,0.62,1.02,1,1.73,1h8.09 c0.71,0,1.37-0.38,1.73-1l4.04-7c0.36-0.62,0.36-1.38,0-2l-4.04-7C17.42,3.38,16.76,3,16.05,3z"/></g>
  </svg>
</template>
        