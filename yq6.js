

var obj = JSON.parse($response.body);



obj.tplInfo.amount="99999999阅饼";
obj.tplInfo.total=99999999;
obj.Data.Charging.Price=0.0




$done({body : JSON.stringify(obj)});
