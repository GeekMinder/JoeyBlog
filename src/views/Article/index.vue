<template>
    <div class="main-container">
        <div class="left-container" ref="mainContainer">
            <ArticleContainer :article="data" v-if="data" />
            <!-- 文章 -->
            <!-- TODO 评论区 -->
            <!-- <div class="comment-container">
                
            </div> -->
        </div>
        <div class="right-container">
            <!-- 目录区 -->
            <TocContainer :toc="data.toc" />
        </div>
    </div>
</template>

<script>
// TODO 当初layout在写的时候没注意好，以后重写下layout。
// import Layout from "@/components/Layout";
import ArticleContainer from "@/components/Article/ArticleContainer";
import TocContainer from "@/components/Article/TocContainer";
import { getArticle } from "@/api/article";
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll.js";

export default {
    mixins: [fetchData({ data: null }), mainScroll("mainContainer")],
    components: {
        ArticleContainer,
        TocContainer,
    },
    methods: {
        async fetchData() {
            const resp = await getArticle(this.$route.params.id);
            if (!resp) {
                // 没有文章数据
                this.$route.push("/404");
                return;
            }
            // TODO 网页标题切换
            // titleController.setRouteTitle(resp.title);
            return resp;
        },
    },
    // updated() {
    //     const hash = location.hash;
    //     location.hash = "";
    //     setTimeout(() => {
    //         location.hash = hash;
    //     }, 50);
    // },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.main-container {
    width: 100%;
    height: 100%;
    display: flex;
    scroll-behavior: smooth;
    padding: 1.2em;
    position: relative;
    > .left-container {
        flex: 1 1 auto;
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 10px;
    }
    > .right-container {
        flex: 0 0 auto;
        overflow-y: scroll;
        overflow-x: hidden;
        width: 250px;
        padding: 1.2em;
        border-left: 3px solid @darker-grey;
    }
}
</style>
