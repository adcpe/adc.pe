module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/assets/stylus/')
  eleventyConfig.addPassthroughCopy({'./assets/css/': 'css'})

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
