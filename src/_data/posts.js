const axios = require('axios')

module.exports = async () => {
  const posts = await axios.get('https://adcpe.github.io/blog-content/postlist.json')
  return posts.data.data
}
