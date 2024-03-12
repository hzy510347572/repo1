

var obj = JSON.parse($response.body);

obj.body.userInfo.is_vip_user=1;
obj.body.list[0].base_price=0;
obj.body.list[0].discount_price=0;
obj.body.list[0].is_free=1;
obj.body.list[0].discount_end_time=19999999999;




console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
