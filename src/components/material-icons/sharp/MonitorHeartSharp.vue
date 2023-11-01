
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'MonitorHeartSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M15.11,12.45L14,10.24l-3.11,6.21C10.73,16.79,10.38,17,10,17s-0.73-0.21-0.89-0.55L7.38,13H2v7h20v-7h-6 C15.62,13,15.27,12.79,15.11,12.45z"/><path d="M22,4H2v7h6c0.38,0,0.73,0.21,0.89,0.55L10,13.76l3.11-6.21c0.37-0.74,1.42-0.74,1.79,0L16.62,11H22V4z"/></g></g>
  </svg>
</template>
        