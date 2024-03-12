
var obj = JSON.parse($response.body);


for (i = 0; i < obj.body.list.length; i++) { 
    obj.body.list[i].price=0;
 }

$done({body : JSON.stringify(obj)});
