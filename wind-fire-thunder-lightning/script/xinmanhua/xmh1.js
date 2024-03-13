
var obj = JSON.parse($response.body);

obj.retcode=0;
obj.msg="success";

obj.bill.current=1;
obj.bill.recharge=0;
obj.bill.surplus=99999999;
obj.bill.original=1;


console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});