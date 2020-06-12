// This is the wrong way
// var datao = {
//     count : 0
// }

Vue.component('ex', {
    data: function () {
       return {
        count : 0
       }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })

  var appOne = new Vue({
      el:"#appOne"
  });

  var appTwo = new Vue({
    el:"#appTwo"
})