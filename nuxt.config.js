export default {
  components: true,
  head: {

    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css",
      },

    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4",
        crossorigin: "anonymous",
        body: true
      }
    ]
  },
  css: [
    { src: '~/assets/styles.css', lang: 'css' }
  ],
  build: {
    extractCSS: true

  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/generalApi',
    '~/plugins/dataUsers',
    '~/plugins/dataProjects',
    '~/plugins/dataReports',
    '~/plugins/dataStatus'
  ]
}
