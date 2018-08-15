

function proTest() {
    let p = new Promise (function(resolve, reject){
        /**
         *  向服务端发送请求 
         */ 
        // 根据请求的响应进行处理
        setTimeout(() => {
            var number = Math.ceil(Math.random()*10);
            if (number < 5) {
                resolve(number);
            } else {
                reject("数字太大了");
            }
        }, 2000);
    })
    return p;
}

proTest().
then(function(data){
    console.log("resolve");
    console.log(data);
})
.catch (function(reson) {
    console.log("rejected");
    console.log("错误提示："+reson);
})
.finally(()=>{ // 不管怎样都会执行
    console.log("game over");
})