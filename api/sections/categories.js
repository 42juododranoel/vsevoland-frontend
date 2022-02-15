import to from 'await-to-js'
import { queryGetCategories } from '~/api/queries/categories'

export default ({ $sanity }) => ({
  async get({ slug } = {}) {
    const query = queryGetCategories({ slug })

    const [, response] = await to($sanity.fetch(query))
    return response
  },
})
