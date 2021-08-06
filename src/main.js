import "./mock";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/global.less";
store.dispatch("comment/fetchComment");
Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
// import { getComment } from "./api/comment";
// getComment().then((res) => {
//     console.log(res);
// });
