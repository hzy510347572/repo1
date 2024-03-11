
var obj = JSON.parse($response.body);

for (i = 0; i < obj.body.list.length; i++) { 
  for (j = 0; j < obj.body.list[i].items.length; j++) { 
      obj.body.list[i].items[j].isVipUser = true;

   }
    
 }



$done({body : JSON.stringify(obj)});
