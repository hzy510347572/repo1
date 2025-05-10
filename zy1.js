
var str1 = $response.body;

console.log(str1);

var obj = eval("(" + str1 + ")");
console.log(JSON.stringify(obj));

obj.body.accountInfo.totalAmount=9999999;
obj.body.accountInfo.usrAmount=999999.90;
obj.body.accountInfo.accountAmount=9999919;
obj.body.accountInfo.couponAmount=80;

console.log(JSON.stringify(obj));

str1 = JSON.stringify(JSON.stringify(obj));

$done({body : str1});
