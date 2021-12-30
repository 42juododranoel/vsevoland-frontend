import book from '~/api/sections/book'
import post from '~/api/sections/post'

export default ({ $sanity }) => ({
  book: book({ $sanity }),
  post: post({ $sanity }),
})
