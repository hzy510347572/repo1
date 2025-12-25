
// 工具函数：获取当日日期，格式化为 YYYY-MM-DD（补零处理，确保月份/日期为两位）
function getTodayFormattedDate1() {
    const now = new Date();
    const year = now.getFullYear();
    // 月份从 0 开始，需 +1，padStart 补零（比如 1 月 → 01，5 日 → 05）
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function getTodayFormattedDate2() {
    const now = new Date();
    const year = now.getFullYear();
    // 月份从 0 开始，需 +1，padStart 补零（比如 1 月 → 01，5 日 → 05）
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}
const todayDate1 = getTodayFormattedDate1();
const todayDate2 = getTodayFormattedDate2();

const objss = '{"m":1,"d":{"ApplyChannelList":[],"ID":3701741998,"SplitVCode":"9570 3185 3231 6557 60","cvrID":1677547,"OperatorMallName":null,"ShowType":6,"DiscountAmount":null,"ConsumerHotline":null,"TimeEnd":null,"Deductible":null,"TypeDesc":"兑换券","ReduceMoney":null,"ValidityPeriodDesc":"今天 23:59 即将过期 ","ValidityPeriodEnd":"2025-12-25 23:59:59","IsPartTimeUse":false,"IsDonation":false,"VCode":"957031853231655760","OverdueTime":"2025/12/25 23:59:59","TimeBegin":null,"UseState":3,"imgUrl":"service/CreateBarCode?code=957031853231655760&w=460&h=152","MallLogo":"sp_mall/77/da/re/4a-8ab9-4842-96fc-1c2c71f467b1.jpg","UseButton":null,"TypeName":"兑","Subtitle":"当日有效","InsteadMoney":0,"OperatorTime":"0001.01.01 00:00","UseDesc":"<p>*6积分可兑换一张入场券；</p><p>*入场券当日有效，截图无效；</p><p>*每张入场券最多仅限2人使用，1大1小或2位成人；</p><p>*凭电子券当天（营业时间内）均可出入岛屿；</p><p><strong><span style=\\"color:#ff0000;\\">*一经兑换，积分不可退还，入场券数量无限，建议入场前至入口处扫码兑换即可；</span></strong><br /></p><p>*详情可咨询客服人员</p><p style=\\"text-align: center;\\"><strong>文明观展温馨提示&nbsp;</strong></p><p></p><ol><li>请勿躺坐、攀爬拽拉、拍打毛绒展品，避免毛绒毛屑吸入；</li><li>请勿追逐打闹，看护好随行老人与儿童；</li><li>请勿携带饮料、食物入场，儿童车、滑板车等禁止入内；</li><li>进场需穿着指定鞋套入场，12岁以下小朋友入场需有大人陪同；</li><li>如遇客流高峰，岛内将限流限时观展，共同维护快乐岛，让观展体验安全舒心。</li></ol><p></p><div><br /></div>","ValidityPeriodEndNew":"2025.12.25 23:59","PlatformType":1,"OperatorShopID":0,"Subsidy":0,"SingleCosts":0,"InsteadTime":0,"EnableTime":"2025/12/25 00:00:00","LogoList":["sp_mall/77/da/re/4a-8ab9-4842-96fc-1c2c71f467b1.jpg"],"State":3,"PartTime":"周一至周日","Remark1":null,"Remark2":null,"TypeID":3,"OperationTips":null,"OverdueTimeDesc":"2025.12.25 23:59","MallShopList":null,"Desc":"*入场券当日有效，截图无效；每张入场券最多仅限2人使用，1大1小或2位成人；\\r\\n\\r\\n","Remark3":null,"Remark4":null,"Verification":2,"Remark5":null,"Remark6":null,"IsAllApplyBusiness":true,"Remark7":null,"Remark8":null,"Remark9":null,"Remark10":null,"JumpButton":{"Url":"","Show":false,"Name":null,"SysResID":10603431},"EntranceVoucherInfo":null,"ValidityPeriodStart":"2025-12-25 00:00:00","Week":null,"PartTimeList":[1,2,3,4,5,6,7],"OperatorShopName":null,"expDate":null,"ServerTime":"2025/12/25 20:36:29","Name":"大仟里快乐岛入场券","DPTList":[],"IsUseDist":false,"IsPwdForVerify":false,"ShopListDic":null,"ValidityPeriodStartNew":"2025.12.25 00:00"},"e":null}';
const objssObj = JSON.parse(objss);


body = JSON.stringify(objssObj);


const regexExact2 = /2025\/12\/25/g;
const regexExact1 = /2025-12-25/g;

body = body.replaceAll(regexExact1, todayDate1);
body = body.replaceAll(regexExact2, todayDate2);
// body = body.replace(/"OverdueTime":\s*2025\/12\/25 23:59:59/g, '"OverdueTime": ${todayDate2} 23:59:59');
// body = body.replace(/"ValidityPeriodEnd":\s*2025-12-25 23:59:59/g, '"ValidityPeriodEnd": ${todayDate1} 23:59:59');

// /"ValidityPeriodEnd":\s*\d{4}-\d{2}-\d{2}\s+23:59:59/g






$done({ body });