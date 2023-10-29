
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'EdgesensorLowTwotone',
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
    <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="1" opacity=".3" width="8" x="8" y="4"/><rect height="1" opacity=".3" width="8" x="8" y="19"/><rect height="7" width="2" x="20" y="10"/><rect height="7" width="2" x="2" y="7"/><path d="M16,2.01L8,2C6.9,2,6,2.9,6,4v16c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V4C18,2.9,17.1,2.01,16,2.01z M16,20H8v-1h8V20z M16,17H8V7h8V17z M16,5H8V4h8V5z"/></g></g>
  </svg>
</template>
        