import to from 'await-to-js'
import { queryGetCategory } from '~/api/queries/category'

export default ({ $sanity }) => ({
  async get({ slug } = {}) {
    const query = queryGetCategory({ slug })

    const [, response] = await to($sanity.fetch(query))
    return response
  },
})
