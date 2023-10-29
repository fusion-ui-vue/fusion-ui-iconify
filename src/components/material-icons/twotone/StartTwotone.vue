
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'StartTwotone',
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
    <rect fill="none" height="24" width="24"/><path d="M14.59,7.41L18.17,11H6v2h12.17l-3.59,3.59L16,18l6-6l-6-6L14.59,7.41z M2,6v12h2V6H2z"/>
  </svg>
</template>
        