
var obj = JSON.parse($response.body);

obj.id = "0bf66de1270b549756c872de4d07f240";
obj.gender = 1;
obj.url = "https://api.zhihu.com/people/0bf66de1270b549756c872de4d07f240";
obj.avatar_url = "https://pic1.zhimg.com/v2-de028e52cd2e464906c05a1c25cb1210_l.jpg?source=8c5c7284";
obj.is_bind_phone = true;
obj.is_following_mp_wechat = false;
obj.is_unicom_free = false;


obj.member_rights[0] = {};
obj.member_rights[0].status = "active";
obj.member_rights[0].expire_at = 4102415999;
obj.member_rights[0].real_type = "svip";
obj.member_rights[0].available_at = 1709361985;
obj.member_rights[0].type = "svip";
obj.member_rights[0].alert = "盐选会员 2099.12.31 到期";

obj.member_rights[0].icon = {};
obj.member_rights[0].icon.day = "https://pic1.zhimg.com/v2-e678bd58e61fd9fbba1caaea9818bebd_l.png?source=8c5c7284";
obj.member_rights[0].icon.night = "https://picx.zhimg.com/v2-e678bd58e61fd9fbba1caaea9818bebd_l.png?source=8c5c7284";


obj.type = "people";
obj.from = "go";
obj.url_token = "22-10-95-77";

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
obj.has_speaker_admin_permission = false;
obj.user_type = "people";

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
