<template>
    <div class="blog-classification-container">
        <!--  标题  -->
        <header class="blog-cla-header">
            <span>博客分类</span>
            <!--            展示时间-->
            <div class="blog-time">
                <span>当前时间是：{{ FormatTime(nowtime) }}</span>
                <p>{{ showGreeting }}</p>
            </div>
        </header>
        <!--        博客分类页-->
        <div class="blog-class">
            <!--            技术分类-->
            <div class="tech-class">
                <router-link
                    :to="{ name: 'CateBlog', params: { categoryId: 'tech' } }"
                >
                    <span>技术</span>
                    <Icon type="tech" />
                </router-link>
                <!-- TODO 数字bug  -->
                <span>技术区现在拥有{{ blogNumbers.tech }}篇博客啦</span>
            </div>
            <!--            生活分类-->
            <div class="life-class">
                <router-link
                    :to="{ name: 'CateBlog', params: { categoryId: 'life' } }"
                >
                    <span>生活</span>
                    <Icon type="life" />
                </router-link>
                <!-- TODO 数字bug  -->
                <span>生活区现在拥有{{ blogNumbers.life }}篇博客啦</span>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
    created() {
        this.$store.dispatch("total/fetchBlogNumbers");
    },
    components: {
        Icon,
    },
    data() {
        return {
            nowtime: new Date(),
        };
    },
    mounted() {
        let self = this;
        this.timer = setInterval(function() {
            self.nowtime = new Date().toLocaleString();
        });
    },
    methods: {
        // 获取小时
        fetchHour() {
            let date = new Date();
            return date.getHours() + 1;
        },
        // 返回完整时间
        FormatTime() {
            let date = new Date();
            let year = this.formatTime(date.getFullYear());
            let month = this.formatTime(date.getMonth() + 1);
            let day = this.formatTime(date.getDate());
            let hour = this.formatTime(date.getHours());
            let minute = this.formatTime(date.getMinutes());
            let second = this.formatTime(date.getSeconds());
            let weekday = date.getDay();
            let weeks = [
                "星期日",
                "星期一",
                "星期二",
                "星期三",
                "星期四",
                "星期五",
                "星期六",
            ];
            let week = weeks[weekday];
            return (
                year +
                "-" +
                month +
                "-" +
                day +
                "  " +
                week +
                "  " +
                hour +
                ":" +
                minute +
                ":" +
                second
            );
        },
        formatTime(n) {
            if (n < 10) {
                return "0" + n;
            } else {
                return n;
            }
        },
    },
    computed: {
        // 欢迎语懒人写法
        showGreeting() {
            if (this.fetchHour() < 6) {
                return "凌晨好!这么早还来看我的博客~~";
            } else if (this.fetchHour() < 9) {
                return "早上好!记得吃早餐~~";
            } else if (this.fetchHour() < 12) {
                return "上午好!";
            } else if (this.fetchHour() < 14) {
                return "中午好!";
            } else if (this.fetchHour() < 17) {
                return "下午好!";
            } else if (this.fetchHour() < 19) {
                return "傍晚好!";
            } else if (this.fetchHour() < 22) {
                return "晚上好!";
            } else {
                return "夜深了!";
            }
        },
        ...mapState("total", { blogNumbers: "data" }),
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.blog-classification-container {
    padding: 3.5em;

    > .blog-cla-header {
        text-align: center;
        margin-bottom: 3em;

        > span {
            font-size: 2.6rem;
            font-weight: bold;
            line-height: 1.5;
            margin-bottom: 0.25em;
            color: @title;
        }

        > .blog-time > * {
            color: @title;
            font-size: 26px;
            font-weight: bold;
            line-height: 1.35;
            margin-bottom: 0.25em;
        }
    }

    > .blog-class {
        margin-top: 5em;
        text-align: center;

        > .tech-class,
        > .life-class {
            position: relative;
            //display: flex;
            //justify-content: space-around;
            margin-bottom: 2.5em;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 1em 2em;
            transition-delay: 0.2s;
            transition: box-shadow ease-out 0.5s;
            box-shadow: 0 2px 5px rgb(0 0 25 / 10%),
                0 5px 75px 1px rgb(0 0 50 / 20%);

            &:hover {
                box-shadow: 0 2px 2px rgb(0 0 0 / 5%),
                    0 15px 100px 0 rgb(0 0 75 / 13%);
                cursor: pointer;
            }

            > a > {
                display: block;
                height: 100%;
                width: 100%;
                color: @title;

                > span {
                    font-size: 2.5em;
                    margin-right: 0.3em;
                }

                > .iconfont {
                    font-size: 2.5em;
                }
            }

            > span {
                position: absolute;
                font-size: 1em;
                line-height: 3em;
                right: 1em;
                bottom: 0.1em;
                color: @sub-des;
            }
        }
    }
}
</style>
