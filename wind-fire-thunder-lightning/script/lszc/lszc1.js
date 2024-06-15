
var obj = JSON.parse($response.body);

obj.locked=null;
obj.code=0;
obj.info="success";
// obj.uid=89052;
// obj.uuid="31a9ae2d-e047-474d-a3f1-ec214de8f172";

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});