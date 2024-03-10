

var obj = JSON.parse($response.body);


obj.body.vipZoneInfo.isSVipUser=true;
obj.body.vipZoneInfo.isVipUser=true;

$done({body : JSON.stringify(obj)});
