var obj = JSON.parse($response.body);

obj.body.userInfo.isSvip=1;
obj.body.userInfo.isvip=1;





console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
