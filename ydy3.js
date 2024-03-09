var objc = JSON.parse($response.body);


var str = '{
  "msg" : null,
  "data" : [
    {
      "description" : null,
      "awardText" : "1天高级会员",
      "awardType" : "vip",
      "claimTime" : null,
      "awardValue" : 1,
      "completeTime" : null,
      "type" : "voice",
      "displayOrder" : 7,
      "taskId" : null,
      "serviceEndTime" : null,
      "name" : "创建一篇语音速记",
      "status" : "create"
    },
    {
      "description" : null,
      "awardText" : "1天高级会员",
      "awardType" : "vip",
      "claimTime" : null,
      "awardValue" : 1,
      "completeTime" : null,
      "type" : "todo",
      "displayOrder" : 4,
      "taskId" : null,
      "serviceEndTime" : null,
      "name" : "创建一个待办",
      "status" : "create"
    },
    {
      "description" : null,
      "awardText" : "1天高级会员",
      "awardType" : "vip",
      "claimTime" : 1709927153401,
      "awardValue" : 1,
      "completeTime" : 1709895977744,
      "type" : "note",
      "displayOrder" : 8,
      "taskId" : "31293429b772433bbf560a7035623e41",
      "serviceEndTime" : 1710086400000,
      "name" : "创建一篇笔记",
      "status" : "claimed"
    },
    {
      "description" : null,
      "awardText" : "1天高级会员",
      "awardType" : "vip",
      "claimTime" : null,
      "awardValue" : 1,
      "completeTime" : null,
      "type" : "pdf2word",
      "displayOrder" : 6,
      "taskId" : null,
      "serviceEndTime" : null,
      "name" : "体验PDF转Word",
      "status" : "create"
    },
    {
      "description" : null,
      "awardText" : "1天超级会员",
      "awardType" : "super_vip",
      "claimTime" : null,
      "awardValue" : 1,
      "completeTime" : null,
      "type" : "ai",
      "displayOrder" : 2,
      "taskId" : null,
      "serviceEndTime" : null,
      "name" : "体验AI写作",
      "status" : "create"
    },
    {
      "description" : null,
      "awardText" : "1天高级会员",
      "awardType" : "vip",
      "claimTime" : null,
      "awardValue" : 1,
      "completeTime" : null,
      "type" : "shorthand",
      "displayOrder" : 3,
      "taskId" : null,
      "serviceEndTime" : null,
      "name" : "创建一篇速记",
      "status" : "create"
    },
    {
      "description" : null,
      "awardText" : "1天高级会员",
      "awardType" : "vip",
      "claimTime" : 1709927153401,
      "awardValue" :100,
      "completeTime" : 1709895977744,
      "type" : "collect",
      "displayOrder" : 5,
      "taskId" : "6ca5da706ce54ce1968b5d2fe5b9da88",
      "serviceEndTime" : 1710086400000,
      "name" : "收藏一篇笔记",
      "status" : "claimed"
    },
    {
      "description" : null,
      "awardText" : "1天超级会员",
      "awardType" : "super_vip",
      "claimTime" : null,
      "awardValue" : 1,
      "completeTime" : null,
      "type" : "ocr",
      "displayOrder" : 1,
      "taskId" : null,
      "serviceEndTime" : null,
      "name" : "体验文字识别OCR",
      "status" : "create"
    }
  ],
  "code" : 0
}
'



$done({body : str});
