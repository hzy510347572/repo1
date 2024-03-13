
var obj = JSON.parse($response.body);

obj.data.attributes.isreadable=1;
obj.data.attributes.ischarge=0;

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});