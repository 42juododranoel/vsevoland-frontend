module.exports = {
  head: {
    title: 'Всеволенд',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Всеволод Скрипник обо всём, что ему интересно',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/sanity/module'],
  css: ['@/assets/scss/main'],
  plugins: ['~/plugins/api.js'],
  components: true,
  telemetry: false,

  sanity: {
    projectId: 'g03uathm',
    dataset: 'production',
  },
}
