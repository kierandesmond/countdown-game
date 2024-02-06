import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // Ensure this export is correctly set up
import VueRouter from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import 'vuetify/dist/vuetify.min.css';


// Tell Vue to use VueRouter
Vue.use(VueRouter)

// Define routes
const routes = [
  { path: '/', component: HomeComponent }
]

// Create router instance
const router = new VueRouter({
  mode: 'history', // Optional: Use history mode to avoid hashes in URLs
  routes
})

// Create and mount the root Vue instance
new Vue({
  router, // Use router
  vuetify, // Use Vuetify
  render: h => h(App),
}).$mount('#app')


