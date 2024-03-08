
var objc = JSON.parse($response.body);

objc.pr="ROLE_SVIP"
objc.is_vip=true

console.log(JSON.stringify(objc))

$done({body : JSON.stringify(objc)});
