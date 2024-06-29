
var obj = JSON.parse($response.body);

obj.maxYb = 999999;
obj.maxMoney = 99990;
obj.maxTiejin = 999999;
obj.buyYb = 999999;
obj.yb = 999999;

var memoObj = JSON.parse(obj.memo);
memoObj.TotalEnergyStatics.ConsumeEnergy=99999;
memoObj.TotalEnergyStatics.ConsumeEnergy=99999;
memoObj.TotalYuanBaoStatics.CurrentYuanBao=999999;
memoObj.TotalYuanBaoStatics.GainYuanBao=999999;
memoObj.TotalYuanBaoStatics.ConsumeYuanBao=0;
memoObj.TotalMoneyStatics.CurrentMoney=9999999;
memoObj.TotalMoneyStatics.GainMoney=9999999;
memoObj.TotalMoneyStatics.GainMoney2=9999999;
memoObj.GainBangYuanStatics.B0=9999999;
memoObj.GainBangYuanStatics.B2=9999999;
memoObj.YuanBao="999999/999999/999999";
memoObj.GlobalDataYuanBao="999999";
memoObj.GlobalDataOBSYuanBao="999999";


obj.memo = JSON.stringify(memoObj);



console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
