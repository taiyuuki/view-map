import express, { Request, Response, NextFunction } from "express";
import axios from "axios";
const app = express();
const router = express.Router();

const setHeaders = function(
    _: Request,
    response: Response,
    next: NextFunction
) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    next();
};

let time = Date.now();

let result = {} as { data: unknown };
router.get("/list", async (_: Request, res: Response) => {
    if (Date.now() - time > 1200000 || !("data" in result)) {
        console.log("发送新的请求数据");
        const value = await axios.get(
            "https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf"
        );
        result = value;
        time = Date.now();
    } else {
        console.log("发送缓存数据");
    }
    res.json(result.data);
});

let daily = {} as { data: unknown }
router.get('/daily', async (_: Request, res: Response) => {
    if (Date.now() - time > 1200000 || !("data" in daily)) {
        console.log("发送新的请求数据");
        const value = await axios.get('https://api.inews.qq.com/newsqa/v1/query/pubished/daily/list?adCode=110000&limit=30');
        daily = value;
        time = Date.now()
    } else {
        console.log("发送缓存数据");
    }
    res.json(daily.data)
})

app.use(setHeaders);
app.use("/api", router);

app.listen("3030", () => {
    console.log("http://localhost:3030/api");
});