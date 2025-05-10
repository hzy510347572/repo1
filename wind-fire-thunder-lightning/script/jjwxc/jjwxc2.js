
var obj = JSON.parse($response.body);


obj.balance=99999;



console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
