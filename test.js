var today= new Date();
today = today.getFullYear()
console.log( today);

const name = String("gaurav");
console.log(typeof(name));

const str = "Gaurav";
for(const v in str){
    console.log(v);
}
console.log(String.fromCodePoint(str.codePointAt(0))); // "𠮷"
console.log(...[str][0]); // "𠮷"
