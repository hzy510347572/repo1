
var obj = JSON.parse($response.body);

obj.Data.FreeReadingCoupons=99999999;
obj.Data.FreeBalance=99999999;
obj.Data.WordBalance=99999999;
obj.Data.CouponAmount=99999999;
obj.Data.CanUseWordBalance=1;
obj.Data.CanFreeUnlock=1;


console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
