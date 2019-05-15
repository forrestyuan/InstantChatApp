import util from './utils.js'
const https = require('https');

async function getTips(ctx) {
    ctx.body = {
        tips: 'Life was like a box of  chocolates, you never know what you gonna get!!'
    }
}
//读取聊天记录
async function readHistory(ctx) {
    const data = ctx.request.body;

    let chatHistory = util.readHistory('./history.txt').toString();
    let chatList = chatHistory.split('(**foxchat**)');
    if (chatList.length) {
        ctx.body = {
            isHas: true,
            content: chatList
        };
    } else {
        ctx.body = {
            isHas: false,
            content: chatHistory
        }
    }
}

//根据用户id返回聊天列表
async function getChatList(ctx) {
    const data = ctx.request.body;
    let from_id = data.uid;
    let to_id = "2";
    const dataRes = [{
            url: "chat",
            headshot: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2800627808,1175049666&fm=26&gp=0.jpg",
            username: "FoxYuan",
            date: "14:13",
            content: "努力，加油",
            num: 0,
            to_id
        },
        {
            url: "chat",
            headshot: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1782007995,2737650431&fm=26&gp=0.jpg",
            username: "A-张Flower",
            date: "08:15",
            content: "努力，加油111",
            num: 1,
            to_id
        },
        {
            url: "chat",
            headshot: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2672814607,1036076810&fm=26&gp=0.jpg",
            username: "老妹",
            date: "06:10",
            content: "努力，加油222",
            num: 2,
            to_id
        },
        {
            url: "chat",
            headshot: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1560824271,3030791250&fm=26&gp=0.jpg",
            username: "狗子",
            date: "周四",
            content: "努力，加油333",
            num: 3,
            to_id
        },
        {
            url: "chat",
            headshot: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2729199016,1572661915&fm=26&gp=0.jpg",
            username: "初心日志",
            date: "周三",
            content: "努力，加油444",
            num: 0,
            to_id
        },
        {
            url: "chat",
            headshot: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=432857512,2858384365&fm=26&gp=0.jpg",
            username: "CDC1",
            date: "4月19日",
            content: "努力，加油555",
            num: 0,
            to_id
        },
        {
            url: "chat",
            headshot: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=291418126,2691521106&fm=26&gp=0.jpg",
            username: "CDC2",
            date: "2019-04-19",
            content: "努力，加油555",
            num: 0,
            to_id
        },
        {
            url: "chat",
            headshot: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2646015192,1688539084&fm=26&gp=0.jpg",
            username: "CDC3",
            date: "2019-04-19",
            content: "努力，加油555",
            num: 0,
            to_id
        },
        {
            url: "chat",
            headshot: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3172370846,1164517406&fm=26&gp=0.jpg",
            username: "CDC4",
            date: "2019-04-19",
            content: "努力，加油555",
            num: 0,
            to_id
        },
        {
            url: "chat",
            headshot: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1241913545,4193526204&fm=26&gp=0.jpg",
            username: "CDC5",
            date: "2019-04-19",
            content: "努力，加油555",
            num: 0,
            to_id
        },
        {
            url: "chat",
            headshot: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2950227687,2414918568&fm=26&gp=0.jpg",
            username: "CDC6",
            date: "2019-04-19",
            content: "努力，加油555",
            num: 0,
            to_id
        },
        {
            url: "chat",
            headshot: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2358667515,2316835497&fm=26&gp=0.jpg",
            username: "CDC7",
            date: "2019-04-19",
            content: "努力，加油555",
            num: 0,
            to_id
        },
        {
            url: "chat",
            headshot: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2243117866,2661991791&fm=26&gp=0.jpg",
            username: "CDC8",
            date: "2019-04-19",
            content: "努力，加油555",
            num: 0,
            to_id
        }
    ];
    ctx.body = {
        list: dataRes
    };
}
//抓取页面
async function grabPageData(ctx) {
    const data = ctx.request.body;
    let url = data.url;
    let res = '';
    ctx.body = {
        res
    }
}

export default {
    getTips,
    readHistory,
    getChatList,
    grabPageData
};