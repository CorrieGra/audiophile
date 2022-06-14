import * as path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@external': path.resolve(__dirname, '.'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@routes': path.resolve(__dirname, 'src/routes'),
    },
  },
};