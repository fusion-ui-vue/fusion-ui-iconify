
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'SortByAlphaTwotone',
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
     xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"
  >
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.94 4.66L12.58 2.3l-2.36 2.36zm-4.55 13.07h1.84L7.74 6.27H6.1L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45zm-5.42-4.09l1.94-5.18 1.94 5.18H4.97zm7.61 8.06l2.33-2.33h-4.66zm9.08-14.16V6.28h-8.3v1.6h5.88l-5.92 8.56v1.29h8.53v-1.59h-6.12z"/>
  </svg>
</template>
        