
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'NearbyErrorOutlined',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,7.57l4.42,4.42L12,16.41l-4.42-4.42L12,7.57z M12,19.19l-7.2-7.2l7.2-7.2l6,6V7.16l-4.58-4.58 c-0.78-0.78-2.05-0.78-2.83,0l-8.01,8c-0.78,0.78-0.78,2.05,0,2.83l8.01,8c0.78,0.78,2.05,0.78,2.83,0L18,16.82v-3.63L12,19.19z M20,20h2v2h-2V20z M22,10h-2v8h2V10"/></g></g>
  </svg>
</template>
        