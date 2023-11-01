
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'Rotate90DegreesCwOutlined',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M2,13c0,4.97,4.03,9,9,9c1.76,0,3.4-0.51,4.79-1.38l-1.46-1.46C13.34,19.69,12.2,20,11,20c-3.86,0-7-3.14-7-7s3.14-7,7-7 h0.17L9.59,7.59L11,9l4-4l-4-4L9.58,2.41L11.17,4H11C6.03,4,2,8.03,2,13z M11,13l6,6l6-6l-6-6L11,13z M17,16.17L13.83,13L17,9.83 L20.17,13L17,16.17z"/></g></g>
  </svg>
</template>
        