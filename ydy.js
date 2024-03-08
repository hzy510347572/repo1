var objc = JSON.parse($response.body);

objc.pr="ROLE_SVIP"
objc.is_vip=true



$done({body : JSON.stringify(objc)});
