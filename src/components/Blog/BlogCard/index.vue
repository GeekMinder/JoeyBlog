<!--博客卡片小组件-->
<template>
    <div class="blog-card-container">
        <div class="blog-header">
            <h2>
                <a href="#">{{ blogData.title }}</a>
            </h2>
            <p>
                {{ blogData.subTitle }}
            </p>
            <span>
                {{ blogData.category }} |
                <time> {{ blogData.blogTime }}</time> 发布 |
                {{ blogData.scanNumber }} 看过 |
                {{ blogData.commentNum }}
                条评论
            </span>
        </div>
        <div class="blog-thumbnail">
            <!-- <img store="../../../assets/firstBlog-white.png" alt=""> -->
            <img :src="blogData.thumb" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        blogData: {
            type: Object,
            require: true,
        },
    },
};
</script>

<style lang="less">
@import "~@/styles/var.less";
//.blog-card-container>*{
//    padding: 0 0 0 40px;
//}
.blog-card-container {
    display: flex;
    margin: 0 0 -1px -40px;
    padding-top: 1.4em;
    padding-bottom: 2.3em;
    border-bottom: 1px solid transparent;
    &:hover {
        .blog-thumbnail {
            box-shadow: 0 2px 5px rgb(0 0 25 / 10%),
                0 5px 75px 1px rgb(0 0 50 / 20%);
        }
    }
}

.blog-header {
    flex: 1 1 auto;
    padding: 0 0 0 40px;
    margin-bottom: 1.5em;
    > h2 {
        color: #333;
        font-size: 26px;
        font-weight: bold;
        line-height: 1.35;
        margin-bottom: 0.25em;

        > a {
            color: @title;
        }
    }

    > p {
        font-size: 1.2rem;
        line-height: 1.5;
        letter-spacing: 0.35px;
        margin-bottom: 1em;
        color: #555;
    }

    > span {
        color: #888;
        font-size: 0.8rem;
    }
}

.blog-thumbnail {
    height: 126px;
    //min-width: 33%;
    //max-width: 100%;
    margin-left: 8em;
    transition: box-shadow 1s ease-out;
    transition-delay: 0.5s;
    > img {
        //height: 126px;
        height: 100%;
        //width: 100%;
        border-radius: 3px;
        box-shadow: 0 2px 5px rgb(0 0 25 / 10%),
            0 5px 75px 1px rgb(0 0 50 / 20%);
    }
}
</style>
