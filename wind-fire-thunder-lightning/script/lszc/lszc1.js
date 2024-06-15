
var obj = JSON.parse($response.body);

obj.locked=0;

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});