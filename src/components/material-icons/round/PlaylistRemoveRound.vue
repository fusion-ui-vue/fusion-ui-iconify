
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'PlaylistRemoveRound',
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
    <g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><path d="M13.71,21.3c0.39,0.39,1.02,0.39,1.41,0L17,19.41l1.89,1.89c0.39,0.39,1.02,0.39,1.41,0s0.39-1.02,0-1.41L18.41,18 l1.89-1.89c0.39-0.39,0.39-1.02,0-1.41s-1.02-0.39-1.41,0L17,16.59l-1.89-1.89c-0.39-0.39-1.02-0.39-1.41,0s-0.39,1.02,0,1.41 L15.59,18l-1.89,1.89C13.32,20.27,13.32,20.91,13.71,21.3z M14,11c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1s0.45,1,1,1h9 C13.55,12,14,11.55,14,11z M14,7c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7s0.45,1,1,1h9C13.55,8,14,7.55,14,7z M3,15 c0,0.55,0.45,1,1,1h5c0.55,0,1-0.45,1-1s-0.45-1-1-1H4C3.45,14,3,14.45,3,15z"/></g>
  </svg>
</template>
        