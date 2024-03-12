
var obj = JSON.parse($response.body);


for (i = 0; i < obj.data.length; i++) { 
    obj.data[i].is_locked=false;
    obj.data[i].right.has_ownership=true;
    obj.data[i].is_free=true;
   
 }
console.log("---------" + obj.data[0].is_locked + "---------");

$done({body : JSON.stringify(obj)});
