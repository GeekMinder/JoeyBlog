<template>
<div class="show-message-container">
<!--    <img :store="url" alt="" />-->
    <img src="../../../assets/a-avatar.png" alt="" />
    <h4>{{nickname}}</h4>
    <p>{{comText}}</p>
</div>
</template>

<script>
export default {
    props:{
        // url:{
        //     type:String,
        //     default:"../assets/a-avatar.png"
        // },
        nickname:{
            type:String,
            default: "匿名"
        },
        // size:{
        //     type:Number,
        //     default:150
        // },
        comText:{
            type:String,
            require:true
        }

    }
}
</script>

<style lang="less">
.show-message-container>img{
    width: 32px;
    border-radius: 100%;
    display: inline;
    transform: translateY(20px);
}
.show-message-container>h4{
    display: inline;
    color: rgba(255,255,255,0.75);
    padding-left: 5px;
    font-weight: bold;
    font-size: 0.75rem;
}
.show-message-container>p{
    font-size: 0.6rem;
    line-height: 1.45;
    padding-left: 39px;
    color: rgba(255,255,255,0.85);
}
</style>