/*

[rewrite_local]

https:\/\/m\.mallcoo\.cn\/a\/coupon\/API\/mycoupon\/GetAboutCoupon url script-response-body https://raw.githubusercontent.com/hzy510347572/repo1/refs/heads/branch1/wind-fire-thunder-lightning/script/dql/dql1.js

[mitm]

hostname = m.mallcoo.cn
*/


var body = $response.body;

body = "{\n" +
    "  \"m\" : 1,\n" +
    "  \"d\" : [\n" +
    "    {\n" +
    "      \"PlatformType\" : 1,\n" +
    "      \"BussinessID\" : \"gto_item13502591250134163595\",\n" +
    "      \"VCode\" : \"957031853231655760\",\n" +
    "      \"Name\" : \"大仟里快乐岛入场券\",\n" +
    "      \"IsThirdVCode\" : false,\n" +
    "      \"InsteadMoney\" : 0,\n" +
    "      \"ThirdPartyID\" : \"506000\",\n" +
    "      \"JoinMallList\" : [\n" +
    "        {\n" +
    "          \"ID\" : 12501,\n" +
    "          \"Name\" : \"宝安大仟里\",\n" +
    "          \"Logo\" : \"sp_mall/77/da/re/4a-8ab9-4842-96fc-1c2c71f467b1.jpg\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"GroupRuleNo\" : null,\n" +
    "      \"ValidityPeriodDescNew\" : \"今天 23:59 即将过期 \",\n" +
    "      \"Subtitle\" : \"当日有效\",\n" +
    "      \"EnableTime\" : \"2025/12/25 00:00:00\",\n" +
    "      \"ThirdPartyItemID\" : \"1677547\",\n" +
    "      \"Verification\" : 2,\n" +
    "      \"IsCompensation\" : false,\n" +
    "      \"JoinShopList\" : [\n" +
    "\n" +
    "      ],\n" +
    "      \"CodeUrl\" : \"service/CreateBarCode?code=957031853231655760&w=460&h=152\",\n" +
    "      \"OverdueTime\" : \"2026/03/26 23:59:59\",\n" +
    "      \"RuleNo\" : \"KQ12501202512120003\",\n" +
    "      \"Subsidy\" : 0,\n" +
    "      \"CouponID\" : 3701741998,\n" +
    "      \"LogoList\" : [\n" +
    "        \"sp_mall/77/da/re/4a-8ab9-4842-96fc-1c2c71f467b1.jpg\"\n" +
    "      ],\n" +
    "      \"DiscountAmount\" : null,\n" +
    "      \"InsteadTime\" : 0,\n" +
    "      \"SingleCosts\" : 0,\n" +
    "      \"ShowType\" : 6,\n" +
    "      \"ReduceMoney\" : null,\n" +
    "      \"MallLogo\" : \"sp_mall/77/da/re/4a-8ab9-4842-96fc-1c2c71f467b1.jpg\",\n" +
    "      \"ShopRuleNo\" : null,\n" +
    "      \"UseState\" : 3,\n" +
    "      \"Deductible\" : null,\n" +
    "      \"ValidityPeriodDesc\" : \"12-26 00:00至12-26 23:59\",\n" +
    "      \"State\" : 3,\n" +
    "      \"Type\" : 3,\n" +
    "      \"PICMID\" : 2861636,\n" +
    "      \"IsPartTimeUse\" : false\n" +
    "    },\n" +
    "    {\n" +
    "      \"PlatformType\" : 1,\n" +
    "      \"BussinessID\" : \"303755|adb94869-e64f-4943-bf14-26e0978b90a2\",\n" +
    "      \"VCode\" : \"957031856723376267\",\n" +
    "      \"Name\" : \"微卡首笔消费礼-2025年\",\n" +
    "      \"IsThirdVCode\" : false,\n" +
    "      \"InsteadMoney\" : 0,\n" +
    "      \"ThirdPartyID\" : \"new303755|376100\",\n" +
    "      \"JoinMallList\" : [\n" +
    "        {\n" +
    "          \"ID\" : 12501,\n" +
    "          \"Name\" : \"宝安大仟里\",\n" +
    "          \"Logo\" : \"sp_mall/77/da/re/4a-8ab9-4842-96fc-1c2c71f467b1.jpg\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"GroupRuleNo\" : null,\n" +
    "      \"ValidityPeriodDescNew\" : \"\",\n" +
    "      \"Subtitle\" : \"完成任意一笔消费并成功积分后方可领取\",\n" +
    "      \"EnableTime\" : \"2025/12/25 00:00:00\",\n" +
    "      \"ThirdPartyItemID\" : \"1467298\",\n" +
    "      \"Verification\" : 3,\n" +
    "      \"IsCompensation\" : false,\n" +
    "      \"JoinShopList\" : [\n" +
    "        {\n" +
    "          \"MallID\" : 12501,\n" +
    "          \"ID\" : 1380765,\n" +
    "          \"Name\" : \"宝安客服台\",\n" +
    "          \"CompenScale\" : 0,\n" +
    "          \"Logo\" : \"sp_mall/7e/v4/54/46-46be-470c-8c7b-686c62cc9758.jpg\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"CodeUrl\" : \"service/CreateQrCode?code=957031856723376267&w=288&h=288\",\n" +
    "      \"OverdueTime\" : \"2026/01/23 23:59:59\",\n" +
    "      \"RuleNo\" : \"KQ12501202502280006\",\n" +
    "      \"Subsidy\" : 0,\n" +
    "      \"CouponID\" : 3701665381,\n" +
    "      \"LogoList\" : [\n" +
    "        \"sp_mall/7e/v4/54/46-46be-470c-8c7b-686c62cc9758.jpg\"\n" +
    "      ],\n" +
    "      \"DiscountAmount\" : null,\n" +
    "      \"InsteadTime\" : 0,\n" +
    "      \"SingleCosts\" : 0,\n" +
    "      \"ShowType\" : 1,\n" +
    "      \"ReduceMoney\" : null,\n" +
    "      \"MallLogo\" : \"sp_mall/77/da/re/4a-8ab9-4842-96fc-1c2c71f467b1.jpg\",\n" +
    "      \"ShopRuleNo\" : null,\n" +
    "      \"UseState\" : 3,\n" +
    "      \"Deductible\" : null,\n" +
    "      \"ValidityPeriodDesc\" : \"12-25 00:00至2026-01-23 23:59\",\n" +
    "      \"State\" : 3,\n" +
    "      \"Type\" : 3,\n" +
    "      \"PICMID\" : 2485595,\n" +
    "      \"IsPartTimeUse\" : false\n" +
    "    }\n" +
    "  ],\n" +
    "  \"e\" : \"成功\"\n" +
    "}";


$done({ body });