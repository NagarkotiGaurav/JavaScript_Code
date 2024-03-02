let name = String("gaurav");
let iterator = name[Symbol.iterator]();
let char = iterator.next();
console.log(char)
for (const v of name ){
    console.log(v);
}