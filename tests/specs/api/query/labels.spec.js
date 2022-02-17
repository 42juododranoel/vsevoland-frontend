import { queryGetLabels } from '~/api/queries/labels'

describe('queryGetLabels', () => {
  test('category parameter', () => {
    const parameters = { category: 'coding' }

    const query = queryGetLabels(parameters)

    expect(query).toEqual(
      '*[_type == "label" && category->slug.current == "coding"] {..., category->{...}}'
    )
  })
})
