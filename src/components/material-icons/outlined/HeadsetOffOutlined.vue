
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'HeadsetOffOutlined',
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
    <g><rect fill="none" height="24" width="24" y="0"/></g><g><g><path d="M12,4c3.87,0,7,3.13,7,7v1h-4v0.17L16.83,14H19v2.17l2,2V11c0-4.97-4.03-9-9-9C9.98,2,8.12,2.67,6.62,3.8l1.43,1.43 C9.17,4.45,10.53,4,12,4z"/><path d="M2.1,2.1L0.69,3.51l3.33,3.33C3.37,8.09,3,9.5,3,11v7c0,1.1,0.9,2,2,2h4v-8H5v-1c0-0.94,0.19-1.83,0.52-2.65L15,17.83V20 h2.17l1,1H12v2h7c0.34,0,0.65-0.09,0.93-0.24l0.55,0.55l1.41-1.41L2.1,2.1z M7,14v4H5v-4H7z"/></g></g>
  </svg>
</template>
        