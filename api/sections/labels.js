import to from 'await-to-js'
import { queryGetLabels } from '~/api/queries/labels'

export default ({ $sanity }) => ({
  async get({ category } = {}) {
    const query = queryGetLabels({ category })

    const [, response] = await to($sanity.fetch(query))
    return response
  },
})
