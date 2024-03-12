
var obj = JSON.parse($response.body);

obj.code=0;
obj.msg="success";
obj.type=0;
obj.freeType=3;
obj.status=0;
obj.vipCode="vip";
obj.body.tpken="cl/gggWXy+sciRJr/4L9KoqHekW8SiMVE80sb+0GMMgYyRGjG56zcS8q76JHd/Lk7o4YOq9OboGOa9NVCQlg6W4FdA1bdVJEIwL2fytzy+keTHQ+f14CkCpJPHX3hj1Rv6FaYiJKtsV+kXJ0Q3Z3b+r+nt08o3UpNhpXt5ybWOA=";



console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
