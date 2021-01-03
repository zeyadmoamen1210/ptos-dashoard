export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ptos_dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', crossorigin: 'anonymous', type: 'image/x-icon', integrity: 'sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' },

     
    ]
  },

 


  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // './assets/all.min.css',
    // 'swiper/css/swiper.css'
  ],
 
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '@/plugins/jquery',
    '@/plugins/vuesax',
    '@/plugins/vue-bootstrap.js',
    '@/plugins/moment.js',
    '@/plugins/vue-select.js',
    '@/plugins/vue-country-phone.js',
    '@/plugins/vue-form-wizard.js',
    '@/plugins/font-awsome.js'

    
    
    // "@/assets/src/scripts/jquery.min.js" 
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: "https://ptos.herokuapp.com/api/v1",
    common: {
        Accept: "application/json"
    }
},

  

  auth:{
    strategies: {
      local: {
          endpoints: {
              login: {
                  url: "login-phone",
                  method: "post",
                  propertyName: "token"
              },
              user:false,
              logout: false
          },
          // tokenRequired: true,
          tokenType: "Bearer"
      }
  }
  }

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  
}
