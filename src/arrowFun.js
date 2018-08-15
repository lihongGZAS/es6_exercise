{
    // 只有一个参数且表达式语句只有一行的（如return a），函数表达式的花括号可以不写
    let test = a => a;
    var result = test("hello ES6");
    console.log(result);

    // 没有参数的，箭头函数需要有()，如果表达式只有一行，那么函数表达式的花括号可以不写
    let tellMeWhy = ()=> "hello world";
    let saySome = tellMeWhy();
    console.log(saySome);

    // 两个及以上参数，则必须有()，参数直接以逗号","分隔,函数表达式不多行的，花括号必须有
    let getUserInfo = (name, age) => {
        console.log("jack: hi, " + name + ", how old are you? " + name + ":" + age);
    }
    getUserInfo('lucy', 18);

    // 箭头函数的this指向更明确，不再善变
    let getSomeInfo = () => {
        const ary = [1, 2, 3];
        document.onclick = ev => {
            console.log(this.ary);
        }
    }

    getSomeInfo();

    let addNum = (x, y=7, z=42)=>{
        return x+y+z;
    }
    console.log(addNum(1,2,3));
}    