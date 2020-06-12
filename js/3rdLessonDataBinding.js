new Vue({
el:"#vue-app",
data:{
name:"Salman Kabir",
job:"Web Developer",
myfblink:"https://facebook.com/SKSSHOUVO",
renderHtml: "<a href='https://facebook.com/SKSSHOUVO'>My Facebbok id link</a>"
},
methods:{
    greeting:function(time){
        return "Good "+time+" "+this.name
    }
}
})