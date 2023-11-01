
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'EditOffSharp',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M21.41,6.33l-3.75-3.75l-2.53,2.54l3.75,3.75L21.41,6.33z M1.39,4.22l7.32,7.32L3,17.25V21h3.75l5.71-5.71l7.32,7.32 l1.41-1.41L2.81,2.81L1.39,4.22z M17.81,9.94l-3.75-3.75l-2.52,2.52l3.75,3.75L17.81,9.94z"/></g></g>
  </svg>
</template>
        