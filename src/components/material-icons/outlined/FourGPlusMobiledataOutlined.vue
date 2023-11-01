
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'FourGPlusMobiledataOutlined',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M13,11v2h2v2h-4V9h6c0-1.1-0.9-2-2-2h-4C9.9,7,9,7.9,9,9v6c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2v-4H13z M24,11h-2V9h-2v2h-2 v2h2v2h2v-2h2V11z M7,7H5v5H3V7H1v7h4v3h2v-3h1v-2H7V7z"/></g></g>
  </svg>
</template>
        