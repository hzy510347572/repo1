/*

马士兵
编程语言学习


[rewrite_local]


https:\/\/gateway\.mashibing\.com\/edu-course\/courseHomePage\/isHasCourse* url script-response-body https://raw.githubusercontent.com/hzy510347572/repo1/branch1/wind-fire-thunder-lightning/script/msb/msb3.js
https:\/\/gateway\.mashibing\.com\/edu-live\/appLiveSign\/findSignStatus* url script-response-body https://raw.githubusercontent.com/hzy510347572/repo1/branch1/wind-fire-thunder-lightning/script/msb/msb3.js

[mitm]

hostname = gateway.mashibing.com
*/


var body = $response.body;


body = body.replace(/"data":\s*false/g, '"data":true');
// body = body.replace(/"price":\s*\d+/g, '"price":0');
// body = body.replace(/"liveStatus":\s*1/g, '"liveStatus":2');
// body = body.replace(/"sceneLiveStatus":\s*2/g, '"sceneLiveStatus":1');
// body = body.replace(/"livePlatform":\s*1/g, '"livePlatform":0');






$done({ body });