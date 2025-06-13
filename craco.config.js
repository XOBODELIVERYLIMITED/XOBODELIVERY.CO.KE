const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@context': path.resolve(__dirname, 'src/context'),
    },
    configure: (webpackConfig, { env, paths }) => {
      // Optimize bundle size
      if (env === 'production') {
        webpackConfig.optimization.splitChunks = {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        };
      }
      return webpackConfig;
    },
  },
  babel: {
    plugins: [
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ],
  },
};
