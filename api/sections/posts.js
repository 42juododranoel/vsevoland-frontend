import to from 'await-to-js'
import { queryGetPosts } from '~/api/queries/posts'

export default ({ $sanity }) => ({
  async get({ category } = {}) {
    const query = queryGetPosts({ category })

    const [, response] = await to($sanity.fetch(query))
    return response
  },
})
