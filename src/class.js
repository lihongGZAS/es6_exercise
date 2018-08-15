class Point {
    constructor(){
        this.wantSay = this.wantSay.bind(this);
    }
    wantSay(){
        this.say(5, 6);
    }
    say(x, y) {
        console.log("can I love you, baby?");
        this.x = x;
        this.y = y;
        console.log(this.x + '----' + this.y);
    }
    
}

let point =  new Point();
// console.log(point.constructor===Point.prototype.constructor)

point.wantSay(); // 通过实例来调用类上面方法

// const {wantSay} = point;
// wantSay(); // 报错，wantSay not defined


// 
class Father{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log("Hi, I'm " + this.name);
    }
    static songs(){
        console.log('say you again!');
    }
}

class Child extends Father {
    constructor(name){
        super(name); // 子类是没有this对象的，必须调用super方法，继承于父类的this对象，然后进行加工，得到属于子类自己的this对象
    }
}

var parent = new Father('bob');
var children = new Child('jack');

parent.sayName();
// parent.songs(); // Uncaught TypeError: parent.songs is not a function，类上面的静态方法，实例对象是不能调用的，只能通过类进行调用
Father.songs(); 

children.sayName();
Child.songs();