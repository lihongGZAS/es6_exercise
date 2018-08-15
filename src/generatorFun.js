function* foo () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 5;
}
var cc = foo();

// 遍历器对象的next方法返回一个对象如：{value: 1, done: false}
console.log(cc.next())

console.log(cc.next());

// for...of直接遍历出yield后面的表达式结果，而并非是一个对象
for(let item of cc) {
    console.log(item);
}

