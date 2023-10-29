
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'FormatIndentDecreaseTwotone',
  props: {
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    const fontSize = computed(() => {
      const _size = +props.size;
      if (isNaN(_size)) {
        const [_, size, unit] = /(d+)(w+)/.exec(props.size) || [];
        return unit === 'px' ? pxToRem(+size) : props.size;
      } else {
        return pxToRem(_size);
      }
    });

    return {
      fontSize,
      color: props.color
    }
  }
}
</script>

<template>
  <svg class="fn-icon"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" :style="{ fontSize, color }">
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 16V8l-4 4zm4-9h10v2H11zm0 4h10v2H11zm0 4h10v2H11zm-8 4h18v2H3zM3 3h18v2H3z"/>
  </svg>
</template>
        