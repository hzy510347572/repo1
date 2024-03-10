var obj = JSON.parse($response.body);

obj.data.order.amount=0.00;
obj.data.order.product_amount="0.00";



console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
