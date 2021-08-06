import { getBlogNumbers } from "../api/blog";

export default {
    namespaced: true,
    state: {
        data: {},
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        async fetchBlogNumbers(ctx) {
            const resp = await getBlogNumbers();
            ctx.commit("setData", resp);
        },
    },
};
