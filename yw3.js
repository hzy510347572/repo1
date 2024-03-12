var obj = response.body;

obj.body.userInfo.is_vip_user=1;



console.log(obj)
$done({body : obj});
