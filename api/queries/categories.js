import { groq } from '@nuxtjs/sanity'

export function queryGetCategories() {
  return groq`*[_type == "category"] {...}`
}
