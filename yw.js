
var obj = JSON.parse($response.body);

for (i = 0; i < obj.body.list.length; i++) { 
   if(obj.body.list[i].items != null && obj.body.list[i].items != "undefined"){
       for (j = 0; j < obj.body.list[i].items.length; j++) { 
        obj.body.list[i].items[j].isVipUser = true;
       }
   }
 
    
 }



$done({body : JSON.stringify(obj)});
