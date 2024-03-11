var obj = JSON.parse($response.body);


obj.Data.Charging.Price="0";
obj.tplInfo.total=9999999;
obj.tplInfo.button.url="https://ih2.ireader.com/zytc/public/index.php?ca=Recharge.Index&amount=0%E9%98%85%E9%A5%BC&bookId=12747059&entranceName=settle&from=insert_recharge_buy&goBackUrl=https%253A%252F%252Fih2.ireader.com%252Fzytc%252Fpublic%252Findex.php%253Fca%253DOrder.Create%2526bid%253D12747059%2526cid%253D11%2526isChapterFocus%253D1%2526pca%253Dclient_askOrder%2526pk%253DaskOrder%2526projectSource%253Dzybook3%2526idfa%253D00000000-0000-0000-0000-000000000000%2526p1%253D40285AEE0BA54FCABA0309BED7CB462B%2526p11%253D584%2526p16%253DiPhone14%25252C5%2526p2%253D111010%2526p21%253D00003%2526p22%253DiOS%25252C16.2%2526p29%253Dzye5b814%2526p3%253D17550007%2526p33%253Dcom.zhangyue.zyiReader.iReader%2526p4%253D501607%2526p5%253D1001%2526p6%253DAAAAAAAAAAAAAAAAAAAA%2526p7%253DAAAAAAAAAAAAAAA%2526p9%253D0%2526rgt%253D7%2526usr%253Di4045778995%2526zysid%253D409d8b8278b85316a6c44f2402089470&logOrderOrigin=yb_read_3_12747059&pageName=read&pca=client_askOrder&pk=askOrder&price=0%E9%98%85%E9%A5%BC&projectSource=zybook3&source=order"




$done({body : JSON.stringify(obj)});
