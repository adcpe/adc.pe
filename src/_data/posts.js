const axios = require('axios')

module.exports = async () => {
  const response = await axios.get('https://adcpe.github.io/blog-content/postlist.json')
  return response.data.posts
}
