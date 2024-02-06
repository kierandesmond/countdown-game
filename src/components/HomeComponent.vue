import { NumberTile } from './NumberTile.vue'

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <v-container
     
      :key="align"
      class="grey lighten-5 mb-6"
    >
      <v-row
        :align="align"
        no-gutters
        style="height: 150px;"
      >
        <v-col
        
          :key="n"
        >
        <NumberTile :randMin="1" :randMax="10"/>
      
        </v-col>
        <v-col
       
        >
        <NumberTile :randMin="11" :randMax="50"/>
        </v-col>
        <v-col
     
        >
        <NumberTile :randMin="1" :randMax="100"/>
        </v-col>
        <v-col
      
        >
        <NumberTile :randMin="1" :randMax="100"/>
        </v-col>
        <v-col
        
        >
        <NumberTile :randMin="1" :randMax="100"/>
        </v-col>

      </v-row>
    </v-container>
   
   
   
   
    
   
  <br>
  <h2>How To Play</h2>
    <p>
    
    </p>
   
  </div>
</template>

<script>
import NumberTile from './NumberTile.vue';

export default {
    name: 'HomeComponent',
    props: {
        msg: String
    },
    data(msg) {
        msg = 'Welcome to Your Vue.js App!';
        return msg;
    },
    components: { NumberTile }
}

 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
