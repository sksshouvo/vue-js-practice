new Vue({
el:"#vue-app",
data:{
name:"Salman Kabir",
job:"Web Developer"
},
methods:{
    greeting:function(time){
        return "Good "+time+" "+this.name
    }
}
})