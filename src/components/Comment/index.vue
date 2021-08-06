<template>
    <div class="comment-container">
        <header>
            <img src="../../assets/a-avatar.png" alt="">
            <div>
                <h3>{{comment.nickName}}</h3>
                <h4>在
                    <time>{{ comment.commentTime }}</time>
                    说：
                </h4>
            </div>
        </header>
        <div class="content">
            <p>{{ comment.comText }}</p>
        </div>
        <ul class="actions">
            <li class="like" @click="clickLike">
                <Icon type="thumbUp" :style="{color: showLike}"/>
                <span class="up-text">赞</span>
                <span>({{comment.likeNum}})</span>
            </li>
            <li class="dislike" @click="clickDislike">
                <Icon type="thumbDown" :style="{color: showDislike}"/>
                <span class="down-text">踩</span>
                <span>({{comment.dislikeNum}})</span>
            </li>
            <li class="reply">
                <Icon type="reply"/>
                <span class="reply-text">回复</span>
                <span>({{comment.replyNum}})</span>

            </li>
        </ul>
    </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
    props:["comment"],
    data() {
        return {
            isLike: true
        }
    },
    methods: {
        clickLike() {
            if(this.isLike===true){
                alert("你已经赞过啦~~");
                return;
            }else{
                this.comment.dislikeNum --;
                this.isLike = true;
                this.comment.likeNum ++;
            }


        },
        clickDislike() {
            // 如果踩过了，就不能再踩
            if(this.isLike===false){
                alert("你已经踩过啦~~");
                return;
            }
            else{
                // 本来赞的改成踩，让赞数减一
                this.comment.likeNum --;
                // 不赞
                this.isLike = false;
                // 踩+1
                this.comment.dislikeNum ++;
            }

        }
    },
    computed: {
        showLike() {
            return this.isLike ? '#ff3838' : ''
        },
        showDislike() {
            return this.isLike ? '' : '#ff3838'
        }
    },
    components: {
        Icon
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.comment-container {
    position: relative;
    background-color: @white-bg;
    margin-bottom: 2.5em;
    padding: 1.2em 1.2em 0.5em 1.2em;
    border: 1px solid #ddd;
    border-radius: 5px;
    transition: box-shadow ease-out .5s;
    transition-delay: .2s;

    &:hover {
        box-shadow: 0 2px 2px rgb(0 0 0 / 5%), 0 15px 100px 0 rgb(0 0 75 / 13%);

        ul {
            opacity: 0.9;
        }
    }

    > header {
        position: relative;
        display: inline-block;
        margin-bottom: 1em;

        > img {
            display: inline-block;
            border-radius: 100%;
            width: 76px;
            height: 76px;
            vertical-align: middle;
        }

        > div {
            display: inline-block;
            padding-left: 0.75em;
            vertical-align: middle;

            > h3 {
                margin-top: 0;
                margin-bottom: .3em;
                font-size: 1.4rem;
            }

            > h4 {
                font-size: 0.75rem;
                color: @sub-des;
            }
        }
    }

    > .content > p {
        font-size: 1.2rem;
        line-height: 1.2;
        margin-top: 0.5em;
        margin-bottom: 1rem;
        color: rgba(0, 0, 0, 0.6);
        padding: 5px 7px;
    }

    > .actions {
        padding: 1em 0;
        margin-left: 1.5em;
        margin-bottom: 2.3em;
        opacity: .3;
        transition: opacity 1s;
        list-style: none;

        > li {
            float: left;
            width: 33.3%;
            text-align: center;
            height: 0;
            padding: .75em 0;
            font-size: 1em;
            line-height: 1;
            //color: @sub-des;
            color: #000;
            cursor: pointer;
            opacity: .75;
            transition: .5s;
            //-webkit-tap-highlight-color: rgba(0,0,0,0);
            &:hover {
                opacity: 1;
            }

            > .iconfont {
                width: 14px;
                height: 14px;
                margin-right: 5px;
            }

            > .up-text, .down-text, .reply-text {
                margin-right: 5px;
            }


        }
    }
}
</style>