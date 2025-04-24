import axios from 'axios'
import formatDate from '../utils/formatDate.js'

export default async () => {
  const response = await axios.get('https://adcpe.github.io/blog-content/postlist.json')
  response.data.posts.forEach((el) => (el.data.date = formatDate(el.data.date)))
  response.data.posts.forEach((el) => (console.log(el)))
  return response.data.posts
}
