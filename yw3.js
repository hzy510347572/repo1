var obj = $request.body;

console.log("-------------------------"+obj)

obj = "event=get_buypage_content&properties=%7B%22page%22:%22%E8%B4%AD%E4%B9%B0%E6%94%AF%E4%BB%98%E9%A1%B5%22,%22page_type%22:%22order%22,%22page_key%22:%22none%22,%22pointId%22:%221120%22,%22block%22:%22none%22,%22position%22:%22none%22,%22from_page%22:%22%E4%B9%A6%E6%9E%B6%22,%22from_page_type%22:%22bookshelf%22,%22from_page_key%22:%22none%22,%22style%22:%22none%22,%22contents%22:%22%5B%7B%5C%22content%5C%22:%5C%2212747059%5C%22,%5C%22content_id%5C%22:%5C%22none%5C%22,%5C%22content_type%5C%22:%5C%22book%5C%22,%5C%22content_number%5C%22:%5C%22none%5C%22%7D,%7B%5C%22content%5C%22:%5C%22%E7%AB%8B%E5%8D%B3%E8%B4%AD%E4%B9%B0%5C%22,%5C%22content_id%5C%22:%5C%22none%5C%22,%5C%22content_type%5C%22:%5C%22button%5C%22,%5C%22content_number%5C%22:%5C%22none%5C%22%7D%5D%22,%22bookInfo%22:%22%5B%7B%5C%22book_id%5C%22:%5C%2212747059%5C%22,%5C%22grade%5C%22:%5C%22none%5C%22,%5C%22state%5C%22:%5C%22none%5C%22,%5C%22popularity%5C%22:%5C%22none%5C%22,%5C%22reviews%5C%22:%5C%22none%5C%22,%5C%22is_hear%5C%22:%5C%22none%5C%22,%5C%22recommend%5C%22:%5C%22none%5C%22,%5C%22discount%5C%22:%5C%22none%5C%22,%5C%22price%5C%22:%5C%220%5C%22,%5C%22discount_price%5C%22:%5C%22none%5C%22%7D%5D%22,%22buy_method%22:%22%E6%8C%89%E6%9C%AC%22,%22pay_user_type%22:%22%E4%BC%9A%E5%91%98%E4%B9%A6%22,%22pay_type%22:%22%E5%82%A8%E5%80%BC%E8%AE%A2%E5%8D%95%22,%22pay_price%22:%220%E9%98%85%E9%A5%BC%22,%22iconins_balance%22:99999999,%22ivouchers_balance%22:99999999%7D";

console.log(obj)
$done({body : obj});
