<template>
  <div class="number-tile">
    <v-card
            class="pa-2"
            outlined
            tile
          >
          {{ randNum }}
          </v-card>
 
  </div>
</template>

<script>
import { isInteger } from 'lodash';

export default {
  name: 'TileComponent',
  props: {
    randMin: isInteger,
    randMax: isInteger
  },
  methods: {
    randBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },
  data() {
    return {
      randNum: this.randBetween(this.randMin, this.randMax)
    }
  },
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
