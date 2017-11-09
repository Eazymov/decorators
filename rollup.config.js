import babel from 'rollup-plugin-babel';

export default {
  name: 'decorators',
  input: 'lib/index.js',
  output: {
    file: 'decorators.min.js',
    path: 'dist',
    format: 'es',
  },
  plugins: [
    babel({
      exclude: 'node_modules/*',
    }),
  ],
};
