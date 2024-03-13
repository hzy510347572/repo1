
var obj = JSON.parse($response.body);

obj.data.remain_gold= 99999999;
obj.data.is_locked= true;


console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});