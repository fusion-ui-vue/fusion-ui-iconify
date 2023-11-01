
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'HPlusMobiledataRound',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,11H6V8c0-0.55-0.45-1-1-1h0C4.45,7,4,7.45,4,8v8c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3h6v3c0,0.55,0.45,1,1,1h0 c0.55,0,1-0.45,1-1V8c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1V11z M21,11h-1v-1c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v1h-1 c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h1v1c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-1h1c0.55,0,1-0.45,1-1v0 C22,11.45,21.55,11,21,11z"/></g></g>
  </svg>
</template>
        