import book from '~/api/sections/book'
import post from '~/api/sections/post'
import posts from '~/api/sections/posts'
import labels from '~/api/sections/labels'
import category from '~/api/sections/category'

export default ({ $sanity }) => ({
  book: book({ $sanity }),
  post: post({ $sanity }),
  posts: posts({ $sanity }),
  labels: labels({ $sanity }),
  category: category({ $sanity }),
})
