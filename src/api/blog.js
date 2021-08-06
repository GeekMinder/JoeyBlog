import request from "./request";

// 获取博客列表
export async function getBlogs(page = 1, limit = 5, categoryId = "tech") {
    return await request.get(`/api/blog/${categoryId}`, {
        params: {
            page,
            limit,
            categoryId,
        },
    });
}

// 获取首页5个博客
export async function getFiveBlogs() {
    return await request.get("/api/show5Blogs");
}

// 获取博客数量
export async function getBlogNumbers() {
    return await request.get("/api/blog-numbers");
}
