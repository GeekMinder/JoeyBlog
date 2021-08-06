<template>
    <div class="page-comp">
        <ul>
            <li class="first-page">
                <a @click="handleClick(1)" :class="{disabled:current===1}">首页</a>
            </li>
            <li class="pre-page">
                <a @click="handleClick(current - 1)" :class="{disabled:current===1}">
                    <Icon type="prePage"/>
                    上一页
                </a>
            </li>
            <li v-for="(n, i) in numbers" :key="i">
                <a :class="{ active: n === current }" @click="handleClick(n)">{{n}}</a>
            </li>
            <li class="next-page">
                <a @click="handleClick(current+1)" :class="{ disabled: current === totalPage}">
                    下一页
                    <Icon type="nextPage"/>
                </a>
            </li>
            <li class="last-page">
                <a @click="handleClick(totalPage)" :class="{ disabled: current === totalPage}">
                    尾页
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
    props: {
        current: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        },
        //页容量
        limit: {
            type: Number,
            default: 5
        },
        // 可见页码数
        visibleNumber: {
            type: Number,
            default: 5
        }
    },
    computed: {
        totalPage() {
            return Math.ceil(this.total / this.limit)
        },
        numbers() {
            let nums = [];
            for (let i = this.visibleMin; i <= this.visibleMax; i++) {
                nums.push(i);
            }
            return nums;
        },
        visibleMin() {  // 最小数字
            let min = this.current - Math.floor(this.visibleNumber / 2);
            if (min < 1) {
                min = 1;
            }
            return min;
        },
        visibleMax() {
            let max = this.visibleMin + this.visibleNumber - 1;
            if (max > this.totalPage) {
                max = this.totalPage;
            }
            return max;
        }
    },
    methods: {
        // 点击函数
        handleClick(newPage) {
            console.log(newPage);
            if (newPage < 1) {
                newPage = 1;
            }
            if (newPage > this.totalPage) {
                newPage = this.totalPage;
            }
            if (newPage === this.current) {
                return;
            }
            this.$emit('pageChange', newPage);
        }
    },
    components: {
        Icon
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.page-comp {
    text-align: center;

    > ul {
        margin: 1.4em auto 0;
        //text-align: center;
        > li {
            line-height: 1.5;
            font-size: 0.8em;
            display: inline-block;
            padding: 0 5px;
            > a {
                -moz-user-select: none; /*火狐*/
                -webkit-user-select: none; /*webkit浏览器*/
                -ms-user-select: none; /*IE10*/
                user-select: none;
                color: @black;
                padding: 0.8em 1.5em;
                border: 1px solid #ddd;
                border-bottom: 1px solid #ddd !important;
                border-radius: 5px;
                background-color: #fff;
                box-shadow: 0 2px 2px rgb(0 0 0 / 5%), 0 10px 75px 0 rgb(0 0 75 / 13%);
                transition: background-color .3s ease-out, box-shadow .5s ease-out;
                transition-delay: .1s;

                &:hover {
                    cursor: pointer;
                    background-color: #f3f5f8;
                }
                &.disabled{
                    color: @lightWords;
                    cursor: not-allowed;
                }
                &.active {
                    background-color: #eee;
                    color: #666;
                    pointer-events: none;
                }
            }
        }
    }
}
</style>