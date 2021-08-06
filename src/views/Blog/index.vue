<!--博客展示列表-->
<template>
    <div class="blog-container">
        <!--    标题-->
        <header class="blog-container-header">
            <div>
                <span>{{ whichClass }}版</span>
                <Icon :type="this.routeInfo.categoryId" />
            </div>
            <div>
                <router-link :to="{ name: 'BlogClassification' }">
                    <span>回到分类</span>
                    <Icon type="back" />
                </router-link>
            </div>
        </header>
        <!--    博客区-->
        <div class="blog-main">
            <ul>
                <li v-for="(item, i) in data.rows" :key="i">
                    <BlogCard :blogData="item" />
                </li>
            </ul>
        </div>
        <!--    翻页区-->
        <div class="page-container">
            <PageComp
                v-if="data.total"
                :visibleNumber="5"
                :total="data.total"
                :limit="routeInfo.limit"
                :current="routeInfo.page"
                @pageChange="handlePageChange($event)"
            />
        </div>
    </div>
</template>

<script>
import PageComp from "@/components/PageComp";
import BlogCard from "@/components/Blog/BlogCard";
import Icon from "@/components/Icon";
import fetchData from "@/mixins/fetchData.js";
import { getBlogs } from "../../api/blog";

export default {
    mixins: [fetchData({})],
    computed: {
        // 展示是什么区的函数
        whichClass() {
            if (this.routeInfo.categoryId === "tech") {
                return "技术";
            } else if (this.routeInfo.categoryId === "life") {
                return "生活";
            } else {
                return "";
            }
        },
        totalBlog() {
            return this.fetchData().length + 1;
        },
        // 获取路由内的当前页数和每页页容量
        routeInfo() {
            const page = +this.$route.query.page || 1;
            const limit = +this.$route.query.limit || 5;
            const categoryId = this.$route.params.categoryId;
            return {
                page,
                limit,
                categoryId,
            };
        },
    },
    components: {
        PageComp,
        BlogCard,
        Icon,
    },
    methods: {
        async fetchData() {
            return await getBlogs(
                this.routeInfo.page,
                this.routeInfo.limit,
                this.routeInfo.categoryId
            );
        },
        handlePageChange(newPage) {
            this.$router.push({
                name: "CateBlog",
                query: {
                    page: newPage,
                    limit: this.routeInfo.limit,
                    categoryId: this.routeInfo.categoryId,
                },
            });
        },
    },
    watch: {
        async $route() {
            // 拿到留言数据
            this.data = await this.fetchData();
        },
    },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-container {
    margin-left: 5%;
    max-width: 100%;
    padding: 4em;
    width: calc(100% - 5%);
    margin-right: auto;

    > .blog-container-header > div {
        display: inline-block;
        margin-right: 3em;
        > .iconfont {
            margin-left: 0.5em;
        }
        > a {
            color: @primary;
            > .iconfont {
                margin-left: 0.5em;
            }
        }
    }
    > .blog-main > ul > li {
        margin-bottom: 1em;
        &:hover {
            cursor: pointer;
        }
    }
}
</style>
