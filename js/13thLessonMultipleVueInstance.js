var appOne = new Vue({
el:"#appOne",
data:{
title:"Vue App One"
},
methods:{

},
computed:{
greet:function(){
    return "Hello From App One"
}
}
});

var appTwo = new Vue({
    el:"#appTwo",
    data:{
        title:"Vue App Two"
    },
    methods:{
        changeTitle:function(){
            appOne.title = "App one title is been changed"
        }
    },
    computed:{
        greet:function(){
            return "Hello From App Two"
        }
    }
})

appTwo.title = "App title two can be changed from outside of the instance like an object";