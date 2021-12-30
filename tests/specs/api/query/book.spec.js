import { queryGetBook } from '~/api/queries/book'

describe('queryGetBook', () => {
  test('slug parameter', () => {
    const parameters = { slug: 'on-self' }

    const query = queryGetBook(parameters)

    expect(query).toEqual(
      '*[_type == "book" && slug.current == "on-self"][0] {..., spreads[]{..., firstPage->, secondPage->}}'
    )
  })
})
