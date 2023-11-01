
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'VillaTwotone',
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
    <rect fill="none" height="24" width="24"/><path d="M5,9.37l9-3.46V12H9v7H5V9.37z M19,19h-3v-3h-2v3h-3v-5h8V19z" opacity=".3"/><path d="M19,10c-1.1,0-2,0.9-2,2h-1V3L3,8v13h18v-9C21,10.9,20.1,10,19,10z M5,9.37l9-3.46V12H9v7H5V9.37z M19,19h-3v-3h-2v3h-3v-5 h8V19z"/>
  </svg>
</template>
        