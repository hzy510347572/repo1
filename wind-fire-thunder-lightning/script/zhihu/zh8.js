
var obj = JSON.parse($response.body);

obj.is_vip=true;
obj.is_svip=true;

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
