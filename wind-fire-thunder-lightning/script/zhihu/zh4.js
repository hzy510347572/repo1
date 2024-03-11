
var obj = JSON.parse($response.body);

obj.content.unit = "元";
obj.content.note = "亲爱的会员，你已畅享该会员内容";
obj.is_svip = true;
obj.ownership = true;



console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});