
var obj = JSON.parse($response.body);

obj.body.books[0].bookList[0].price="0";

console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
