new Vue({
    el:"#vue-app",
    data:{
    full_name:"",
    age:""
    },
    methods:{
        submit_name:function(){
        console.log("You Are typing your name.......");
        },
        submit_age:function(){
        console.log("You Are typing your age.......");
        }
    }
    });