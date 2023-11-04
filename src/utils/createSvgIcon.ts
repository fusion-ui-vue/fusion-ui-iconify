import { defineComponent, h, computed } from 'vue';

const handleTagContent = (tagContent: string) => {
  const tagContentArr = tagContent.split('" ');
  const tagContentObj: Record<string, string> = {};

  tagContentArr.forEach(item => {
    const [key, value] = item.replace(/"/g, '').split('=');
    tagContentObj[key.trim()] = value.trim();
  });

  return tagContentObj;
};

const pxToRem = (size: number) => {
  const fontSize = 14;
  const htmlFontSize = 16;

  const coef = fontSize / 14;
  return `${(size / htmlFontSize) * coef}rem`;
};

export default function createSvgIcon(content: string) {
  const [_, svgTagContent, svgContent] = content.match(/<svg([^>]+)>([\s\S]+)<\/svg>/)!;
  const _svgTagContent = handleTagContent(svgTagContent);

  return defineComponent({
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
      const fontSize = computed(() => {
        const _size = +props.size;
        if (isNaN(_size)) {
          const [_, size, unit] = /(\d+)(\w+)/.exec(props.size as string) || [];
          return unit === 'px' ? pxToRem(+size) : props.size;
        } else {
          return pxToRem(_size);
        }
      });

      return () =>
        h('svg', {
          class: 'fn-icon-material fn-icon',
          ..._svgTagContent,
          style: {
            '--fn-icon-font-size': fontSize.value,
            '--fn-icon-color': props.color
          },
          innerHTML: svgContent
        });
    }
  });
}
