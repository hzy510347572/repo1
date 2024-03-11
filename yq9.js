
var obj = JSON.parse($response.body);

obj.body.Data.Price=0;
obj.body.Data.Type=2;
obj.body.Data.Url=obj.body.Data.Url.replace(/price\=\d+\.\d+/g, "price=0");

console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
