$task.fetch(myRequest).then(response => {

    
var obj = JSON.parse(response.body);

obj.pr="ROLE_SVIP"
obj.is_vip=true

var last=JSON.stringify(obj);
response.body=last
  
    console.log(response.statusCode + "\n\n" + response.body);








    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
