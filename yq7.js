

var obj = JSON.parse($response.body);



obj.tplInfo.amount="99999999阅饼";
obj.tplInfo.total=99999999;
obj.tplInfo.price="0阅饼";
obj.tplInfo.button[0].url=obj.tplInfo.button[0].url.replaceAll(/price\=\d+\.\d+/g, "price=0");


console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
