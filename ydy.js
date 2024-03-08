
var objc = JSON.parse($response.body);

objc.svip=1
objc.end=1810086400
objc.payYear=true

console.log(JSON.stringify(objc))

$done({body : JSON.stringify(objc)});
