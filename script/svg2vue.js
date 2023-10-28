/**
 * ❗️ Using node.js to run this script
 *
 * This script is used to convert svg files to vue components
 */

const { log } = require('console');
const fs = require('fs');

const main = shape => {
  const sourceDir = `../src/material-icons/${shape}`;
  const targetDir = `../src/components/material-icons/${shape}`;

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
          export default {
            name: '${filename}',
            props: {
              size: {
                type: Number,
                default: 24
              },
              color: {
                type: String,
                default: 'inherit'
              }
            },
            setup(props) {
              const fontSize = computed(() => props.size + 'px')

              return {
                size: fontSize,
                color: props.color
              }
            }
          }
          </script>

          <template>
            <svg class="fn-icon" ${svgTagContent}>
              ${svgContent}
            </svg>
          </template>

          <style>
          .fn-icon {
            user-select: none;
            width: 1em;
            height: 1em;
            display: inline-block;
            fill: currentcolor;
            flex-shrink: 0;
            transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            font-size: v-bind(size);
            color: v-bind(color);
          }
          </style>
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

['filled', 'outlined', 'round', 'sharp', 'twotone'].forEach(shape => main(shape));
