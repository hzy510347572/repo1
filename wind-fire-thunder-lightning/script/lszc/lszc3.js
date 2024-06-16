
var obj = JSON.parse($response.body);

obj.code=0;
obj.locked=0;
obj.totalpay=999999;
obj.save_count=999999;

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});