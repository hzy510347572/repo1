

var obj = JSON.parse($response.body);


obj.body.user.is_vip=true;

$done({body : JSON.stringify(obj)});
