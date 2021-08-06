<template>
    <div class="personal-profile-container">
        <header class="profile">
            <img src="../../assets/profile.jpeg" alt=""/>
            <a href="">
                <hgroup>
                    <h1>倪嘉慧的博客</h1>
                    <h2>Joey's Blog</h2>
                </hgroup>
            </a>
        </header>
        <!--  圆圈功能      -->
        <section class="profile-function">
            <ProFunction/>
        </section>
        <!--   自我介绍     -->
        <section class="intro">
            <Intro/>
        </section>
        <section class="comment-display-area">
            <ShowMessage :commentAllList="commentAllList"/>
        </section>
        <footer class="footer">
            <Footer/>
        </footer>
    </div>
</template>

<script>
import ProFunction from "@/components/PersonalProfile/ProFunction";
import Intro from "@/components/PersonalProfile/Intro";
import ShowMessage from "@/components/PersonalProfile/ShowMessage";
import Footer from "@/components/PersonalProfile/Footer";

import {mapState} from "vuex";
export default {
    computed: mapState("comment",{commentAllList:"data"}),
    components: {
        ProFunction,
        Intro,
        ShowMessage,
        Footer
    },
};
</script>

<style scoped lang="less">
// .widget {
//     margin-top: 5em;
//     opacity: 1;
//     transition: opacity 1s;
// }
.personal-profile-container {
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px 0;
    background: url("../../assets/back1.jpeg");
    //background: #ddd;
    .profile{
        margin-top: 3.5em;
        text-align: center;
        > img {
            width: 75px;
            height: 75px;
            margin-top: 5px;
            margin-bottom: 10px;
            border-radius: 100%;
            box-shadow: 0 0 0 2px rgb(255 255 255 / 50%), 0 2px 20px 3px rgb(0 0 0 / 25%);
        }
    }
}

//header {
//    //margin: 0 auto;
//    margin-top: 3.5em;
//    text-align: center;
//}

//header > img {
//    max-width: 75px;
//    margin-top: 5px;
//    margin-bottom: 10px;
//    border-radius: 100%;
//    box-shadow: rgb(24 26 27 / 50%) 0 0 0 2px, rgb(0 0 0 / 25%) 0 2px 20px 3px;
//}

hgroup > h1 {
    margin-top: 0.75em;
    font-weight:normal;
    font-size: 1.3rem;
    color: rgba(232, 230, 227, 0.8);
    line-height: 1;
}

hgroup > h2 {
    margin-top: 0.375em;
    font-weight: normal;
    font-size: 1rem;
    color: rgba(232, 230, 227, 0.7);
}
</style>
