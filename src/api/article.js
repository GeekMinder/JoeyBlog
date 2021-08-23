import request from "./request";
export async function getArticle(id) {
    return await request.get(`/api/article/${id}`);
}
