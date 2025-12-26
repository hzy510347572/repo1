/*
[rewrite_local]

https:\/\/m\.mallcoo\.cn\/api\/gift\/giftmanager\/GetGiftInfoDetail url script-response-body https://raw.githubusercontent.com/hzy510347572/repo1/refs/heads/branch1/wind-fire-thunder-lightning/script/dql/dql4.js

*/



var body = $response.body;



body = body.replace(/"b":\s*1500/g,'"b": 0');
body = body.replace(/"Bonus":\s*1500/g,'"Bonus": 0');


$done({ body });