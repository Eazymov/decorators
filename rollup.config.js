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
}

switch (process.env.NODE_ENV) {
  case node_envs.PRODUCTION: {
    config.output = {
      file: `dist/${meta.name}.cjs.js`,
      format: 'cjs',
      banner,
    };
    break;
  }
}

module.exports = config
