
var obj = JSON.parse($response.body);

obj.res.bookAssetList[0].asset=true;

if(obj.res.bookAssetList[0].chapterAssetList != null){

      for (i = 0; i < obj.res.bookAssetList[0].chapterAssetList.length; i++) { 
 
          obj.res.bookAssetList[0].chapterAssetList[i].asset = true;
       }
  
  
}




$done({body : JSON.stringify(obj)});
