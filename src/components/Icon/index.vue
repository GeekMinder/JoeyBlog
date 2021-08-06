// 图标文件
<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
// 图标列表对象
const iconMap = {
    home:"icon-home",
    message:"icon-messages",
    subRSS:"icon-rss",
    switchFont:"icon-qiehuan",
    nightMode:"icon-yejianmoshi",
    fullScreen:"icon-fangda",
    more:"icon-zujian-icon-32",
    writeMsg:"icon-xiepinglun",
    prePage:"icon-shangyiye-xianxing3-0",
    nextPage:"icon-xiayiye-xianxing3-0",
    thumbUp:"icon-icon_xiaolian-mian",
    thumbDown:"icon-kulian",
    reply:"icon-icon_huifu-mian",
    life:"icon-icon",
    tech:"icon-20jishu",
    back:"icon-tuihui"
}
export const types = Object.keys(iconMap);
export default {
    props:{
        type:{
            type:String,
            required:true
        }
    },
    computed:{
        fontClass(){
            return iconMap[this.type];
        }
    }
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2701333_jy2vc90ghbl.css";
</style>