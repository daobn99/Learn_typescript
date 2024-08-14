const book = undefined;
// const title = (book === null || book === undefined) ? undefined : book.title;
const title = book?.title;
console.log(title);

const books = undefined;
const title1 = books?.[0];
console.log(title1);

//関数呼び出す際のオプショナルチェーン
const increment = (n) => n + 1;  //đéo hiểu sao vẫn lỗi mặc dù cùng là any
const result = increment?.(2);
console.log(result);