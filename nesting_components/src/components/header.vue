<template>
<header>
 <h2>{{title}}</h2>   
</header>    
</template>

<script>
export default {
    data(){
        return{
            title:"Second Practice"
        }

    }
}
</script>

<style scoped>
header {
	background: lightgreen;
	padding: 10px;
	position: absolute;
	top: 0px;
	width: 98%;
	left: 0px;
}
h2{
    color: #222;
    text-align: center;
}
</style>