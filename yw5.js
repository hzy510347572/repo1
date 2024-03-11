var str = $response.body;

str.replaceAll("\&orderPrice\=463\.30", "\&orderPrice\=0");
str.replaceAll("data-js\=\"btn\"", "data-js\=\"left-btn\"");

console.log("=====================html替换===============");

$done({body : str});
