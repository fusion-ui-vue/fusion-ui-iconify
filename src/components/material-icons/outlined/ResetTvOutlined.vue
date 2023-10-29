
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'ResetTvOutlined',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M22,8V5c0-1.1-0.9-2-2-2H4C2.9,3,2,3.9,2,5v12c0,1.1,0.9,2,2,2h4v2h8v-2h4c1.1,0,1.99-0.9,1.99-2v-5H22c0-1.1-0.9-2-2-2 h-7.17l1.83-1.83l-1.41-1.41C9.69,10.31,10.88,9.12,9,11c2.06,2.06,0.9,0.9,4.24,4.24l1.41-1.41L12.83,12H20v5H4V5h16v3H22z"/></g></g>
  </svg>
</template>
        