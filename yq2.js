

var obj = JSON.parse($response.body);


obj.body.vipZoneInfo.isSVipUser=true;
obj.body.vipZoneInfo.isVipUser=true;

obj.body.priceInfo.isFree=true;
obj.body.vipBuyBookInfo.isVipUser=1;
obj.body.vipBuyBookInfo.isVipUser=19111111111;

$done({body : JSON.stringify(obj)});
