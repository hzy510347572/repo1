
var obj = JSON.parse($response.body);

if (obj.data != null) {
    for (i = 0; i < obj.data.length; i++) {
        obj.data[i].is_locked=false;
        obj.data[i].right.has_ownership=true;
        obj.data[i].is_free=true;

    }
    console.log("---------" + obj.data[0].is_locked + "---------");
}else {
    console.log(obj);
}


$done({body : JSON.stringify(obj)});
