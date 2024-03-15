
var obj = JSON.parse($response.body);

obj.Data.FreeReadingCoupons=99999999;
obj.Data.FreeBalance=99999999;
obj.Data.WordBalance=99999999;
obj.Data.CouponAmount=99999999;
obj.Data.CanUseWordBalance=1;
obj.Data.CanFreeUnlock=1;
obj.Data.CouponPrice=0;
obj.Data.ReadingCouponsPrice=0;
obj.Data.Price=0;
obj.Data.CouponPointPrice=0;
obj.Data.PriceInfo.DiscountPrice=0;
obj.Data.PriceInfo.DiscountPointPrice=0;
obj.Data.PriceInfo.OriginPrice=0;
obj.Data.PriceInfo.OriginPointPrice=0;





console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
