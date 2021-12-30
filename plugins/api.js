import createApi from '~/api'

export default function ({ $sanity, $axios }, inject) {
  const api = createApi({ $sanity, $axios })

  inject('api', api)
}
