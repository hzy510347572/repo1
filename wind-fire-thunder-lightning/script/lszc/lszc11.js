
var obj = JSON.parse($response.body);

obj.item4 = "{\"type\":510,\"star\":1,\"count\":999,\"locked\":0,\"pos\":41}|{\"type\":309,\"star\":0,\"count\":999,\"locked\":0,\"pos\":32}|{\"type\":9,\"star\":1,\"count\":999,\"locked\":0,\"pos\":36}|{\"type\":9,\"star\":0,\"count\":999,\"locked\":0,\"pos\":42}";
obj.item6 = "|||";
obj.info = "";
obj.code = 0;
obj.item1 = "{\"type\":305,\"star\":5,\"count\":992,\"locked\":1,\"pos\":15}|{\"type\":8,\"star\":0,\"count\":999,\"locked\":0,\"pos\":31}|{\"type\":307,\"star\":5,\"count\":1186,\"locked\":1,\"pos\":0}|{\"type\":400,\"star\":8,\"count\":999,\"locked\":0,\"pos\":21}";
obj.item3 = "{\"type\":403,\"star\":0,\"count\":999,\"locked\":0,\"pos\":37}|{\"type\":401,\"star\":0,\"count\":999,\"locked\":0,\"pos\":38}|{\"type\":310,\"star\":0,\"count\":999,\"locked\":0,\"pos\":39}|{\"type\":508,\"star\":1,\"count\":999,\"locked\":0,\"pos\":40}";
obj.item5 = "{\"type\":8,\"star\":2,\"count\":999,\"locked\":0,\"pos\":43}|||";
obj.item7 = "|||";
obj.item0 = "{\"type\":402,\"star\":1,\"count\":999,\"locked\":0,\"pos\":11}|{\"type\":401,\"star\":2,\"count\":999,\"locked\":0,\"pos\":12}|{\"type\":404,\"star\":2,\"count\":999,\"locked\":0,\"pos\":26}|{\"type\":400,\"star\":3,\"count\":999,\"locked\":0,\"pos\":22}";
obj.item2 = "{\"type\":321,\"star\":5,\"count\":999,\"locked\":0,\"pos\":4}|{\"type\":402,\"star\":8,\"count\":999,\"locked\":0,\"pos\":27}|{\"type\":317,\"star\":5,\"count\":999,\"locked\":0,\"pos\":6}|{\"type\":404,\"star\":8,\"count\":999,\"locked\":0,\"pos\":33}";


console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});