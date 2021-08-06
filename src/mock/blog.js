import Mock from "mockjs";
import qs from "querystring";

// 科技博客
Mock.mock(/^\/api\/blog\/tech(\?.+)?$/, "get", function(options) {
    const query = qs.parse(options.url);
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            "total|100": 0,
            [`rows|${query.limit || 10}`]: [
                {
                    id: "@guid",
                    title: "@ctitle(1,15)",
                    subTitle: "@cparagraph(1, 10)",
                    category: "技术",
                    "scanNumber|0-100": 0,
                    "commentNum|0-300": 30,
                    "thumb|1": ["@image(200x126, @color, #fff, 'Hello')"],
                    blogTime: "@pick([2019,2020,2021])-@time('MM-dd')",
                },
            ],
        },
    });
});

// 生活博客
Mock.mock(/^\/api\/blog\/life(\?.+)?$/, "get", function(options) {
    const query = qs.parse(options.url);
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            "total|50": 0,
            [`rows|${query.limit || 10}`]: [
                {
                    id: "@guid",
                    title: "@ctitle(1,15)",
                    subTitle: "@cparagraph(1, 10)",
                    category: "生活",
                    "scanNumber|0-100": 0,
                    "commentNum|0-300": 30,
                    "thumb|1": ["@image(200x126, @color, #fff, 'Hello')"],
                    blogTime: "@pick([2019,2020,2021])-@time('MM-dd')",
                },
            ],
        },
    });
});

// 首页展示
Mock.mock("/api/show5Blogs", "get", {
    code: 0,
    msg: "",
    "data|5": [
        {
            id: "@guid",
            title: "@ctitle(5,15)",
            subTitle: "@cparagraph(1, 10)",
            category: "@pick(['tech','life'])",
            "scanNumber|0-100": 0,
            "commentNum|0-300": 30,
            "thumb|1": ["@image(200x126, @color, #fff, 'Hello')"],
            blogTime: "@pick([2019,2020,2021])-@time('MM-dd')",
        },
    ],
});

// 获取博客数量

Mock.mock("/api/blog-numbers", "get", {
    code: 0,
    mgs: "",
    data: {
        tech: 100,
        life: 50,
    },
});
