
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <v-container
     
      class="grey lighten-5 mb-6"
    >
    <h1>Countdown Numbers Game</h1>
    
    <v-row
       
        no-gutters
        style="height: 150px;"
      >
      <v-col
        >


        <NumberTile :isTotal="true" :randMin="200" :randMax="1094"/>
      </v-col>

    </v-row>
  

      <v-row
       
        no-gutters
        style="height: 150px;"
      >
        <v-col
        >
        <NumberTile :isEven="false" :randMin="1" :randMax="10"/>
      
        </v-col>
        <v-col
       
        >
        <NumberTile :isEven="false" :randMin="1" :randMax="20"/>
        </v-col>
        <v-col
     
        >
        <NumberTile :isEven="true" :randMin="1" :randMax="20"/>
        </v-col>
        <v-col
      
        >
        <NumberTile :isEven="true" :randMin="1" :randMax="50"/>
        </v-col>
        <v-col
        
        >
        <NumberTile :isEven="true" :randMin="50" :randMax="100"/>
        </v-col>

      </v-row>
  
      <br>
  <h2>How To Play</h2>
    <p>
    
    </p>
    </v-container>
   
   
   
   
    
   
 
   
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
