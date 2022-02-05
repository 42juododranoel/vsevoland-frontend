import { queryGetCategory } from '~/api/queries/category'

describe('queryGetCategory', () => {
  test('slug parameter', () => {
    const parameters = { slug: 'coding' }

    const query = queryGetCategory(parameters)

    expect(query).toEqual('*[_type == "category" && slug.current == "coding"][0] {...}')
  })
})
