/*

[rewrite_local]

https:\/\/m\.mallcoo\.cn\/a\/coupon\/API\/mycoupon\/GetAboutCoupon url script-response-body https://raw.githubusercontent.com/hzy510347572/repo1/refs/heads/branch1/wind-fire-thunder-lightning/script/dql/dql1.js

[mitm]

hostname = m.mallcoo.cn
*/

function getTodayFormattedDate1() {
    const now = new Date();
    const year = now.getFullYear();
    // 月份从 0 开始，需 +1，padStart 补零（比如 1 月 → 01，5 日 → 05）
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()+1).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function getTodayFormattedDate2() {
    const now = new Date();
    const year = now.getFullYear();
    // 月份从 0 开始，需 +1，padStart 补零（比如 1 月 → 01，5 日 → 05）
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()+1).padStart(2, '0');
    return `${year}/${month}/${day}`;
}


var body = $response.body;
const objss = '{"PlatformType":1,"BussinessID":"gto_item13502591250134163595","VCode":"957031853231655760","Name":"大仟里快乐岛入场券","IsThirdVCode":false,"InsteadMoney":0,"ThirdPartyID":"506000","JoinMallList":[{"ID":12501,"Name":"宝安大仟里","Logo":"sp_mall/77/da/re/4a-8ab9-4842-96fc-1c2c71f467b1.jpg"}],"GroupRuleNo":null,"ValidityPeriodDescNew":"今天 23:59 即将过期 ","Subtitle":"当日有效","EnableTime":"2025/12/25 00:00:00","ThirdPartyItemID":"1677547","Verification":2,"IsCompensation":false,"JoinShopList":[],"CodeUrl":"service/CreateBarCode?code=957031853231655760&w=460&h=152","OverdueTime":"2025/12/25 23:59:59","RuleNo":"KQ12501202512120003","Subsidy":0,"CouponID":3701741998,"LogoList":["sp_mall/77/da/re/4a-8ab9-4842-96fc-1c2c71f467b1.jpg"],"DiscountAmount":null,"InsteadTime":0,"SingleCosts":0,"ShowType":6,"ReduceMoney":null,"MallLogo":"sp_mall/77/da/re/4a-8ab9-4842-96fc-1c2c71f467b1.jpg","ShopRuleNo":null,"UseState":3,"Deductible":null,"ValidityPeriodDesc":"12-25 00:00至12-25 23:59","State":3,"Type":3,"PICMID":2861636,"IsPartTimeUse":false}';



const jsonObj = JSON.parse(body);

jsonObj.d.push(JSON.parse(objss))

body = JSON.stringify(jsonObj);

const todayDate1 = getTodayFormattedDate1();
const todayDate2 = getTodayFormattedDate2();

const regexExact2 = /2025\/12\/25/;
const regexExact1 = /2025-12-25/;

body = body.replaceAll(regexExact1, todayDate1);
body = body.replaceAll(regexExact2, todayDate2);


$done({ body });