
var obj = JSON.parse($response.body);

obj.body.userAccount.totalPrice="0";
obj.body.userAccount.totalPrice="0阅饼";

obj.body.userAccount.payInfo.gapAmountAndroid=0;
obj.body.userAccount.payInfo.gapAmountDesc="0阅饼";
obj.body.userAccount.payInfo.price=0;
obj.body.userAccount.payInfo.totalPrice="0";
obj.body.userAccount.payInfo.gapAmountIOS="0";
obj.body.userAccount.payInfo.payDesc="0阅饼";

obj.body.userAccount.ableVoucherAmount="9999999";
obj.body.userAccount.voucherAmountDesc="9999999代金券";
obj.body.userAccount.accountAmountDesc="9999999阅饼";
obj.body.userAccount.isEnough=1;
obj.body.userAccount.accountAmount="9999999";
obj.body.userAccount.voucherAmount="9999999";

console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
