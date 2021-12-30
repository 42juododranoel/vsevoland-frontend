import to from 'await-to-js'
import { queryGetBook } from '~/api/queries/book'

export default ({ $sanity }) => ({
  async get({ slug } = {}) {
    const query = queryGetBook({ slug })

    const [, response] = await to($sanity.fetch(query))
    return response
  },
})
