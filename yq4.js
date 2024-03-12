var obj = JSON.parse($response.body);


obj.body.isFree=true;
obj.body.freeCount=9999999;
obj.body.asset="[1-999999]";


$done({body : JSON.stringify(obj)});
