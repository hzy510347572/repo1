

var obj = JSON.parse($response.body);


obj.body.userInfo.is_vip_user=1;

$done({body : JSON.stringify(obj)});
