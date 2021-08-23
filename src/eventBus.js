// 事件总线
import Vue from "vue";
const app = new Vue({});
Vue.prototype.$bus = app;

export default app;
