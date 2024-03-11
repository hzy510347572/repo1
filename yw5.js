var str = $response.body;

str.replaceAll("\&orderPrice\=463\.30", "\&orderPrice\=0");
str.replaceAll("data-js\=\"btn\"", "data-js\=\"vip-discount\"");

str.replace("class=\"pay_wrap new_log_wrap\" data-gap=\"储值订单\" data-price=\"46330阅饼\" data-oriPrice=\"46330阅饼\" data-prePrice=\"none\" data-gapPrice=\"463.30元\" data-gapPriceIos=\"none\" data-userType=\"会员书\" data-feeUnit=\"按本\" data-account-amount=\"0.00\" data-coupon-amount=\"0\"", "class=\"pay_wrap new_log_wrap\" data-gap=\"储值订单\" data-price=\"0阅饼\" data-oriPrice=\"0阅饼\" data-prePrice=\"none\" data-gapPrice=\"0元\" data-gapPriceIos=\"none\" data-userType=\"会员书\" data-feeUnit=\"按本\" data-account-amount=\"99999999.00\" data-coupon-amount=\"99999999\"");

console.log("=====================html替换===============");
console.log(str);
console.log("=====================html替换===============");

$done({body : str});
