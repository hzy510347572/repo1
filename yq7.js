var obj = JSON.parse($response.body);


obj.Data.Charging.Price="0";
obj.tplInfo.total=9999999;
obj.tplInfo.button.url=obj.tplInfo.button.url.replace("price=", "price=-");




$done({body : JSON.stringify(obj)});
