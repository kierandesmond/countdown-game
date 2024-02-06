<template>
  <div class="number-tile">
    <v-card class="pa-2" outlined tile variant="tonal" >

      <v-card-text>
        <v-row>
          <v-col>
            <div v-if="isTotal"><h3 class="num_class" > {{ isTotal ? 'Target: ' + parseInt(randNum) : '' }} </h3></div>
            <div v-if="isEven & !isTotal"><h3 class="num_class" > {{ isEven ? parseInt(randEven) : randNum }} </h3></div>
            <div v-if="!isEven & !isTotal"><h3 class="num_class" > {{ !isEven ? parseInt(randNum) : randEven }} </h3></div>
     
          </v-col>
        </v-row>
      </v-card-text>
     
      <v-card-actions>
        <div v-if="isTotal">
          <v-btn @click="refresh()" color="secondary" text> <v-btn color="secondary" text>Next</v-btn></v-btn></div>
       
      </v-card-actions>
         
          </v-card>
 
  </div>
</template>

<script>
import { isInteger } from 'lodash';

export default {
  name: 'TileComponent',
  props: {
    randMin: isInteger,
    randMax: isInteger,
    isTotal: Boolean,
    isEven: Boolean
  },
  methods: {
    refresh() {
      window.location.reload(); },
    randBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getRandEven(min,max) {
      // return a random number thats either 20, 25, 30, 35, 40, 45, 50, 60, 75, 100
      // code should only return values between the min and max
      let numbers = [20, 25, 30, 35, 40, 45, 50, 60, 75, 100];
      numbers.filter((num) => num >= min && num <= max);
      return numbers[Math.floor(Math.random() * numbers.length)];
    }
  },
  data() {
    return {
      randEven: this.getRandEven(this.randMin, this.randMax),
      randNum: this.randBetween(this.randMin, this.randMax)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color: #42b983;
  vertical-align: middle;
  text-align: center;
  font-size: 36px;
  margin-bottom: 20px !important;
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
.num_class {
  color: #42b983;
}
.pa-2 {
  padding: 8px !important;
}
.text-h5 {
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  align-content: center;
  color: #42b983;
  margin-bottom: 20px !important;
}
</style>
