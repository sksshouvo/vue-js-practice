new Vue({
    el:"#vue-app",
    data:{
        ab:10,
        a:0,
        b:0
    },
    computed:{
       addToA:function(){
           return this.ab+this.a
       } ,
       addToB:function(){
        return this.ab+this.b
    } 
    }
})