new Vue({
el:"#vue-app",
data:{
    available: false,
    text_white: true,
    nearby: false
},
methhods:{

},
computed:{
    cssComponent:function(){
        return{
            available: this.available,
            nearby : this.nearby
        }
    }
}
})