import { rename } from 'fs'

const oldFolderPath = './dist/blog/{{ post.data.id }}' // Current folder name
const newFolderPath = './dist/blog/0' // New folder name

export default () => {
  rename(oldFolderPath, newFolderPath, (err) => {
    if (err) {
      console.error('Error renaming folder:', err)
      return
    }
    console.log('Folder renamed successfully!')
  })
}
