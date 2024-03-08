
var objc = JSON.parse($response.body);

objc.svip=1
objc.end=1810086400000
objc.payYear=true
objc.userType=3

console.log(JSON.stringify(objc))

$done({body : JSON.stringify(objc)});
