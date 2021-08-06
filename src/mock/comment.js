import Mock from "mockjs";
import qs from "querystring";

// 留言板的留言
Mock.mock(/^\/api\/comment(\?.+)?$/, "get", function(options) {
    const query = qs.parse(options.url);
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            "total|61": 0,
            [`rows|${query.limit || 5}`]: [
                {
                    nickName: "@name",
                    comText: "@sentence(3,18)",
                    commentTime: "@pick([2019,2020,2021])-@time('MM-dd')",
                    likeNum: "@integer(50, 100)",
                    dislikeNum: "@integer(0,3)",
                    replyNum: "@integer(0,20)",
                },
            ],
        },
    });
});

// 首页的留言
Mock.mock("/api/show5comment", "get", {
    code: 0,
    msg: "",
    "data|10": [
        {
            nickName: "@name",
            comText: "@sentence(3,18)",
            commentTime: "@datetime()",
        },
    ],
});
