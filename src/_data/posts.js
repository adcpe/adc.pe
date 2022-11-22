const axios = require('axios')
const formatDate = require('../utils/formatDate')

module.exports = async () => {
  const response = await axios.get('https://adcpe.github.io/blog-content/postlist.json')
  response.data.posts.forEach((el) => (el.data.date = formatDate(el.data.date)))
  return response.data.posts
}
