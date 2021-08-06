// !important 不要忘记导入！！！
import Vuex from "vuex";
import Vue from "vue";
import comment from "./comment";
import blog from "./blog";
import total from "./total";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        comment,
        blog,
        total,
    },
    strict: true,
});
