import to from 'await-to-js'
import { queryGetPost } from '~/api/queries/post'

export default ({ $sanity }) => ({
  async get({ slug } = {}) {
    const query = queryGetPost({ slug })

    const [, response] = await to($sanity.fetch(query))
    return response
  },
})
