

var obj = JSON.parse($response.body);


obj.Data.Charging.FeeType=2;
obj.Data.Charging.FeeType=2;

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
    obj.tplInfo.button[0].url=obj.tplInfo.button[0].url.replaceAll(/price\=\d+/g, "price=0");
    obj.tplInfo.button[0].url=obj.tplInfo.button[0].url.replaceAll(/amount\=\d+/g, "amount=99999999");
}

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
