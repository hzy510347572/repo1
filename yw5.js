

var obj = JSON.parse($response.body);

obj.body.amount.voucherAmount=99999999;
obj.body.amount.voucherAmountExpire=19999999999;
obj.body.amount.totalAmount=999999999;



console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
