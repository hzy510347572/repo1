
var obj = JSON.parse($response.body);

if (obj.results === undefined || obj.results == null) {
    obj.results = [{}];
}

obj.results[0].PlayerLevel=10;
obj.results[0].VipLV="17/17";






console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
