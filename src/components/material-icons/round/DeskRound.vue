
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'DeskRound',
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
    <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><path d="M2,7v10c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V8h10v9c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-1h4v1c0,0.55,0.45,1,1,1h0 c0.55,0,1-0.45,1-1V7c0-0.55-0.45-1-1-1H3C2.45,6,2,6.45,2,7z M20,8v2h-4V8H20z M16,14v-2h4v2H16z"/></g>
  </svg>
</template>
        