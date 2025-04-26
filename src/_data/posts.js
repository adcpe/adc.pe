import axios from 'axios'
import formatDate from '../utils/formatDate.js'

export default async () => {
  const response = await axios.get('https://adcpe.github.io/blog-content/postlist.json')
  response.data.posts.forEach((el) => (el.data.date = formatDate(el.data.date)))

  return response.data.posts
}
