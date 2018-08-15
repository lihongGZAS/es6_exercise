// ES5 中常量的写法

Object.defineProperty(window, "PI2", {
    value: 3.1415926,
    writable: false,
})




console.log(window.PI2)

// ES6 的常量写法

const PI = 3.1415926
console.log(PI)

// 复杂型变量数据的const只是针对变量的内存地址，只要指向的内存地址不变，改变数据的属性值不影响
const testObj = {
    name: 'lucy',
    age: 29
}
testObj.name = 'jack';
console.log(testObj)
