export default (page) => {
  let path = ''

  const nesting = page.url.split('/').length - 2

  for (let i = 0; i < nesting; i++) path += '../'

  return path
}
