function greetNewUser(callBack) {
    const greeting = callBack("ご新規さん")
    console.log(greeting);
}

function hello(name) {
    return `こんにちは！${name}！！`;
}

function goodMorning(name) {
    return `おはようございます！${name}！！`;
}
// こんにちは！ご新規さん!!
greetNewUser(hello);

// おはようございます！ご新規さん!!
greetNewUser(goodMorning);