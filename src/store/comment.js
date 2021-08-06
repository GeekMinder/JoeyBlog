import {showFiveComment} from "../api/comment";

export default {
    namespaced: true,
    state: {
        data: []
    },
    mutations: {
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchComment(ctx) {
            const resp = await showFiveComment();
            ctx.commit("setData", resp);
        }
    }
}