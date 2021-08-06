import Home from "@/views/Home";
import Blog from "@/views/Blog";
import WriteMsg from "@/views/WriteMsg";
import BlogClassification from "@/views/Classification";
export default [
    {
        // 主页
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        // 留言板
        path: "/messages",
        name: "Messages",
        component: WriteMsg,
    },
    {
        // 博客分类
        path: "/blog",
        name: "BlogClassification",
        component: BlogClassification,
    },
    {
        // 具体分类博客
        path: "/blog/:categoryId",
        name: "CateBlog",
        component: Blog,
    },
];
