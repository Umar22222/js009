const time = document.querySelector(".time")
function currentTime(){
let date = new Date()
let hour = date.getHours().toString().padStart (2, "0")
let minute = date.getMinutes().toString().padStart(2, "0")
let second = date.getSeconds().toString().padStart(2, "0")  
time.innerHTML = `${hour}:${minute}:${second}`

}
currentTime()


setInterval(()=>{
    currentTime()
}, 1000)









// {
// // 1 - masala
// var isSquare = function(n){
//     return Number.isInteger(Math.sqrt(n));
// }
// }

// {
// // 2 - masala
// function getMiddle(s)
// {
//    const len = s.length;
//   const middle = Math.floor(len / 2);
//   if (len % 2 === 1) {
//     return s[middle];
//   } 
//   else {
//     return s[middle - 1] + s[middle];
//   }
// }
// }


// {
// // 3 - masala
// function isIsogram(str){
//     const lowerStr = str.toLowerCase(); 
//    return new Set(lowerStr).size === lowerStr.length;
// }
// }

// {
// // 4 - masala
// function XO(str) {
//     const lowerStr = str.toLowerCase();

// const countX = (lowerStr.match(/x/g) || []).length;
// const countO = (lowerStr.match(/o/g) || []).length;

// return countX === countO;
// }
// }

// {
// // 5 - masala
// function squareDigits(num){
//     return Number(num.toString().split('').map(digit => Math.pow(digit, 2)).join(''));
//  }
//  }
// {
//     // 6 - masala 
//     function circleArea(circle) {
//         return Math.PI * Math.pow(circle.radius, 2);
//     }

//     const center = new Point(0, 0);
//     const myCircle = new Circle(center, 5);

//     console.log(circleArea(myCircle));
// }


// {
//     // 7 - masala 
//     function validateCode(code) {
//         const codeStr = code.toString();

//         return /^[123]/.test(codeStr);
//     }

//     console.log(validateCode(12345));
//     console.log(validateCode(23456));
//     console.log(validateCode(34567));
//     console.log(validateCode(45678));
//     console.log(validateCode(0));
// }





// {
//     // 8 - masala 
//     function distinct(a) {
//         const seen = new Set();

//         return a.filter(item => {
//             if (seen.has(item)) {
//                 return false;
//             } else {
//                 seen.add(item);
//                 return true;
//             }
//         });
//     }

//     console.log(distinct([1, 1, 2]));
//     console.log(distinct([1, 2, 1, 1, 3, 2]));
// }




// {
//     // 9 - masala 

//     function combat(health, damage) {

//         const newHealth = health - damage;
//         return newHealth < 0 ? 0 : newHealth;
//     }
// }

// {
//     // 10 - masala 
//     function findSmallestInt(arr) {
//         return Math.min(...arr);
//     }

// }
