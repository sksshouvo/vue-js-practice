new Vue({
    el:"#newApp",
    data:{
        name:"",
        nameIt:"Need ti Change It."
    },
    methods:{
     get_info:function(){
         this.name = this.$refs.text_input.value
         this.nameIt = this.$refs.text_input.value
     }   
    }    
})