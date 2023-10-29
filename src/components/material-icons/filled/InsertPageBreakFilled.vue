
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'InsertPageBreakFilled',
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
    <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2v-3H4L4,20z"/><path d="M20,8l-6-6H6C4.9,2,4.01,2.9,4.01,4l0,7H20V8z M13,9V3.5L18.5,9H13z"/><rect height="2" width="6" x="9" y="13"/><rect height="2" width="6" x="17" y="13"/><rect height="2" width="6" x="1" y="13"/></g></g>
  </svg>
</template>
        