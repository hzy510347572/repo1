
var obj = JSON.parse($response.body);

if(obj.data.ep_list != null){
    for (let i = 0; i < obj.data.ep_list.length; i++) {
        obj.data.ep_list[i].is_locked = false;
        obj.data.ep_list[i].pay_gold = 0;
        obj.data.ep_list[i].is_in_free = true;
        obj.data.ep_list[i].pay_mode = 0;
    }
}

console.log("--------" + obj.data.ep_list[0].is_locked);

$done({body : JSON.stringify(obj)});