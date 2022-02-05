import { queryGetPosts } from '~/api/queries/posts'

describe('queryGetPosts', () => {
  test('without parameters', () => {
    const query = queryGetPosts()

    expect(query).toEqual('*[_type == "post"] {..., category->, labels[]->}')
  })

  test('category parameter', () => {
    const parameters = { category: 'coding' }

    const query = queryGetPosts(parameters)

    expect(query).toEqual(
      '*[_type == "post" && category->slug.current == "coding"] {..., category->, labels[]->}'
    )
  })
})
