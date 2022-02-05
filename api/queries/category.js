import { groq } from '@nuxtjs/sanity'

export function queryGetCategory({ slug } = {}) {
  return groq`*[_type == "category" && slug.current == "${slug}"][0] {...}`
}
