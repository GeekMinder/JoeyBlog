<template>
    <p class="intro-p">
        {{ introText.content }}
    </p>
</template>

<script>
export default {
    data() {
        return {
            introText:
                {
                    content: "hi!我是一位自学前端的coder！" +
                        "很高兴在这里遇见你！每天都要开心哦(＾Ｕ＾)ノ~ＹＯ"
                }
        }
    }
}
</script>

<style lang="less">
    .intro-p{
        margin-top: 1.5em;
        padding: 0 5em;
        font-size: 12px;
        color: rgba(255,255,255,0.7);
    }
</style>