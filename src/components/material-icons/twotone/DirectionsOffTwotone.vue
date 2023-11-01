
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'DirectionsOffTwotone',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="m21.71 11.29-9-9a.996.996 0 00-1.41 0L8.21 5.38l1.41 1.41L12 4.42 19.58 12l-2.38 2.38 1.41 1.41 3.09-3.09c.4-.37.4-1 .01-1.41z"/><polygon points="13,7.5 13,10.17 15.17,12.34 16.5,11"/><path d="m1.39 4.22 3.99 3.99-3.09 3.09a.996.996 0 000 1.41l9 9c.39.39 1.02.39 1.41 0l3.09-3.09 3.99 3.99 1.41-1.41L2.81 2.81 1.39 4.22zm6.64 6.63c-.01.05-.04.1-.04.15v4h2v-2.18l4.38 4.38L12 19.58 4.42 12 6.8 9.62l1.23 1.23z"/></g></g>
  </svg>
</template>
        