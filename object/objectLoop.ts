const foo = { a: 1, b: 2, c: 3 };
for (let value of Object.values(foo)) {
    console.log(value);  // 1 2 3
}

for (const key of Object.keys(foo)) {
    console.log(key); // a b c
}

for (const [key, value] of Object.entries(foo)) {
    console.log(key, value);
}