
var obj = JSON.parse($response.body);

obj.Result=0
obj.Subcode=0


console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});