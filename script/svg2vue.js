/**
 * ❗️ Using node.js to run this script
 *
 * This script is used to convert svg files to vue components
 */

const fs = require('fs');

const main = shape => {
  const sourceDir = `src/material-icons/${shape}`;
  const targetDir = `src/components/material-icons/${shape}`;

  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      return console.error(err);
    }

    // convert svg to vue component
    files.forEach(file => {
      fs.readFile(`${sourceDir}/${file}`, (err, data) => {
        if (err) {
          return console.error(err);
        }
        const str = data.toString();
        const [_, svgTagContent, svgContent] = str.match(/<svg([^>]+)>([\s\S]+)<\/svg>/);
        const filename = file.replace('.svg', '');
        const template = `
          <script>
          import { computed } from 'vue';
          import { pxToRem } from '../../../utils';
          export default {
            name: '${filename}',
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
                  const [_, size, unit] = /(\d+)(\w+)/.exec(props.size) || [];
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
            <svg class="fn-icon" ${svgTagContent} :style="{ fontSize, color }">
              ${svgContent}
            </svg>
          </template>
        `.replace(/^          /gm, '');

        fs.writeFile(`${targetDir}/${filename}.vue`, template, err => {
          if (err) {
            return console.error(`failed to convert ${filename}`, err);
          }
          console.log(`${filename}.vue is generated!`);
        });
      });
    });

    const genIndex = () => {
      const template = files
        .map(file => {
          const filename = file.replace('.svg', '');
          return `export { default as ${filename} } from './${filename}.vue';`;
        })
        .join('\n');

      fs.writeFile(`${targetDir}/index.ts`, template, err => {
        if (err) {
          return console.error(err);
        }
        console.log('Generated index.ts!');
      });
    };
    genIndex();
  });
};

const shape = ['filled', 'outlined', 'round', 'sharp', 'twotone'];
// Create folder first
fs.mkdirSync('src/components/material-icons');
shape.forEach(shape => fs.mkdirSync(`src/components/material-icons/${shape}`));

// Convert svg to vue component
shape.forEach(shape => main(shape));

// Then generate index.ts
fs.writeFile(
  'src/components/material-icons/index.ts',
  shape.map(shape => `export * from './${shape}';`).join('\n'),
  err => {
    if (err) {
      return console.error(err);
    }
    console.log('Generated index.ts!');
  }
);
