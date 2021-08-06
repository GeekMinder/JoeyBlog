<template>
<div>
    <div class="comment-list">
        <ul class="comment-ul">
            <li v-for="(item,i) in commentAllList.slice(0,5)" :key="i">
                <ShowMessageContainer :nickname="item.nickName" :comText="item.comText"/>
            </li>
        </ul>

    </div>
    <div class="buttons">
        <router-link :to="{name:'BlogClassification'}">
            <Icon type="more"/>
            全部博客
        </router-link>
        <router-link :to="{name:'Messages'}" href="#">
            <Icon type="writeMsg"/>
            写新留言
        </router-link>

    </div>
</div>
</template>

<script>

import Icon from "@/components/Icon";
import ShowMessageContainer from "./showMessage.vue";
export default {
    props: ["commentAllList"],
    computed:{

    },
    components:{
        Icon,
        ShowMessageContainer
    }
}
</script>

<style lang="less">
    .buttons{
        margin-top: 2.5em;
        text-align: center;
        >a{
            font-size: 0.9rem;
            border: 1px solid;
            border-color: rgba(255,255,255,0.35) rgba(255,255,255,0.45) rgba(255,255,255,0.55);
            border-radius: 8px;
            padding: 12px 18px 8px;
            margin: 0 8px;
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 3px 18px rgb(0 0 0 / 20%);
            color: rgba(255,255,255,0.8);
            transition: .3s;
            >.icon{
                display: inline-block;
                font-size: 120%;
                vertical-align: middle;

            }
            &:hover{
                background-color: rgba(255,255,255,0.5);
            }
        }
    }
    .comment-list{
        padding: 0 3em;
        margin-top: 3em;
    }
    .comment-ul{
        margin-top: .5em
    }
</style>