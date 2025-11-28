const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ignore source map errors from node_modules
      webpackConfig.ignoreWarnings = [
        /Failed to parse source map/,
        /ENOENT: no such file or directory/,
        /Can't resolve .* in .*node_modules/,
      ];

      // Configure path aliases - @ points to src directory
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
      };

      // Remove or disable source-map-loader to prevent build failures
      const rules = webpackConfig.module.rules;
      for (let i = rules.length - 1; i >= 0; i--) {
        const rule = rules[i];
        if (rule.enforce === 'pre' && rule.use) {
          const filteredUse = rule.use.filter((use) => {
            if (typeof use === 'string') {
              return !use.includes('source-map-loader');
            }
            if (use.loader) {
              return !use.loader.includes('source-map-loader');
            }
            return true;
          });
          
          if (filteredUse.length === 0) {
            // Remove the entire rule if no loaders remain
            rules.splice(i, 1);
          } else {
            rule.use = filteredUse;
          }
        }
      }

      return webpackConfig;
    },
  },
};