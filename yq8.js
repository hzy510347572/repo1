
var obj = JSON.parse($response.body);

obj.body.userAccount.ableVoucherAmount="9999999";
obj.body.userAccount.isEnough=1;
obj.body.userAccount.accountAmount="9999999";
obj.body.userAccount.voucherAmount="9999999";

console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
