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
//     // 10 - masala 
//     function findSmallestInt(arr) {
//         return Math.min(...arr);
//     }

// }
