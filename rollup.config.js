require('dotenv').config();

const node_envs = { DEVELOPMENT: 'DEVELOPMENT', PRODUCTION: 'PRODUCTION' };
const meta = require('./package.json');
const banner = `
/*!
 * ${meta.name} v${meta.version}
 * ${meta.homepage}
 *
 * @license
 * Copyright (c) 2017 ${meta.author}
 * Released under the MIT license
 */
`;

const config = {
  input: './lib/index.js',
  output: {
    file: `dist/${meta.name}.cjs.js`,
    format: 'cjs',
    banner: banner,
  },
}

module.exports = config
