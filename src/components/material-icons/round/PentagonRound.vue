
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'PentagonRound',
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
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M2.47,10.42l3.07,9.22C5.82,20.45,6.58,21,7.44,21h9.12c0.86,0,1.63-0.55,1.9-1.37l3.07-9.22 c0.28-0.84-0.03-1.76-0.75-2.27L13.15,2.8c-0.69-0.48-1.61-0.48-2.29,0L3.22,8.14C2.5,8.65,2.19,9.58,2.47,10.42z"/></g>
  </svg>
</template>
        