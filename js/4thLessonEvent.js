new Vue({
    el:"#vue-app",
data:{
age:27,
ageTen:27,
x:0,
y:0
},
methods:{
 inc_age:function(){
     this.age++;
 },
 dec_age:function(){
     this.age--;
 },
 inc_age_10:function(num){
this.ageTen+=num;
 },
 dec_age_10:function(num){
    this.ageTen-=num;
},
updateDiv:function(event){
this.x = event.offsetX;
this.y = event.offsetY;
}
}
})