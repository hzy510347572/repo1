var obj = JSON.parse($response.body);

obj.body.userInfo.isSvip=true;
obj.body.userInfo.isVip=true;
obj.body.userInfo.isUpgrade=true;
obj.body.userInfo.verification=true;

obj.body.zyVip.isVip=1;
obj.body.vipGuide.vipStatus=1;
obj.body.vipGuide.svipStatus=1;




console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
