

var obj = JSON.parse($response.body);

obj.body.userInfo.is_vip_user=1;



console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
