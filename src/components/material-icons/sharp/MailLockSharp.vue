
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'MailLockSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M22,9.97V4H2.01L2,20h14v-5.03c0-2.76,2.24-5,5-5H22z M20,8l-8,5L4,8V6l8,5l8-5V8z"/></g><g><path d="M23,15v-0.89c0-1-0.68-1.92-1.66-2.08C20.08,11.82,19,12.79,19,14v1h-1v5h6v-5H23z M22,15h-2v-1c0-0.55,0.45-1,1-1 s1,0.45,1,1V15z"/></g></g></g>
  </svg>
</template>
        