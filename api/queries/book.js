import { groq } from '@nuxtjs/sanity'

export function queryGetBook({ slug } = {}) {
  return groq`*[_type == "book" && slug.current == "${slug}"][0] {..., nodes[]{..., firstPage->, secondPage->}}`
}
