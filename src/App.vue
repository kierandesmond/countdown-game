
<template>
  <v-app>
    
  

  <v-app-bar app>
    <!-- -->
    
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>


      <!-- If using vue-router -->
      <router-view>  </router-view>
     
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>

</template>


<script>

export default {
  name: 'App',
  components: {
    
  },
  data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
        ],
      }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
