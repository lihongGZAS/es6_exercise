class Father {
    test(){
        console.log("hi, baby");
        console.log(this);
    }
}
let parent = new Father();
parent.test();

class Child extends Father {
    // 如果子类中没有显示声明构造函数，也没有太大关系，可以正常在子类的方法中使用this对象，因为子类中已经默认存在这个构造函数的，如下
    // constructor(){
    //     super();
    // }
    wantSay() {
        this.miss();
        console.log(this); // 这里的this指向子类
    }
    miss() {
        console.log("I want to see you again");
        // super(); // super函数只能在子类的构造函数constructor方法中调用
    }
}

const chirld = new Child();
chirld.wantSay();
chirld.test();
chirld.miss();