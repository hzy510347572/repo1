

var obj = JSON.parse($response.body);


// obj.Data.Charging.FeeType=2;
// obj.Data.Charging.Price=-1;

// obj.Data.bookCatalog.isEpubSerialize="1";
// obj.Data.bookCatalog.downloadType="1";
// obj.Data.bookCatalog.type="0";

// obj.Data.bookCatalog.relBookId="12747058";
// obj.Data.bookCatalog.relResource.book_id="12747058";
// obj.Data.bookCatalog.relResource.status="10";
// obj.Data.bookCatalog.relResource.type="0";


if(obj.tplInfo != null && obj.tplInfo != "undefined"){
    obj.tplInfo.amount="99999999阅饼";
    obj.tplInfo.total=99999999;
    obj.tplInfo.price="0阅饼";
    var url = obj.tplInfo.button[0].url;

    var arr = url.split("usr%253D");
    var arr2 = arr[1].split("zysid%253D");
    
    var usr = arr[1].substring(0, 10);
    var zysid = arr2[1].substring(0, 32);
    var bid= obj.Data.DownloadInfo.FileId;
    var cid= obj.Data.DownloadInfo.cid;
    var _random = (Date.parse(new Date()) + "").substring(0, 10);
    
    url = "https://ih2.ireader.com/order-pro/market/order/wholeBk.html?pca=Order.Create&projectSource=zybook4&p1=40285AEE0BA54FCABA0309BED7CB462B&p2=111010&p3=17550007&p4=501607&p5=1001&p6=AAAAAAAAAAAAAAAAAAAA&p7=AAAAAAAAAAAAAAA&p9=0&p11=584&p12=&p16=iPhone16%2C5&p21=00003&p22=iOS%2C17.3&p29=zye5b814&p33=com.zhangyue.zyiReader.iReader&usr=" + usr + "&rgt=7&zysid=" + zysid + "&idfa=00000000-0000-0000-0000-000000000000&jailbreak=0&bid=" + bid + "&cid=" + cid + "&origin=&pk=askOrder&vbuy=0&ispopup=iphone&isShowTitle=0&showContentInStatusBar=1&isRoundTitle=1&_random=" + _random;
  
}

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
