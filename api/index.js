import post from '~/api/sections/post'

export default ({ $sanity }) => ({
  post: post({ $sanity }),
})
