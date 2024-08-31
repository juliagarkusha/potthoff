const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/i,
      include: path.join(options.dir, 'src/media/icons'),
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            spriteFilename: `icons.svg`,
            publicPath: path.join(options.dir, 'src/media'),
            outputPath: '/static/media/',
          },
        },
        {
          loader: 'svgo-loader',
          options: {
            plugins: [
              'cleanupIds',
              'cleanupAttrs',
              'removeDoctype',
              'removeXMLProcInst',
              'removeComments',
              'removeMetadata',
              'removeTitle',
              'removeDesc',
              'removeUselessDefs',
              'removeXMLNS',
              'removeEditorsNSData',
              'removeEmptyAttrs',
              'removeHiddenElems',
              'removeEmptyText',
              'removeEmptyContainers',
              'cleanupEnableBackground',
              'convertStyleToAttrs',
              'convertColors',
              'convertTransform',
              'removeUnknownsAndDefaults',
              'removeNonInheritableGroupAttrs',
              'removeUselessStrokeAndFill',
              'removeUnusedNS',
              'cleanupNumericValues',
              'cleanupListOfValues',
              'moveGroupAttrsToElems',
              'collapseGroups',
              'removeRasterImages',
              'mergePaths',
              'removeDimensions',
              'removeStyleElement',
            ]
          }
        },
      ],
    });
    config.plugins.push(new SpriteLoaderPlugin());
    return config;
  }
}
