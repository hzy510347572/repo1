
var obj = JSON.parse($response.body);

obj.data.commonCounponCount = 99999999;
obj.data.readCounponCount = 99999999;
obj.data.counponCount = 99999999;
// obj.data.useCounponType = 0;
obj.data.isUseCounpon = false;

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});