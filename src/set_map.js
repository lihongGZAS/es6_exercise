"user srtict";

let set = new Set([1, 2, 4, 1, 6]); // Set([])可以对传入的数组进行去重

console.log(Array.from(set)); // 将去重后的结果转换成真正的数组
set.forEach((key, value)=>{
    console.log("key==" + key + ", value==" + value)
})

// key()遍历键名
for(let item of set.keys()) {
    console.log(item);
}

// values()遍历所有键值
for(let item of set.values()){
    console.log(item)
}
// entries()遍历出来的是一个个数组成员（成员都是键名和键值组成的）
for(let item of set.entries()){
    console.log(item);
}