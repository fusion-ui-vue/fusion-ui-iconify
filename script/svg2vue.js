/**
 * ❗️ Using node.js to run this script
 *
 * This script is used to convert svg files to vue components
 */

const fs = require('fs');
const shape = ['filled', 'outlined', 'round', 'sharp', 'twotone'];

// Create folder
fs.mkdirSync('src/material-icons');

const main = async shape => {
  const sourceDir = `material-icons/${shape}`;
  const targetDir = `src/material-icons/`;

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
        const filename = file.replace('.svg', '');
        const template = `
        import '../style/index.css';
        import createSvgIcon from '../utils/createSvgIcon';
        const ${filename} = createSvgIcon('${str}');
        export default ${filename};
        `.replace(/^        /gm, '');

        fs.writeFile(`${targetDir}/${filename}.ts`, template, err => {
          if (err) {
            return console.error(`failed to convert ${filename}`, err);
          }
          console.log(`${filename}.ts is generated!`);
        });
      });
    });

    const genIndex = () => {
      const template = files
        .map(file => {
          const filename = file.replace('.svg', '');
          return `export { default as ${filename} } from './material-icons/${filename}';`;
        })
        .join('\n');

      fs.appendFile('src/index.ts', template + '\n', err => {
        if (err) {
          return console.error(err);
        }
        console.log('Generated index.ts!');
      });
      return template;
    };
    genIndex();
  });
};

// Convert svg to vue component
shape.forEach(shape => main(shape));
