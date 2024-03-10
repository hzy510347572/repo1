
var obj = JSON.parse($response.body);

obj.data.me.member_level=3;
//obj.data.me.memberLevelName="超级会员";
obj.data.me.isTopLevel=true;
obj.data.me.expired_at="2099-11-29T15:59:59.000Z";
obj.data.interest.owner.member_level=2;
obj.data.interest.owner.isTopLevel=true;
obj.data.interest.owner.isMemberTopLevel=true;
obj.data.interest.owner.isExpired=false;
obj.data.interest.interests.open_api=true;
obj.data.userMemberInfo.expired_at="2099-11-29T15:59:59.000Z";

console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
