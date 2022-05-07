import type { StorybookConfig } from '@storybook/react/types'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
    // builder: 'webpack5',
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    if (configType === 'PRODUCTION') {
      return { ...config, base: './' }
    }
    return config
  }
}

module.exports = config
