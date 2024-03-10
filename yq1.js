var obj = JSON.parse($response.body);

obj.level=3;
obj.vip.expire_time=2029140433;
obj.vip.has_ad=0;



console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
