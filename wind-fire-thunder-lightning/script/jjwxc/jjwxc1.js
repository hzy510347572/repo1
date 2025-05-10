
var obj = JSON.parse($response.body);

obj.code=200;
obj.isvip=1;
obj.data.balances.jj=9999999;
obj.porint=0;



console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
