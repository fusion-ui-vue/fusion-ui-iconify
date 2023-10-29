
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'AccountTreeRound',
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
    <rect fill="none" height="24" width="24"/><path d="M17,11h3c1.11,0,2-0.9,2-2V5c0-1.11-0.9-2-2-2h-3c-1.11,0-2,0.9-2,2v1H9.01V5c0-1.11-0.9-2-2-2H4C2.9,3,2,3.9,2,5v4 c0,1.11,0.9,2,2,2h3c1.11,0,2-0.9,2-2V8H11v7.01c0,1.65,1.34,2.99,2.99,2.99H15v1c0,1.11,0.9,2,2,2h3c1.11,0,2-0.9,2-2v-4 c0-1.11-0.9-2-2-2h-3c-1.11,0-2,0.9-2,2v1h-1.01C13.45,16,13,15.55,13,15.01V8h2v1C15,10.1,15.9,11,17,11z"/>
  </svg>
</template>
        