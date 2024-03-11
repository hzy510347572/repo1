
var obj = JSON.parse($response.body);

obj.body.Data.Price=0;
obj.body.Data.Type=2;

console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
