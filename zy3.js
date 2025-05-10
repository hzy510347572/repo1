
var str1 = $response.body;

var bodyStr = str1.substring(1, str1.length-1);

bodyStr = bodyStr.replaceAll("\\\"", '"');
bodyStr = bodyStr.replaceAll("\\\"", '"');

console.log(JSON.stringify(bodyStr));

var obj = JSON.parse(bodyStr);
obj.body.accountInfo.totalAmount=9999999;
obj.body.accountInfo.usrAmount=999999.90;
obj.body.accountInfo.accountAmount=9999919;
obj.body.accountInfo.couponAmount=80;

console.log(JSON.stringify(obj));

str1 = JSON.stringify(JSON.stringify(obj));

$done({body : str1});
