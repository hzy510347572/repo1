
var obj = JSON.parse($response.body);


for (i = 0; i < obj.data.length; i++) { 
    obj.data[i].is_locked=false;
   
 }

$done({body : JSON.stringify(obj)});
