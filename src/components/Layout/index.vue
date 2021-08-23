<template>
    <div class="layout-container">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
        <!--        <div class="right">-->
        <!--            <slot name="right"></slot>-->
        <!--        </div>-->
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
// .left{
//     position: relative;
// }
.layout-container {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
        width: 33%;
        flex: 0 0 auto;
        overflow: hidden;
    }
    .right {
        flex: 1 1 auto;
        overflow-y: scroll;
    }
}
</style>
