<!--右侧主界面
    主要展示最新的5个博客
    以及下一页
-->
<template>
    <div class="home-container">
        <div class="blog-card">
            <ul>
                <li v-for="(item, i) in fiveBlogs" :key="i">
                    <BlogCard :blogData="item" />
                </li>
            </ul>
        </div>

        <!--        <button>下一页</button>-->
        <div class="next-page">
            <button>
                下一页
                <Icon type="nextPage" />
            </button>
        </div>
    </div>
</template>

<script>
// import BlogCard from "./BlogCard"
import BlogCard from "@/components/Blog/BlogCard";
import Icon from "@/components/Icon";
import { mapState } from "vuex";

export default {
    created() {
        this.$store.dispatch("blog/fetchFiveBlogs");
    },
    computed: mapState("blog", { fiveBlogs: "data" }),
    components: {
        BlogCard,
        Icon,
    },
};
</script>

<style scoped lang="less">
.home-container {
    margin-left: 5%;
    max-width: 100%;
    padding: 4em;
    width: calc(100% - 5%);
    margin-right: auto;

    > .blog-card > ul > li {
        margin-bottom: 1em;
        &:hover {
            cursor: pointer;
        }
    }

    .blog-card {
    }

    .next-page {
        //position: relative;
        bottom: 3em;
        margin: 2em auto 0;

        > button {
            left: 0;
            text-align: center;
            width: 134px;
            height: 50px;
            font-size: 1.6rem;
            border: 1px solid #ddd;
            border-bottom: 1px solid #ddd !important;
            border-radius: 5px;
            background-color: #fff;
            transition-delay: 0.1s;
            transition: background-color 0.3s ease-out, box-shadow 0.5s ease-out;

            &:hover {
                box-shadow: 0 2px 2px rgb(0 0 0 / 5%),
                    0 10px 75px 0 rgb(0 0 75 / 13%);
            }
        }
    }
}
</style>
