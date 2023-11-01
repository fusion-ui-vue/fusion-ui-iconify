
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'FortSharp',
  props: svgIconProps,
  setup(props) {
    const fontSize = computed(() => {
      const _size = +props.size;
      if (isNaN(_size)) {
        const [_, size, unit] = /(d+)(w+)/.exec(props.size as string) || [];
        return unit === 'px' ? pxToRem(+size) : props.size;
      } else {
        return pxToRem(_size);
      }
    });

    return {
      fontSize,
      color: props.color
    };
  }
}
</script>

<template>
  <svg class="fn-icon-material fn-icon"
    :style="{ '--fn-icon-font-size': fontSize, '--fn-icon-color': $props.color }"
     xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"
  >
    <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="21,3 21,5 19,5 19,3 17,3 17,5 15,5 15,3 13,3 13,7 15,9 15,10 9,10 9,9 11,7 11,3 9,3 9,5 7,5 7,3 5,3 5,5 3,5 3,3 1,3 1,7 3,9 3,15 1,17 1,21 10,21 10,16 14,16 14,21 23,21 23,17 21,15 21,9 23,7 23,3"/></g></g>
  </svg>
</template>
        