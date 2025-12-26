/*
[rewrite_local]

https:\/\/m\.mallcoo\.cn\/api\/gift\/giftmanager\/GetMallCard url script-response-body https://raw.githubusercontent.com/hzy510347572/repo1/refs/heads/branch1/wind-fire-thunder-lightning/script/dql/dql5.js

*/



var body = $response.body;



body = body.replace(/"Bonus":\s*\d+/g,'"Bonus": 100000');
body = body.replace(/"CacheBonus":\s*\d+/g,'"CacheBonus": 100000');


$done({ body });