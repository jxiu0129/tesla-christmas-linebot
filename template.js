export const imageMap = () => {
    return {
        "type": "imagemap",
        "baseUrl": "https://upload.cc/i1/2020/03/04/b0WiTM.png#",
        "altText": "圖文選單",
        "baseSize": {
            "width": 1040,
            "height": 1040
        },
        "actions": [
            {
                "type": "uri",
                "linkUri": "http://pei.usa543.com/LineHome/qa.html#1",
                "area": {
                    "x": 0,
                    "y": 0,
                    "width": 520,
                    "height": 520
                }
            },
            {
                "type": "uri",
                "linkUri": "http://pei.usa543.com/LineHome/qa.html#2",
                "area": {
                    "x": 520,
                    "y": 0,
                    "width": 520,
                    "height": 520
                }
            },
            {
                "type": "uri",
                "linkUri": "http://pei.usa543.com/LineHome/qa.html#3",
                "area": {
                    "x": 0,
                    "y": 520,
                    "width": 520,
                    "height": 520
                }
            },
            {
                "type": "uri",
                "linkUri": "http://pei.usa543.com/LineHome/qa.html#4",
                "area": {
                    "x": 520,
                    "y": 520,
                    "width": 520,
                    "height": 520
                }
            }
        ]
    }
}

export const carousel = () => {
    return {
        "type": "flex",
        "altText": "carousel flex",
        "contents": {
            "type": "carousel",
            "contents": [
                {
                    "type": "bubble",
                    "size": "kilo",
                    "hero": {
                        "type": "image",
                        "size": "full",
                        "aspectRatio": "10:8",
                        "aspectMode": "cover",
                        "url": "https://i.imgur.com/geeAuMu.jpg"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                            {
                                "type": "text",
                                "text": "門診常見問題",
                                "wrap": true,
                                "weight": "bold",
                                "size": "xl"
                            },
                            {
                                "type": "box",
                                "layout": "baseline",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "認識更多",
                                        "wrap": true,
                                        "weight": "regular",
                                        "size": "sm",
                                        "flex": 0,
                                        "color": "#398CCD",
                                        "action": {
                                            "type": "uri",
                                            "label": "action",
                                            "uri": "http://pei.usa543.com/LineHome/qa.html#1"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "type": "bubble",
                    "size": "kilo",
                    "hero": {
                        "type": "image",
                        "size": "full",
                        "aspectRatio": "10:8",
                        "aspectMode": "cover",
                        "url": "https://imgur.com/zni2MFO.jpg"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                            {
                                "type": "text",
                                "text": "產前優生保健",
                                "wrap": true,
                                "weight": "bold",
                                "size": "xl"
                            },
                            {
                                "type": "box",
                                "layout": "baseline",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "認識更多",
                                        "wrap": true,
                                        "weight": "regular",
                                        "size": "sm",
                                        "flex": 0,
                                        "color": "#398CCD",
                                        "action": {
                                            "type": "uri",
                                            "label": "action",
                                            "uri": "http://pei.usa543.com/LineHome/qa.html#2"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "type": "bubble",
                    "size": "kilo",
                    "hero": {
                        "type": "image",
                        "size": "full",
                        "aspectRatio": "10:8",
                        "aspectMode": "cover",
                        "url": "https://imgur.com/KL6f7a6.jpg"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                            {
                                "type": "text",
                                "text": "基因晶片",
                                "wrap": true,
                                "weight": "bold",
                                "size": "xl"
                            },
                            {
                                "type": "box",
                                "layout": "baseline",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "認識更多",
                                        "wrap": true,
                                        "weight": "regular",
                                        "size": "sm",
                                        "flex": 0,
                                        "color": "#398CCD",
                                        "action": {
                                            "type": "uri",
                                            "label": "action",
                                            "uri": "http://pei.usa543.com/LineHome/qa.html#3"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "type": "bubble",
                    "size": "kilo",
                    "hero": {
                        "type": "image",
                        "size": "full",
                        "aspectRatio": "10:8",
                        "aspectMode": "cover",
                        "url": "https://imgur.com/ZgpBD76.jpg"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                            {
                                "type": "text",
                                "text": "非侵入性染色體檢查",
                                "wrap": true,
                                "weight": "bold",
                                "size": "xl"
                            },
                            {
                                "type": "box",
                                "layout": "baseline",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "認識更多",
                                        "wrap": true,
                                        "weight": "regular",
                                        "size": "sm",
                                        "flex": 0,
                                        "color": "#398CCD",
                                        "action": {
                                            "type": "uri",
                                            "label": "action",
                                            "uri": "http://pei.usa543.com/LineHome/qa.html#4"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    }
}