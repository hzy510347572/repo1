var obj = JSON.parse($response.body);


obj.body.Data.Charging.Price="0";
obj.body.tplInfo.total=9999999;
obj.body.tplInfo.button.url=obj.body.tplInfo.button.url.replace(/price=/g, "price=-")");




$done({body : JSON.stringify(obj)});
