const sum= (...num)=>num.reduce((prv,curr)=>prv+curr);

const greaterNum=(...num)=>num.reduce((p,n)=>p>n?p:n);

const smallNum=(...num)=>num.reduce((p,n)=>p<n?p:n);

console.log(sum(12,23));

console.log(`Great Number: ${greaterNum(12,13,2, 4,12,1)}`);

console.log(`Smaller Number: ${smallNum(12,13,2, 4,12,1)}`);


let x= [12,13,1,4,23,45];

console.log(...x);






