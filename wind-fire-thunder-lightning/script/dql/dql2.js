
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

var body = $response.body;

const regexExact2 = /2025\/12\/25/g;
const regexExact1 = /2025-12-25/g;

body = body.replaceAll(regexExact1, todayDate1);
body = body.replaceAll(regexExact2, todayDate2);
// body = body.replace(/"OverdueTime":\s*2025\/12\/25 23:59:59/g, '"OverdueTime": ${todayDate2} 23:59:59');
// body = body.replace(/"ValidityPeriodEnd":\s*2025-12-25 23:59:59/g, '"ValidityPeriodEnd": ${todayDate1} 23:59:59');

// /"ValidityPeriodEnd":\s*\d{4}-\d{2}-\d{2}\s+23:59:59/g






$done({ body });