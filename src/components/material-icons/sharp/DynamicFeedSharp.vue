
<script lang="ts">
import { computed } from 'vue';
import { pxToRem, svgIconProps } from '../../../utils';
import '../../../style/index.css';
export default {
  name: 'DynamicFeedSharp',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g/><g><polygon points="8,8 6,8 6,17 17,17 17,15 8,15"/><path d="M22,3H10v10h12V3z M20,11h-8V7h8V11z"/><polygon points="4,12 2,12 2,21 13,21 13,19 4,19"/></g></g><g display="none"><g display="inline"/><g display="inline"><polygon points="8,8 6,8 6,17 17,17 17,15 8,15"/><path d="M22,3H10v10h12V3z M20,11h-8V7h8V11z"/><polygon points="4,12 2,12 2,21 13,21 13,19 4,19"/></g></g>
  </svg>
</template>
        