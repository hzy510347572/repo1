
var obj = JSON.parse($response.body);

obj.wallet.ios_zhixue_coin=99999999;
obj.wallet.android_zhixue_coin=99999999;
obj.wallet.free_coupon=99999999;
obj.wallet.coin=99999999;
obj.wallet.bean=99999999;
obj.wallet.iosCatCoin=99999999;
obj.wallet.androidCatCoin=99999999;
obj.wallet.ios_gold=99999999;
obj.wallet.balance=99999999;
obj.wallet.corp_balance=99999999;


console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
