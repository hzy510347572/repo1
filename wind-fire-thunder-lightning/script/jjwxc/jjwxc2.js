
var obj = JSON.parse($response.body);

obj.isvip=1;
obj.balance=9999999;



console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
