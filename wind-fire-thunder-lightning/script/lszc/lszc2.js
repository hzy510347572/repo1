
var obj = JSON.parse($response.body);

obj.code=0;

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});