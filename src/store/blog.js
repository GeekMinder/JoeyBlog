import { getFiveBlogs } from "../api/blog";

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
        async fetchFiveBlogs(ctx) {
            const resp = await getFiveBlogs();
            ctx.commit("setData", resp);
        },
    },
};
