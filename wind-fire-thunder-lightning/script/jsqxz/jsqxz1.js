
var obj = JSON.parse($response.body);

obj.maxYb = 999999;
obj.maxMoney = 99990;
obj.maxTiejin = 999999;
obj.buyYb = 999999;
obj.yb = 999999;

if (obj.memo === undefined || obj.memo == null) {
    obj.memo = {};
}

var memoObj = JSON.parse(obj.memo);
if (memoObj.TotalEnergyStatics === undefined || memoObj.TotalEnergyStatics == null) {
    memoObj.TotalEnergyStatics = {};
}
memoObj.TotalEnergyStatics.ConsumeEnergy=99999;
memoObj.TotalEnergyStatics.ConsumeEnergy=99999;
if (memoObj.TotalYuanBaoStatics === undefined || memoObj.TotalYuanBaoStatics == null) {
    memoObj.TotalYuanBaoStatics = {};
}
memoObj.TotalYuanBaoStatics.CurrentYuanBao=999999;
memoObj.TotalYuanBaoStatics.GainYuanBao=999999;
memoObj.TotalYuanBaoStatics.ConsumeYuanBao=0;
if (memoObj.TotalMoneyStatics === undefined || memoObj.TotalMoneyStatics == null) {
    memoObj.TotalMoneyStatics = {};
}
memoObj.TotalMoneyStatics.CurrentMoney=9999999;
memoObj.TotalMoneyStatics.GainMoney=9999999;
memoObj.TotalMoneyStatics.GainMoney2=9999999;
if (memoObj.GainBangYuanStatics === undefined || memoObj.GainBangYuanStatics == null) {
    memoObj.GainBangYuanStatics = {};
}
memoObj.GainBangYuanStatics.B0=9999999;
memoObj.GainBangYuanStatics.B2=9999999;
memoObj.YuanBao="999999/999999/999999";
memoObj.GlobalDataYuanBao="999999";
memoObj.GlobalDataOBSYuanBao="999999";


obj.memo = JSON.stringify(memoObj);



console.log(JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
