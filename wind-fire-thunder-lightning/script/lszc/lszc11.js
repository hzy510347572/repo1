var obj = JSON.parse($response.body);

obj.item4 = "{\"type\":510,\"star\":5,\"count\":801,\"locked\":0,\"pos\":288}|{\"type\":309,\"star\":0,\"count\":600,\"locked\":0,\"pos\":289}|{\"type\":509,\"star\":5,\"count\":999,\"locked\":0,\"pos\":290}|{\"type\":508,\"star\":4,\"count\":999,\"locked\":0,\"pos\":291}";
obj.item6 = "|||";
obj.info = "";
obj.code = 0;
obj.item1 = "{\"type\":305,\"star\":5,\"count\":992,\"locked\":1,\"pos\":292}|{\"type\":306,\"star\":5,\"count\":900,\"locked\":0,\"pos\":293}|{\"type\":307,\"star\":5,\"count\":500,\"locked\":1,\"pos\":294}|{\"type\":400,\"star\":8,\"count\":501,\"locked\":0,\"pos\":295}";
obj.item3 = "{\"type\":403,\"star\":8,\"count\":502,\"locked\":0,\"pos\":296}|{\"type\":401,\"star\":8,\"count\":503,\"locked\":0,\"pos\":297}|{\"type\":310,\"star\":0,\"count\":505,\"locked\":0,\"pos\":298}|{\"type\":511,\"star\":5,\"count\":621,\"locked\":0,\"pos\":299}";
obj.item5 = "{\"type\":308,\"star\":0,\"count\":504,\"locked\":0,\"pos\":300}|{\"type\":312,\"star\":0,\"count\":605,\"locked\":0,\"pos\":308}|{\"type\":313,\"star\":0,\"count\":600,\"locked\":0,\"pos\":309}|{\"type\":512,\"star\":5,\"count\":623,\"locked\":0,\"pos\":310}";
obj.item7 = "{\"type\":513,\"star\":5,\"count\":624,\"locked\":0,\"pos\":312}|{\"type\":513,\"star\":5,\"count\":625,\"locked\":0,\"pos\":313}|{\"type\":514,\"star\":5,\"count\":626,\"locked\":0,\"pos\":314}|{\"type\":512,\"star\":5,\"count\":626,\"locked\":0,\"pos\":315}";
obj.item0 = "{\"type\":402,\"star\":8,\"count\":506,\"locked\":0,\"pos\":301}|{\"type\":311,\"star\":0,\"count\":508,\"locked\":0,\"pos\":302}|{\"type\":404,\"star\":8,\"count\":507,\"locked\":0,\"pos\":303}|{\"type\":507,\"star\":5,\"count\":622,\"locked\":0,\"pos\":311}";
obj.item2 = "{\"type\":321,\"star\":5,\"count\":9999,\"locked\":0,\"pos\":304}|{\"type\":320,\"star\":5,\"count\":999,\"locked\":0,\"pos\":305}|{\"type\":317,\"star\":5,\"count\":999,\"locked\":0,\"pos\":306}|{\"type\":318,\"star\":5,\"count\":999,\"locked\":0,\"pos\":307}";


console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
