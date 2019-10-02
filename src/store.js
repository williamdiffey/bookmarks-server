
const uuid = require('uuid/v4')

const bookmarks = [
  { id: uuid(),
    title: 'discogs',
    url: 'https://www.discogs.com',
    description: 'Homepage of cratediggers',
    rating: 5 },
  { id: uuid(),
    title: 'Facebook',
    url: 'https://www.faceboook.com',
    description: 'Home of React and social manipulation on an international scale',
    rating: 1 },
  { id: uuid(),
    title: 'FT',
    url: 'https://ft.com',
    description: 'News that is still covered as news',
    rating: 4 },
]

module.exports = { bookmarks }