import { PropType } from 'vue';

export type Shapes = 'Filled' | 'Outlined' | 'Round' | 'Sharp' | 'TwoTone';

export const svgIconProps = {
  size: {
    type: [Number, String],
    default: 'inherit'
  },
  color: {
    type: String,
    default: 'inherit'
  },
  cs: {
    type: [Object, String] as PropType<TemplateStringsArray>
  }
};
