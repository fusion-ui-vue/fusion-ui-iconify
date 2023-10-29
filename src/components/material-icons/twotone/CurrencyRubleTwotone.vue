
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'CurrencyRubleTwotone',
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
  <svg class="fn-icon"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" :style="{ fontSize, color }">
    <g><rect fill="none" height="24" width="24"/></g><g><path d="M13.5,3H7v9H5v2h2v2H5v2h2v3h2v-3h4v-2H9v-2h4.5c3.04,0,5.5-2.46,5.5-5.5C19,5.46,16.54,3,13.5,3z M13.5,12H9V5h4.5 C15.43,5,17,6.57,17,8.5S15.43,12,13.5,12z"/></g>
  </svg>
</template>
        