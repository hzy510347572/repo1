
var obj = JSON.parse($response.body);

// obj.data.coinExchangeRmbRate = 99999999;
obj.data.coinRemain = 99999999;
obj.data.pearCoin = 99999999;
obj.data.rmbRemain = 999999;

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});