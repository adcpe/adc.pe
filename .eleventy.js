module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/assets/stylus/')
  eleventyConfig.addPassthroughCopy('./src/assets/css/')

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
