import { groq } from '@nuxtjs/sanity'

export function queryGetLabels({ category } = {}) {
  return groq`*[_type == "label" && category->slug.current == "${category}"] {...}`
}
