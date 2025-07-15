import { defineConfig } from 'rollup';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import sass from 'sass';

const postcssOptions = {
  extract: true,
  minimize: false,
  sourceMap: false,
  extensions: ['.scss'],
  implementation: sass,
};

export default defineConfig([
  {
    input: 'slick/slick.js',
    output: {
      file: 'slick/slick.min.js',
      format: 'umd',
      name: 'Slick',
    },
    plugins: [
      terser({ mangle: false }),
    ],
  },
  {
    input: 'slick/slick.scss',
    output: { file: 'slick/slick.css' },
    plugins: [postcss(postcssOptions)],
  },
  {
    input: 'slick/slick-theme.scss',
    output: { file: 'slick/slick-theme.css' },
    plugins: [postcss(postcssOptions)],
  },
]);