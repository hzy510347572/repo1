
var obj = JSON.parse($response.body);


obj.subscriptions[0] = {};

obj.subscriptions[0].id = 4;
obj.subscriptions[0].real_name = "svip";
obj.subscriptions[0].checked_in_days = 0;
obj.subscriptions[0].appellation = "尊敬的盐选会员";
obj.subscriptions[0].checked_in_url = "https://www.zhihu.com/remix/instabooks";
obj.subscriptions[0].available_at = 1709361985;
obj.subscriptions[0].expires_at = 4102415999;
obj.subscriptions[0].is_active = true;
obj.subscriptions[0].real_id = "4";
obj.subscriptions[0].title = "盐选会员";
obj.subscriptions[0].is_expired = false;
obj.subscriptions[0].is_active = true;
obj.subscriptions[0].alert = "盐选会员 2099-12-31 到期";
obj.subscriptions[0].show_recharge_notic = false;
obj.subscriptions[0].name = "svip";
obj.subscriptions[0].has_checked_in = false;

obj.is_new = false;

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});