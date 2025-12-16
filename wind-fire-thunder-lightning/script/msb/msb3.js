/*

马士兵
编程语言学习


[rewrite_local]


https:\/\/gateway\.mashibing\.com\/edu-course\/courseHomePage\/isHasCourse* url script-response-body https://raw.githubusercontent.com/hzy510347572/repo1/branch1/wind-fire-thunder-lightning/script/msb/msb3.js

[mitm]

hostname = gateway.mashibing.com
*/


var body = $response.body;


body = body.replace(/"data":\s*false/g, '"data":true');






$done({ body });