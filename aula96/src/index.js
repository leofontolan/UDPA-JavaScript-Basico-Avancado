const firstName = 'John';
const age = 30;
const obj = { firstName, age };
const obj2 = {...obj, age: age + 1 };

console.log(obj2);