var obj = JSON.parse($response.body);

obj.body.account.voucher=99999999;
obj.body.account.voucherRemind="永久";
obj.body.account.balance=99999999;


obj.body.card.isShow=true;
obj.body.card.expiring=99999999;
obj.body.card.timestamp=1999999999;


obj.body.freeModel.title="开启免费阅读模式";
obj.body.freeModel.url="https://ih2.ireader.com/zybk/free/index?source=window";
obj.body.freeModel.isShow=true;



obj.body.userInfo.isSvip=true;
obj.body.userInfo.isVip=true;
obj.body.userInfo.isUpgrade=true;
obj.body.userInfo.verification=true;

obj.body.zyVip.isVip=1;
obj.body.zyVip.title=掌阅会员;
obj.body.zyVip.buttonUrl = "https://ih2.ireader.com/zytc/public/index.php?ca=Svip.Order&isShowTitle=0&showContentInStatusBar=1";
obj.body.zyVip.buttonUrldesc="2099-12-31到期一键续费专享特权";
obj.body.zyVip.buttonText="续费";

obj.body.vip.isShow=true;
obj.body.vip.isDiy=0;
obj.body.vip.title="我的VIP";
//obj.body.vip.focusId="1990347333";
obj.body.vip.expireTime="VIP9999999天后到期";
obj.body.vip.desc="VIP9999999天后到期";
obj.body.vip.url="https://ih2.ireader.com/zytc/public/index.php?ca=Vip.Index&logOrderOrigin=vip_mine_1_0&source=mine"



obj.body.vipGuide.isShow=true;
obj.body.vipGuide.statusForLog=2;
obj.body.vipGuide.configBookUrl="https://ih2.ireader.com/zytc/public/index.php?ca=Svip.Order&isShowTitle=0&showContentInStatusBar=1";
obj.body.vipGuide.expireText="2099-12-31到期";
obj.body.vipGuide.buttonText="续费";
obj.body.vipGuide.vipStatus=2;
obj.body.vipGuide.svipStatus=2;
obj.body.vipGuide.vipType="svip";
//obj.body.vipGuide.vipType="vip";



console.log(JSON.stringify(obj))
$done({body : JSON.stringify(obj)});
