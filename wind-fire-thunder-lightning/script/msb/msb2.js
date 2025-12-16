/*

马士兵
编程语言学习


[rewrite_local]


https:\/\/gateway\.mashibing\.com\/uaa\/user/info url script-response-body https://raw.githubusercontent.com/hzy510347572/repo1/branch1/wind-fire-thunder-lightning/script/msb/msb2.js
https:\/\/gateway\.mashibing\.com\/uaa\/user/getUserInfo\/* url script-response-body https://raw.githubusercontent.com/hzy510347572/repo1/branch1/wind-fire-thunder-lightning/script/msb/msb2.js
https:\/\/gateway\.mashibing\.com\/edu-live\/pcLive\/findChannelRecordNewestByCache\/* url script-response-body https://raw.githubusercontent.com/hzy510347572/repo1/branch1/wind-fire-thunder-lightning/script/msb/msb2.js

[mitm]

hostname = gateway.mashibing.com
*/


var body = $response.body;


body = body.replace(/"isVip":\s*false/g, '"isVip":true');
body = body.replace(/"price":\s*\d+/g, '"price":0');




$done({ body });