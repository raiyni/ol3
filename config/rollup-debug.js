// Rollup configuration for the full build

import noderesolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'build/index.js',
  output: [
    {file: 'build/ol-debug.js', format: 'iife', sourcemap: true}
  ],
  plugins: [
    noderesolve(),
    commonjs(),
    buble(),
    sourcemaps()
  ]
};
