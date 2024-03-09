
var objc = JSON.parse($response.body);

objc.svip=1
objc.end=1910086400000
objc.payYear=true
objc.userType=8
objc.service=5
objc.student=false
objc.remaining=900000
objc.ituneRemaining=800000
objc.dp=800000

console.log(JSON.stringify(objc))

$done({body : JSON.stringify(objc)});
