var obj = JSON.parse($response.body);

obj.data.user.member_level=3;
obj.data.user.memberLevelName="超级会员";
obj.data.user.role=2;
obj.data.user.isPaid=true;
obj.data.user.isTopLevel=true;
obj.data.user.expired_at="2099-11-29T15:59:59.000Z";


console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
