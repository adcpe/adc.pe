const relativePath = require('./src/utils/relativePath')

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/assets/stylus/')
  eleventyConfig.addPassthroughCopy('./src/assets/css/')
  eleventyConfig.addPassthroughCopy('./src/assets/fa/')

  global.filters = eleventyConfig.javascriptFunctions

  eleventyConfig.addFilter('relativePath', (page) => relativePath(page))

  eleventyConfig.setPugOptions({ globals: ['filters'] })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
