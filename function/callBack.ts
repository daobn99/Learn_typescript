function greetNewUser(callBack: (name: string) => string) {
    const greeting = callBack("ご新規さん")
    console.log(greeting);
}

function hello(name: string) {
    return `こんにちは！${name}！！`;
}

function goodMorning(name: string) {
    return `おはようございます！${name}！！`;
}

// こんにちは！ご新規さん!!
greetNewUser(hello);

// おはようございます！ご新規さん!!
greetNewUser(goodMorning);


