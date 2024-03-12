
var obj = JSON.parse($response.body);


obj.body.VipInfo.is_vip=true;
obj.body.VipInfo.is_svip=true;
obj.body.VipInfo.last_buy_vip_time=1700105401;
obj.body.VipInfo.svip_expire_time=1910105401609;
obj.body.VipInfo.vip_expire_time=1910105401609;

obj.body.VipInfo.auto_status_type="1";
obj.body.VipInfo.auto_status="1";

console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
