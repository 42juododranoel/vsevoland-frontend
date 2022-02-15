import { queryGetCategories } from '~/api/queries/categories'

describe('queryGetCategories', () => {
  test('without parameters', () => {
    const parameters = {}

    const query = queryGetCategories(parameters)

    expect(query).toEqual('*[_type == "category"] {...}')
  })
})
