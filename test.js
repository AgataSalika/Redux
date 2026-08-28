// let chislo = 122220;

// switch (chislo) {
//   case 10:
//     console.log("Число равно = 10") 
//     break
//   case 5:
//     console.log("Число равно = 5");
//     break
//   default:
//     console.log("Другое значение");
// }

function getTimeOfDay(hour) {
switch (true) {
case hour >= 6 && hour < 11:
 console.log("Утро");
 break 
 case hour >= 12 && hour < 17:
 console.log("День");
 break 
  case hour >= 18 && hour < 22:
 console.log("Вечер");
 break 
   case hour >= 23 || hour < 5:
 console.log("Ночь");
 break  
  default:
console.log("Ошибка");
}

}

getTimeOfDay(14); 
getTimeOfDay(3);  