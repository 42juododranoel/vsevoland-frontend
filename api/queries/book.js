import { groq } from '@nuxtjs/sanity'

export function queryGetBook({ slug } = {}) {
  return groq`*[_type == "book" && slug.current == "${slug}"][0] {..., spreads[]{..., firstPage->, secondPage->}}`
}
