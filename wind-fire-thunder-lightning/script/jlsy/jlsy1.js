
var obj = JSON.parse($response.body);

obj.data.role=1;
obj.data.is_zhubo_game=1;
obj.data.role_info.role_data[0].lv="240";
// obj.uid=89052;
// obj.uuid="31a9ae2d-e047-474d-a3f1-ec214de8f172";

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
