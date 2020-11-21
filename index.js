import { Client, middleware } from '@line/bot-sdk';
import express from 'express';
import { imageMap, carousel } from './template';
import { questions, mapReceiver } from './text';

const lineConfig = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || 'ohQ35vtFDgdq/n7r++Eays1NQYBGOqvxN6msZtq6IA0FhlJfq0xFk/+EmjXNvEUGbyrVQgoha8u5nYRU10+As4Gkg9F7B1gp0QM+CFxawIDCNpOoo4/w1QCp5lXpHI+NFXyZ1DbqhWzJzztcRm9iIQdB04t89/1O/w1cDnyilFU=',
    channelSecret: process.env.CHANNEL_SECRET || '9f5ed39b561becca234caf7af617ec1d',
};

const client = new Client(lineConfig);
const app = express();

let userId, userName, userPictureUrl; //getProfile用

let userArray = [];

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
        await client.getProfile(req.body.events[0].source.userId).then((profile) => {
            userId = profile.userId;
            userName = profile.displayName;
            userPictureUrl = profile.pictureUrl;
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
        // return client.replyMessage(event.replyToken, {
        // type: 'text',
        // text: `我知道你是誰喔，你的id是${event.source.userId}\n\n你在${Date(event.timestamp)}加我為好友`
        // });   
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: `Hello ${userName}!\n感謝您一年來的付出\n您已受邀參加本次的Tesla聖誕饗宴\n會由我來幫您尋找您的交換禮物送禮對象!!\n\n請輸入ok來開始回答問題！`
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



// let qCounter = 0;
// let receiver;
const textHandler = (replyToken, inputText) => {
    try{
        let resText;

        let userCheck = userArray.find(user => user.name === userName);
        console.log('userArray ===> ', userArray);
        console.log('userCheck ===> ', userCheck);

        if (!userCheck) {
            userArray.push({
                name: userName,
                qCounter: 0,
                receiver: null
            });
            console.log('second userArray ===> ',userArray)
        }

        userCheck = userArray.find(user => user.name === userName);
        console.log('second userCheck ===> ', userCheck);

        if(inputText === 'rs') {
            userCheck.qCounter = 0;
            console.log('重新');
        }
        
        if(inputText) {
            if(userCheck.qCounter === 1){
                if(inputText !== 'Danny'){
                    userCheck.receiver = mapReceiver[inputText];
                    if(userCheck.receiver === undefined) {
                        return client.replyMessage(replyToken, {
                            type: 'text',
                            text: `奇怪，不太對喔～ 請檢查你名字字首有沒有大寫，或是把自己名字拼錯呢？`
                        });
                    }
                } else {
                    // 判斷Danny
                    return client.replyMessage(replyToken, {
                        type: 'text',
                        text: '請問你是 李展源 還是 李治 呢？'
                    });
                }
            }
            if(userCheck.qCounter < 5) {
                resText = questions[userCheck.qCounter];
                userCheck.qCounter++;
            } else {
                userCheck.qCounter = 0;
                resText = `漂亮!!${userName}果然是特斯拉的傑出員工!!\n您這次的送禮對象為 ${userCheck.receiver}\n請精心為他挑選禮品並附上手寫小卡片一張\uDBC0\uDC84`;
            }
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
