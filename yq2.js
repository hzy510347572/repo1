

var obj = JSON.parse($response.body);


obj.body.vipZoneInfo.isSVipUser=true;
obj.body.vipZoneInfo.isVipUser=true;

obj.body.bookInfo.priceInfo.isFree=true;
obj.body.vipBuyBookInfo.isVipUser=1;
obj.body.vipBuyBookInfo.vipExpiretime=19111111111;
//obj.body.vipBuyBookInfo.vBuy=1;

if(obj.body.buttonInfo != null){
    obj.body.buttonInfo[0].cmd.Data.DownloadInfo.bookCatalog.downloadType = 2;
    obj.body.buttonInfo[0].cmd.Data.DownloadInfo.DownloadType = 2;
}


$done({body : JSON.stringify(obj)});
