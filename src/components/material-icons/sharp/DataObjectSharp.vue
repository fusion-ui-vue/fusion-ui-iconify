
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'DataObjectSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="4,10 2,10 2,14 4,14 4,20 10,20 10,18 6,18 6,12.5 4,12.5 4,11.5 6,11.5 6,6 10,6 10,4 4,4"/><polygon points="20,10 20,4 14,4 14,6 18,6 18,11.5 20,11.5 20,12.5 18,12.5 18,18 14,18 14,20 20,20 20,14 22,14 22,10"/></g></g>
  </svg>
</template>
        