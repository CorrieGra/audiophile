import * as path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@external': path.resolve(__dirname, '.'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@theme': path.resolve(__dirname, 'src/theme')
    },
  },
};