
var obj = JSON.parse($response.body);

if (obj.data != null) {
    for (let i = 0; i < obj.data.length; i++) {
        obj.data[i].originNeedFireMoney = 0;
        obj.data[i].needFireMoney = 0;
        obj.data[i].isVip = false;
    }
}


console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});