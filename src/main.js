import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDWylm9Kc_keiuU6uTYl4zOQyOAbR7qs_s',
      authDomain: 'itc-ad-project.firebaseapp.com',
      databaseURL: 'https://itc-ad-project.firebaseio.com',
      projectId: 'itc-ad-project',
      storageBucket: 'itc-ad-project.appspot.com',
      messagingSenderId: '1002032439285'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
