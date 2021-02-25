module.exports = {
  head: {
    title: 'bgs_group_test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios'
  ],
  modules: ['cookie-universal-nuxt'],
  plugins: [
    { src: '~/plugins/vuelidate.js', ssr: false },
  ],
  build: {
    vendor: [
      'vuelidate'
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

