 // Using for loop

 let a = prompt("Enter a number");
 let fact = 1;

 for (let i = 1; i <= a; i++) {
     fact = fact * i;

 }

 console.log(fact);

// Using reduce method

let fact1=[1, 2, 3, 4, 5, 6]
const red=(a,b)=>{
    return a*b

}
 console.log(fact1.reduce(red))
