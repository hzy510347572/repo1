var obj = JSON.parse($response.body);


obj.Data.Charging.Price="0";
obj.tplInfo.total=9999999;




$done({body : JSON.stringify(obj)});
