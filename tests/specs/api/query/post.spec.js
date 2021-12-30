import { queryGetPost } from '~/api/queries/post'

describe('queryGetPost', () => {
  test('slug parameter', () => {
    const parameters = { slug: 'coding-sucks-and-here-is-why' }

    const query = queryGetPost(parameters)

    expect(query).toEqual(
      '*[_type == "post" && slug.current == "coding-sucks-and-here-is-why"][0] {...}'
    )
  })
})
