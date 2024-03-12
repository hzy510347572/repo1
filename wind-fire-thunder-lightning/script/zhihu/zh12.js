

$response.statusCode = 200;

var h = $response.headers;


console.log(h);


$done({headers : h});
