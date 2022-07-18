// Storybook公式のtsconfigを読み込む設定 https://storybook.js.org/docs/react/builders/webpack
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // Gatsby公式の設定 https://www.gatsbyjs.com/docs/how-to/testing/visual-testing-with-storybook/
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve('babel-plugin-remove-graphql-queries')
    )
    // https://stackoverflow.com/a/60832635
    config.module.rules.push({
      rules: [
        {
          test: /\.s[ac]ss$/i,
          /*
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path]-[local]-[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
          */
        },
      ],
    })
    // Storybook公式のtsconfigを読み込む設定 https://storybook.js.org/docs/react/builders/webpack
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]
    return config
  },
}
