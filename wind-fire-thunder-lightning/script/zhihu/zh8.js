var url = $ruquest.url;

var arr = url.split("/");

var param1 = "";
var param2 = "";
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 19) {
        if (param1.length === 0) {
            param1 = arr[i];
            continue;
        }
        param2 = arr[i];
        break;
    }
}

// https://www.zhihu.com/market/paid_column/1738214936969220096/section/1736790346561044480?in_notes=2&zh_forcehybrid=1&zh_nav_left=back&preload=prefetch

$ruquest.url = "https://www.zhihu.com/market/paid_column/" + param1 + "/section/" + param2 + "?in_notes=2&zh_forcehybrid=1&zh_nav_left=back&preload=prefetch";

console.log($ruquest.url);

$done({$ruquest});
