<template>
    <ul class="func-ul">
        <li class="data-subtitle">
            <router-link :to="{name:'Home'}" href="#">
                <div class="icon">
                    <Icon type="home"/>
                </div>
            </router-link>
            <div class="pop">
                <span>返回主页</span>
            </div>
        </li>
        <li class="data-subtitle">
            <router-link :to="{name:'Messages'}" href="#">
                <div class="icon">
                    <Icon type="message"/>
                </div>

            </router-link>
            <div class="pop">
                <span>留言板</span>
            </div>
        </li>
        <li class="data-subtitle">
            <a href="#">
                <div class="icon">
                    <Icon type="subRSS"/>
                </div>
            </a>
            <div class="pop">
                <span>订阅SSR</span>
            </div>
        </li>
        <li class="data-subtitle">
            <a href="#">
                <div class="icon">
                    <Icon type="switchFont"/>
                </div>
            </a>
            <div class="pop">
                <span>切换字体</span>
            </div>
        </li>
        <li class="data-subtitle">
            <a href="#">
                <div class="icon">
                    <Icon type="nightMode"/>
                </div>
            </a>
            <div class="pop">
                <span>夜间模式</span>
            </div>
        </li>
        <li class="data-subtitle" @click="handleFullScreen">
            <a>
                <div class="icon">
                    <Icon type="fullScreen"/>
                </div>
            </a>
            <div class="pop">
                <span>全屏</span>
            </div>
        </li>
    </ul>
</template>

<script>
import Icon from "@/components/Icon";

export default {
    components: {
        Icon,
    },
    methods:{
        handleFullScreen(){
            let element = document.documentElement;
            // 判断是否已经是全屏
            // 如果是全屏，退出
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {    // 否则，进入全屏
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            // 改变当前全屏状态
            this.fullscreen = !this.fullscreen;
        }
    }
};
</script>

<style lang="less">
@import "~@/styles/var.less";

.func-ul {
    // padding: 20px;
    text-align: center;
    color: @grey;
    @itemHeight: 30px;

    .data-subtitle {
        display: inline-block;
        // width: @itemHeight;
        height: @itemHeight;
        line-height: @itemHeight;
        margin: 14px 10px;
        // padding: 6px;
        position: relative;
        //box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 3px 18px rgb(0 0 0 / 20%);
        //border-color: rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.45) rgba(255, 255, 255, 0.55);

        &:hover {
            .pop {
                opacity: 1;
            }
        }
    }
}

.data-subtitle > a {
    display: flex;
    cursor: pointer;
    border: 2px solid;
    border-radius: 50%;
    align-items: center;
    // font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 3px 18px rgb(0 0 0 / 20%);
    border-color: rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.45) rgba(255, 255, 255, 0.55);

    &:hover{
        background-color: rgba(255,255,255,0.5);
    }
}

.data-subtitle::after {
}

.icon {
    //font-size: 26px;
    width: 30px;
    // height: 30px;
}

.pop {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 12px;
    bottom: -20px;
    transition: 0.5s;
    opacity: 0;

    //padding: 10px 15px;
    span {
        //width: 100px;
        //height: 12px;
        font-size: 10px;
        line-height: 10px;

    }

    //&::after{
    //    content: "";
    //    position: absolute;
    //    left: 50%;
    //    transform: translateX(-50%)
    //}
}

</style>
