

var obj = JSON.parse($response.body);


obj.body.user.is_vip=true;

obj.body.user.coupon_amount=99999999;
obj.body.user.total_amount=99999999;
obj.body.user.account_amount=99999999;
obj.body.pay.amount=0;
obj.body.pay.gap_yb_amount=0;
obj.body.pay.is_enough=true;

obj.body.max_count=99999;


$done({body : JSON.stringify(obj)});
