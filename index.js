import { Client, middleware } from '@line/bot-sdk';
import express from 'express';
import { imageMap, carousel } from './template';

const lineConfig = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || 'ohQ35vtFDgdq/n7r++Eays1NQYBGOqvxN6msZtq6IA0FhlJfq0xFk/+EmjXNvEUGbyrVQgoha8u5nYRU10+As4Gkg9F7B1gp0QM+CFxawIDCNpOoo4/w1QCp5lXpHI+NFXyZ1DbqhWzJzztcRm9iIQdB04t89/1O/w1cDnyilFU=',
    channelSecret: process.env.CHANNEL_SECRET || '9f5ed39b561becca234caf7af617ec1d',
};

const client = new Client(lineConfig);
const app = express();

let userId, userName, userPictureUrl; //getProfile用

app.post('/', middleware(lineConfig), async (req, res) => {
    // Promise
    // .all(req.body.events.map(handleEvent))
    // .then((result) => {
    //     res.json(result);
    // })
    // .catch((err) => console.log(err));
    try {
        /*{  req.body長這樣
            "events": [
                {
                    "type": "message",
                    "replyToken": "uuidhere",
                    "source": {
                        "userId": "xxxx"",
                        "type": "user"
                    },
                    "timestamp": 1592813446208,
                    "mode": "active",
                    "message": {
                        "type": "text",
                        "id": "12188948022060",
                        "text": "X"
                    }
                }
            ],
            "destination": "Uc50e84eafc37e51091664f6759c51cc2"
        }*/
        client.getProfile(req.body.events[0].source.userId).then((profile) => {
            userId = profile.userId;
            userName = profile.displayName;
            userPictureUrl = profile.pictureUrl;
            /*{ 實驗getProfile
                userId: 'uuid here',
                displayName: '杰修',
                pictureUrl: 'https://profile.line-scdn.net/xxx',
                statusMessage: '(robber)(dumpling)',
                language: 'en' 
            }*/
        });

        // 實驗getNumberOfMessageDeliveries(date: string):
        client.getNumberOfFollowers('20200622').then( (res)=> {
            console.log(`getNumberOfFollowers: ${JSON.stringify(res)}`);
        }).catch((err) => {
            console.log(err);
        });

        let result = await req.body.events.map(handleEvent);
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
});

const handleEvent = (event) => {
    switch (event.type) {
    case 'join': //加入別人的群組
    case 'follow': //追蹤
        // console.log(JSON.stringify(event));
        return client.replyMessage(event.replyToken, {
        type: 'text',
        text: `我知道你是誰喔，你的id是${event.source.userId}\n\n你在${Date(event.timestamp)}加我為好友`
        });   
    case 'message': //傳訊息給機器人
        switch (event.message.type) {
        case 'text':
            textHandler(event.replyToken, event.message.text);
            break;
        case 'sticker':
            // do sth with sticker
            return 
        }
    }
}

const textHandler = (replyToken, inputText) => {
    try{
        let resText;
        switch (inputText) {
            case '你好':
                resText = '你好啊';
                break;
            case 'test':
                resText = `測試`;
                break
            case 'Q&A':
                return client.replyMessage(replyToken, imageMap());
            case 'q&a':
                return client.replyMessage(replyToken, carousel());
            case '我是誰':
                resText = `你的id為: ${userId}\n你的名字為: ${userName}\n你的照片為: ${userPictureUrl}`;
                break;
            default:
                resText = '請親臨院所';
        }
        return client.replyMessage(replyToken, {
            type: 'text',
            text: resText
        });
    } catch (err) {
        console.log(err)
    }

}


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App now running on port ${port}`);
});
