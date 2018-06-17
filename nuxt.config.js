const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/codypetts/'
  }
} : {}

module.exports = {
  ...routerBase,

  modules: [
    'bootstrap-vue/nuxt',
    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }]
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: 'Home - Cody Petts',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Practicando maquetado de web la web http://codypetts.com/ con nuxt ' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'https://hernancabrera.github.io/codypetts/' },
      { name: 'twitter:title', content: 'Home - Cody Petts' },
      { name: 'twitter:description', content: 'Hey there! My name is Cody Petts. I’m a multidisciplinary graphic designer who specializes in brand identity, packaging design, illustration and photography.' },
      { name: 'twitter:creator', content: 'Cody Petts' },
      { name: 'twitter:image', content: 'safe_image.jpg' },
      { property: 'og:title', content: 'A Different Design - Kristof Orts - Freelance web design in Antwerp' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://hernancabrera.github.io/codypetts/' },
      { property: 'og:image', content: 'safe_image.jpg' },
      { property: 'og:description', content: 'Hey there! My name is Cody Petts. I’m a multidisciplinary graphic designer who specializes in brand identity, packaging design, illustration and photography.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicons.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,700|Exo:400,500,600,700,800,900' }
    ]
  },
  css: [
    '~/assets/main.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fff' },
  /*
  ** Build configuration
  */
  build: {
    /* Lybraries */
    vendor: ['hammerjs'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
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
