<template>
<div class="footer-container">
    <p>
        {{firstLine}}
    </p>
    <p>
        {{secondLine}}
    </p>
</div>
</template>

<script>
export default {
    data(){
        return{
            firstLine:"© Joey's Blog  2021",
            secondLine:"Designed and developed by Joey Ni."
        }
    }
}
</script>

<style lang="less">
.footer-container{
    margin-top: 1.75em;
    margin-bottom: 2em;
}
.footer-container>p{
    text-align: center;
    font-size: 0.75em;
    color: rgba(255,255,255,0.75);
}
</style>