import pugPlugin from '@11ty/eleventy-plugin-pug'
import relativePath from './src/utils/relativePath.js'

export default function (eleventyConfig) {
  eleventyConfig.setFreezeReservedData(false) // using the reserved word `content` somewhere

  eleventyConfig.addWatchTarget('./src/assets/sass/')
  eleventyConfig.addPassthroughCopy('./src/assets/css/')
  eleventyConfig.addPassthroughCopy('./src/assets/fa/')
  eleventyConfig.addPassthroughCopy('./src/assets/prism/')

  eleventyConfig.addFilter('relativePath', (page) => relativePath(page))
  global.filters = eleventyConfig.javascriptFunctions

  eleventyConfig.addPlugin(pugPlugin, {
    globals: ['filters'],
    debug: false,
    filters: eleventyConfig.getFilters({ type: 'sync' })
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
