
var obj = JSON.parse($response.body);

obj.margin_bottom="20";
  obj.image_width="325";
  obj.image_height="399";
  obj.margin_left="35";
  obj.activity_key="vip_purchase_ios_new_user";
  obj.button_height="40";
  obj.button_width="120";
  obj.artwork= "https://pica.zhimg.com/v2-e35ddbc538d1d4d8fc2d2e132e5b7999.png?source=6a64a727";
  obj.url="https://www.zhihu.com/xen/market/vip-privileges?activity_key=vip_purchase_ios_new_user";


console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});



