
var objc = JSON.parse($response.body);

objc.svip=2
objc.end=1910086400000
objc.payYear=true
objc.userType=2
objc.service=2
objc.student=true
objc.remaining=900000
objc.ituneRemaining=800000

console.log(JSON.stringify(objc))

$done({body : JSON.stringify(objc)});
