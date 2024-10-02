
let group1= ["Sarah", "Carmen", "Rebecca"];

let group2= ["Amy", "Kristein", "Forest", "Seater"];

let result= [...group1, ...group2];
console.log(result);

console.log("For object:");
const obj1= {
    name: "avicii",
    age: 28
};

const obj2= {
    name2: "martin",
    age2: 27
};

let result2= {...obj1, ...obj2};
console.log(result2);

