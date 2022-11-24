module.exports = (page) => {
  let rel = ''

  const nesting = page.url.split('/').length - 2

  for (let i = 0; i < nesting; i++) rel += '../'

  return rel
}
