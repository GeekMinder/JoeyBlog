import axios from "axios";

const ins = axios.create();
ins.interceptors.response.use(function (resp) {
    if (resp.data.code !== 0) {
        // todo 需要一个错误提示
        console.log("数据error");
        return null;
    }
    return resp.data.data;
});
export default ins;