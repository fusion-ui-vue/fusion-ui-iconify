
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'WorkspacePremiumFilled',
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
    <rect fill="none" height="24" width="24"/><path d="M9.68,13.69L12,11.93l2.31,1.76l-0.88-2.85L15.75,9h-2.84L12,6.19L11.09,9H8.25l2.31,1.84L9.68,13.69z M20,10 c0-4.42-3.58-8-8-8s-8,3.58-8,8c0,2.03,0.76,3.87,2,5.28V23l6-2l6,2v-7.72C19.24,13.87,20,12.03,20,10z M12,4c3.31,0,6,2.69,6,6 s-2.69,6-6,6s-6-2.69-6-6S8.69,4,12,4z"/>
  </svg>
</template>
        