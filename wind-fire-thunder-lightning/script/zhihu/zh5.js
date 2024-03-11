
var obj = JSON.parse($response.body);

obj.data.center.buttons=[];
obj.data.bottom.buttons[1].button_type=2;

obj.data.bottom.buttons[1].button_text="立即进入";

console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
