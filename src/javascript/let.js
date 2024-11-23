const obj1={
    name:"Saleh",
    marks:29.5,
    result:function rr(){
        console.log(`${this.name}  has ${this.marks} marks.`);
        
    }
}


const obj2={
    name: "Kumar BJ",
    marks:17.5
}
const obj3={
    name: "Herjiani",
    marks:30
}
const detail = obj1.result.bind(obj1);

detail()

function Num(...num){
    console.log(num);
}


const x= [12,13,1,4,14,];
let m= Math.max(...x);

console.log(m);
Num(12,13,143)

const sum =(...num)=>num.reduce((p,n)=>p+n)

console.log(sum(12,13,14,10));
