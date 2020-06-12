<template>
  <div id="app">
  <app-haeder></app-haeder>
  <app-body v-bind:rand_array="rand_array"></app-body>
  <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import main_body from './components/main_body.vue'

export default {
  name: 'App',
  components: {
    'app-haeder':Header,
    'app-footer':Footer,
    'app-body':main_body
  },
  data(){
    return{
      rand_array:[
            {id:1, name:"Salman Kabir", age:"27", profession:"Programmer", show:false},
            {id:2, name:"Farzana Kabir", age:"22", profession:"student", show:false},
            {id:3, name:"Tasnim Rejuana", age:"22", profession:"Student", show:false},
            {id:4, name:"Afsana Kabir", age:"24", profession:"House Wife", show:false}
        ]
    }
  }
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
