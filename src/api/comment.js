import request from "./request";

// 获取留言
export async function getComment(page = 1, limit = 5) {
    return await request.get("/api/comment", {
        params: {
            page,
            limit,
        },
    });
}

export async function showFiveComment() {
    return await request.get("/api/show5comment");
}
