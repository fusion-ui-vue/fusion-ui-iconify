
<script>
import { computed } from 'vue';
import { pxToRem } from '../../../utils';
import { css } from '@emotion/css';
export default {
  name: 'BusAlertFilled',
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
  <svg :class="cssClass" class="fn-icon"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 1a7 7 0 0 0-5.78 3.05l.02-.03C9.84 4 9.42 4 9 4c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V22a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22v-3.08A7 7 0 0 0 16 1zM4.5 19a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM3 13V8h6c0 1.96.81 3.73 2.11 5H3zm10.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.5-6a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm-1-9h2v5h-2zm0 6h2v2h-2z"/>
  </svg>
</template>
        