
var obj = JSON.parse($response.body);


for (i = 0; i < obj.body.list.length; i++) { 
    obj.body.list[i].price=0;
    obj.body.list[i].tag="免费";
 }

$done({body : JSON.stringify(obj)});
