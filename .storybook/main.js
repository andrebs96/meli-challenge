module.exports = {
  "stories": ["../src/components/**/stories.jsx"],
  "addons": ["@storybook/addon-essentials"],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
