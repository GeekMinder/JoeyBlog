<template>
    <!-- 文章组件 -->

    <div class="article-main-container">
        <!-- 标题 -->
        <h1>{{ article.title }}</h1>
        <router-link
            :to="{
                name: 'CateBlog',
                params: {
                    categoryId:
                        `${article.categoryId}` === '技术' ? 'tech' : 'life',
                },
            }"
        >
            <Icon type="back" /> 返回
        </router-link>
        <!-- 文章信息 -->
        <div class="info">
            <span>日期: {{ article.blogTime }} |</span>
            <span>浏览: {{ article.scanNumber }} |</span>
            <a href="#">评论: {{ article.commentNumber }} |</a>
            <router-link
                :to="{
                    name: 'CateBlog',
                    params: { categoryId: `${article.categoryId}` },
                }"
            >
                {{ article.categoryId }}区
            </router-link>
        </div>
        <!-- 文章主题 -->
        <div class="markdown-body" v-html="article.htmlContent"></div>
    </div>
</template>

<script>
import Icon from "@/components/Icon";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";

export default {
    props: {
        article: {
            type: Object,
            required: true,
        },
    },
    components: {
        Icon,
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
// .article-main-container {
//     overflow-x: scroll;
// }
h1 {
    font-size: 2em;
}
.info {
    margin-bottom: 2em;
    font-size: 0.8em;
    color: @sub-des;
    span,
    a {
        margin-right: 0.3em;
    }
}
.markdown-body {
    margin: 1em 0;
}
</style>
