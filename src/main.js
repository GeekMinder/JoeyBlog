import "./mock";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/global.less";
import "./eventBus";
store.dispatch("comment/fetchComment");
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

import { getArticle } from "./api/article";
getArticle("123").then((res) => {
  console.log(res);
});
