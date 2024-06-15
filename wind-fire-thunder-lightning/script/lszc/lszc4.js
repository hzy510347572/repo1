
var obj = JSON.parse($response.body);

obj.count=1;

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});