import { groq } from '@nuxtjs/sanity'

export function queryGetPost({ slug } = {}) {
  return groq`*[_type == "post" && slug.current == "${slug}"][0] {...}`
}
