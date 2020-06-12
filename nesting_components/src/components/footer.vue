<template>
<footer>
<p>{{ copyright }}</p>
</footer>    
</template>

<script>
export default {
    data(){
        return{
            copyright:"Sks Copyright 2020"
        }
    }
}
</script>

<style scoped>
footer {
	background-color: #222;
	padding: 6px;
	position: fixed;
	width: 98%;
	left: 0px;
	bottom: 0px;
}
p{
    color: lightgreen;
    text-align: center;
}
</style>