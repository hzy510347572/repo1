
var obj = JSON.parse($response.body);

obj.button.right_icon_text = "";
obj.button.jump_url = "https://www.zhihu.com/xen/market/vip-privileges";
obj.button.right_icon_style = 0;
obj.button.button_style = 0;
obj.button.sub_text = "";
obj.button.text = "立即续费";

obj.vip_type = "svip";

obj.vip_tip.jump_url = "https://www.zhihu.com/xen/market/vip-privileges";
obj.vip_tip.text = "2099-12-31 到期";

obj.vip_icon.day_url = "https://pic1.zhimg.com/v2-e678bd58e61fd9fbba1caaea9818bebd_l.png?source=8c5c7284";
obj.vip_icon.night_url = "https://picx.zhimg.com/v2-e678bd58e61fd9fbba1caaea9818bebd_l.png?source=8c5c7284";

obj.is_vip_new = false;

obj.show_red_point = false;
obj.red_point_time = 1710168204;
obj.is_svip_new = false;

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});