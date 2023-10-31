
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
export default {
  name: 'NoDrinksFilled',
  props: {
    size: {
      type: [Number, String],
      default: 'inherit'
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  setup(props) {
    const cssClass = computed(() => {
      let fontSize;
      const _size = +props.size;
      if (isNaN(_size)) {
        const [_, size, unit] = /(d+)(w+)/.exec(props.size) || [];
        fontSize = unit === 'px' ? pxToRem(+size) : props.size;
      } else {
        fontSize = pxToRem(_size);
      }

      return css({
        fontSize,
        color: props.color
      });
    });

    return {
      cssClass
    };
  }
}
</script>

<template>
  <svg :class="cssClass" class="fn-icon"  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
    <g><rect fill="none" height="24" width="24"/><path d="M5.83,3H21v2l-6.2,6.97L9.83,7h6.74l1.78-2H7.83L5.83,3z M19.78,22.61L18,20.83V21H6v-2h5v-5l-1.37-1.54L1.39,4.22 l1.41-1.41L3,3l18.19,18.19L19.78,22.61z M16.17,19L13,15.83V19H16.17z"/></g>
  </svg>
</template>
        