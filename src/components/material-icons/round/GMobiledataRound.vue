
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'GMobiledataRound',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,12L12,12c0,0.55,0.45,1,1,1h1v2H9V9h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H9C7.9,7,7,7.9,7,9v6c0,1.1,0.9,2,2,2h5 c1.1,0,2-0.9,2-2v-3c0-0.55-0.45-1-1-1h-2C12.45,11,12,11.45,12,12z"/></g></g>
  </svg>
</template>
        