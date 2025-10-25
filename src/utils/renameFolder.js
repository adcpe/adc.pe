import { rename } from 'fs'

const oldFolderPath = './dist/blog/{{ pagination.pageNumber }}-{{ post.data.slug }}' // Current folder name
const newFolderPath = './dist/blog/0-2020-07-08-rendering-markdown-on-react' // New folder name

export default () => {
  rename(oldFolderPath, newFolderPath, (err) => {
    if (err) {
      console.error('Error renaming folder:', err)
      return
    }
    console.log('Folder renamed successfully!')
  })
}
