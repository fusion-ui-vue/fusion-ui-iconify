
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'BungalowTwotone',
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
    <rect fill="none" height="24" width="24"/><path d="M12,6.78l-3,4.8V19h2v-3h2v3h2v-7.42L12,6.78z M13,14h-2v-2h2V14z" opacity=".3"/><path d="M13,14h-2v-2h2V14z M18.1,16.56L17,14.79V21H7v-6.2l-1.1,1.76L4.2,15.5L12,3l7.8,12.5L18.1,16.56z M15,11.59l-3-4.8l-3,4.8 V19h2v-3h2v3h2V11.59z"/>
  </svg>
</template>
        