import { groq } from '@nuxtjs/sanity'

export function queryGetPosts({ category } = {}) {
  const categoryLookup = category ? ` && category->slug.current == "${category}"` : ''
  return groq`*[_type == "post"${categoryLookup}] {..., category->, labels[]->{..., category->{...}}} | order(publishedAt desc)`
}
