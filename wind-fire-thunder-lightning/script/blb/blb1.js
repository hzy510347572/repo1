
var obj = JSON.parse($response.body);

obj.data.vipLevel = 5;
obj.data.couponsRemain = 99999999;
obj.data.fireMoneyUsed = 999999;
obj.data.rmbCost = 9999;
obj.data.fireMoneyRemain = 99999999;

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});