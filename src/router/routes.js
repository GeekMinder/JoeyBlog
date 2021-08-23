// import Home from "@/views/Home";
// import Blog from "@/views/Blog";
// import WriteMsg from "@/views/WriteMsg";
// import BlogClassification from "@/views/Classification";
// import Article from "@/views/Article";

// 假进度条
import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";

// 进度条配置
configure({
    trickleSpeed: 20,
    showSpinner: true,
});

function delay(duration) {
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove();
        }, duration);
    });
}

function getPageComponent(pageCompResolver) {
    return async () => {
        start();
        if (process.env.NODE_ENV === "development") {
            await delay(2000);
        }
        const comp = await pageCompResolver();
        done();
        return comp;
    };
}

export default [
    {
        name: "Home",
        path: "/",
        component: getPageComponent(() =>
            import(/* webpackChunkName: "home" */ "@/views/Home")
        ),
        meta: {
            title: "首页",
        },
    },
    {
        // 留言板
        path: "/messages",
        name: "Messages",
        component: getPageComponent(() => import("@/views/WriteMsg")),
        meta: {
            title: "留言板",
        },
    },
    {
        // 博客分类列表
        path: "/blog",
        name: "BlogClassification",
        component: getPageComponent(() => import("@/views/Classification")),
        meta: {
            title: "博客分类",
        },
    },
    {
        // 博客列表
        path: "/blog/:categoryId",
        name: "CateBlog",
        component: getPageComponent(() => import("@/views/Blog")),
        meta: {
            title: "博客列表",
        },
    },
    {
        // 具体文章
        path: "/article/:id",
        name: "Article",
        component: getPageComponent(() => import("@/views/Article")),
        meta: {
            title: "文章",
        },
    },
];
