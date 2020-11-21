# create rich menu -> 可以用postman
curl -v -X POST https://api.line.me/v2/bot/richmenu \
-H 'Authorization: Bearer /Cc+gz2XwOLhUVIjYdVT0Df8d7l1Y5enFdv6BnMX7WyWSNwEaEKuRc5EnwQrTlS9mVFYp4vGoPdEtek62iRsb3k1lMw1UHaPQAEV9lqqeA+janICpbwg88WXE7Vpx+bmn0O2LtMEvTWY98ml3DPqtAdB04t89/1O/w1cDnyilFU=' \
-H 'Content-Type: application/json' \
-d \
'{
    "size": {
    "width": 2500,
    "height": 1686
    },
    "selected": false,
    "name": "appx richmenu 1",
    "chatBarText": "點開以查看更多",
    "areas": [
        {
            "bounds": {
                "x": 0,
                "y": 0,
                "width": 833,
                "height": 843
            },
            "action": {
                "type":"uri",
                "label":"官方網站",
                "uri":"http://pei.usa543.com/LineHome/home.html"
            }
        },
        {
            "bounds": {
                "x": 833,
                "y": 0,
                "width": 833,
                "height": 843
            },
            "action": {
                "type":"message",
                "label":"Q&A",
                "text":"Q&A"
            }
        },
        {
            "bounds": {
                "x": 1666,
                "y": 0,
                "width": 833,
                "height": 843
            },
            "action": {
                "type":"uri",
                "label":"報告書",
                "uri":"http://kohosp.asuscomm.com/eDataExchP"
            }
        },
        {
            "bounds": {
                "x": 0,
                "y": 843,
                "width": 833,
                "height": 843
            },
            "action": {
                "type": "location",
                "label": "柯滄銘婦產科",
                "address": "台北市中正區林森南路10號",
                "latitude": 25.043030000000002,
                "longitude": 121.52261799999999
            }
        },
        {
            "bounds": {
                "x": 833,
                "y": 843,
                "width": 833,
                "height": 843
            },
            "action": {
                "type":"uri",
                "label":"掛號",
                "uri":"http://genephile.vision.com.tw/"
            }
        },
        {
            "bounds": {
                "x": 1666,
                "y": 843,
                "width": 833,
                "height": 843
            },
            "action": {
                "type":"uri",
                "label":"基因實驗室",
                "uri":"http://www.genephile.com.tw/index2.htm"
            }
        }
    ]
}'

# upload rich menu  -->不能用postman
curl -v -X POST https://api-data.line.me/v2/bot/richmenu/richmenu-e860a1adce32a7f48d85e2d3aec2f462/content \
-H "Authorization: Bearer /Cc+gz2XwOLhUVIjYdVT0Df8d7l1Y5enFdv6BnMX7WyWSNwEaEKuRc5EnwQrTlS9mVFYp4vGoPdEtek62iRsb3k1lMw1UHaPQAEV9lqqeA+janICpbwg88WXE7Vpx+bmn0O2LtMEvTWY98ml3DPqtAdB04t89/1O/w1cDnyilFU=" \
-H "Content-Type: image/jpeg" \
-T image/rich_menu_03_L.png
