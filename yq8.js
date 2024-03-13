
var obj = JSON.parse($response.body);

// obj.body.totalPrice="0";
// obj.body.totalPriceDesc="0阅饼";

obj.body.payInfo.gapAmountAndroid=99999;
obj.body.payInfo.gapAmountDesc="99999阅饼";
// obj.body.payInfo.price=0;
//obj.body.payInfo.totalPrice="0";
obj.body.payInfo.gapAmountIOS="999999";
obj.body.payInfo.payDesc="999999阅饼";

obj.body.userAccount.ableVoucherAmount="9999999";
obj.body.userAccount.voucherAmountDesc="9999999代金券";
obj.body.userAccount.accountAmountDesc="9999999阅饼";
obj.body.userAccount.isEnough=1;
obj.body.userAccount.accountAmount="9999999";
obj.body.userAccount.voucherAmount="9999999";

console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
