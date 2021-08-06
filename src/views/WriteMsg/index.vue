<!--留言板-->
<template>
    <div class="msg-component">
        <!--    留言板头部-->
        <header class="msg-header">
            <h1>留言板</h1>
            <h2>已有 {{ data.total }} 人在此留言</h2>
            <p></p>
        </header>
        <!--    留言板内容-->
        <div class="msg-content">
            <form action="" class="comment-panel">
                <header>
                    <div class="avatar"></div>
                    <div class="comment-name">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="点击此处写下你的称呼"
                            maxlength="10"
                        />
                    </div>
                </header>
                <textarea
                    name="comment"
                    maxlength="999"
                    id="comment"
                    placeholder="你想说的是..."
                ></textarea>
                <div class="msg-send">
                    <button type="submit" class="msg-send-btn">发送</button>
                </div>
                <p>
                    <strong>友情说明：</strong>
                    <span>建议不要写真实姓名。请友好讨论。</span>
                </p>
            </form>
            <!--所有评论-->
            <div class="all-comment">
                <ul>
                    <li v-for="(item, i) in data.rows" :key="i">
                        <Comment :comment="item" />
                    </li>
                </ul>
            </div>
            <!--   分页       -->
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
    </div>
</template>

<script>
import Comment from "@/components/Comment";
import PageComp from "@/components/PageComp";
import { getComment } from "../../api/comment";
import fetchData from "@/mixins/fetchData.js";

export default {
    // mixins:[fetchData({total: 0, rows: []})],
    mixins: [fetchData({})],
    computed: {
        // 评论总数
        totalCom() {
            return this.fetchData().length + 1;
        },
        // 获取路由内的当前页数和每页页容量
        routeInfo() {
            const page = +this.$route.query.page || 1;
            const limit = +this.$route.query.limit || 5;
            return {
                page,
                limit,
            };
        },
    },
    components: {
        Comment,
        PageComp,
    },
    methods: {
        async fetchData() {
            return await getComment(this.routeInfo.page, this.routeInfo.limit);
        },
        handlePageChange(newPage) {
            this.$router.push({
                name: "Messages",
                query: {
                    page: newPage,
                    limit: this.routeInfo.limit,
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

.msg-component {
    overflow: scroll;
    padding: 3.5em;

    .msg-header {
        //padding-top: 1.6em;
        //padding-bottom: 3em;
        text-align: center;
        margin-bottom: 3em;

        > h1 {
            font-size: 2.6rem;
            font-weight: bold;
            line-height: 1.5;
            margin-bottom: 0.25em;
            color: @title;
        }

        > h2 {
            color: @title;
            font-size: 26px;
            font-weight: bold;
            line-height: 1.35;
            margin-bottom: 0.25em;
        }

        > p {
            font-size: 1.85rem;
            line-height: 1.625;
            letter-spacing: 0.35px;
            margin-bottom: 0.75em;
            color: #555;
        }
    }

    > .msg-content {
        margin: 3em auto;

        .comment-panel {
            position: relative;
            background-color: @white-bg;
            margin-bottom: 2.5em;
            padding: 1.2em 1.2em 0.5em 1.2em;
            border: 1px solid #ddd;
            border-radius: 5px;
            transition: box-shadow ease-out 0.5s;
            transition-delay: 0.2s;

            &:hover {
                box-shadow: 0 2px 2px rgb(0 0 0 / 5%),
                    0 15px 100px 0 rgb(0 0 75 / 13%);
            }

            > header {
                position: relative;
                display: inline-block;
                margin-bottom: 1em;

                > .avatar {
                    background: @grey;
                    display: inline-block;
                    border-radius: 100%;
                    width: 76px;
                    height: 76px;
                    vertical-align: middle;
                }

                .comment-name {
                    display: inline-block;
                    padding-left: 0.75em;
                    vertical-align: middle;

                    > input {
                        font-size: 1.7rem;
                        padding: 5px 7px;
                        border: 0;
                        width: 100%;
                    }
                }
            }

            > textarea {
                border: 0;
                width: 100%;
                height: 100px;
                font-size: 1.2rem;
                line-height: 1.2;
                resize: vertical;
                padding: 5px 7px;
            }

            > .msg-send {
                width: 100%;
                margin: 0.5em;
                text-align: right;
                padding: 0 2em;

                > .msg-send-btn {
                    width: 5em;
                    font-weight: normal;
                    font-size: 1.2rem;
                    padding: 0.5em 0.75em;
                    border: 1px solid @button-border;
                    border-radius: 5px;
                    transition: 0.35s;
                    cursor: pointer;
                    background-color: rgba(0, 0, 0, 0);

                    &:hover {
                        background-color: @success;
                    }
                }
            }

            > p {
                font-size: 14px;
                letter-spacing: 0;
                margin-bottom: 1rem;
                color: rgba(0, 0, 0, 0.6);

                > strong {
                    font-weight: bold;
                    color: #000;
                }
            }
        }
    }
}
</style>
