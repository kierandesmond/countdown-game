
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <v-container class="grey lighten-5 mb-6">
      <v-row>
          <v-col>  <h1>Countdown Numbers Game</h1></v-col>
        </v-row>
   
        <v-row>
          <v-col> <NumberTile :isTotal="true" :randMin="200" :randMax="1094"/></v-col>
        </v-row>
  

      <v-row>
        <v-col><NumberTile :isEven="false" :randMin="1" :randMax="5"/></v-col>
        <v-col><NumberTile :isEven="false" :randMin="3" :randMax="10"/></v-col>
        <v-col><NumberTile :isEven="false" :randMin="1" :randMax="20"/></v-col>
        <v-col><NumberTile :isEven="true" :randMin="1" :randMax="20"/> </v-col>
        <v-col><NumberTile :isEven="true" :randMin="1" :randMax="50"/></v-col>
        <v-col><NumberTile :isEven="true" :randMin="50" :randMax="100"/></v-col>
      </v-row>
      <v-row>
       
        <v-col><h2>How To Play</h2></v-col>
        <v-col> <p>
        Add, Subtract, Multiply or Divide the numbers to reach the target number. Its that simple!
        </p></v-col>
       
        
       
      </v-row>
  
   
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
