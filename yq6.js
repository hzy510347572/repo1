

var obj = JSON.parse($response.body);


   obj.Data.Charging.Price="0.0";

if(obj.tplInfo != null && obj.tplInfo != "undefined"){
    obj.tplInfo.amount="99999999阅饼";
    obj.tplInfo.total=99999999;
    obj.tplInfo.price="0阅饼";
    obj.tplInfo.button[0].url=obj.tplInfo.button[0].url.replaceAll(/price\=\d+/g, "price=0");
    obj.tplInfo.button[0].url=obj.tplInfo.button[0].url.replaceAll(/amount\=\d+/g, "amount=99999999");
}

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
