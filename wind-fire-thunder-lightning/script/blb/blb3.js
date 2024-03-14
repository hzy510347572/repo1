
var obj = JSON.parse($response.body);

obj.data.expand.level = 5;
obj.data.expand.nextLevel = 6;
obj.data.welfareMoney = 99999999;
obj.data.hasPaidFirstTime = true;
obj.data.hasOrderedVipChaps = true;
obj.data.welfareCoin = 99999999;

obj.data.vipInfo.level = 5;
obj.data.vipInfo.nextLevel = 6;

obj.data.fireCoin = 99999999;



console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});