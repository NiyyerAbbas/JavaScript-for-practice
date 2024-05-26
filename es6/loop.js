//function to print stars
// funnction ShowStars(){
//     let num = 5;
//     for (let row=1; row < num; row++){
//         let stars = '';
//         for(let col = 0; col < num; col ++){
//             stars +="*";
            
//         }
//         console.log(stars);
//     }
// }
// ShowStars();
// funnctionShowStars(){
//     for (let row=5; row < num; row++){
//         let stars = '';
//         for(let col = 0; col < num; col ++){
//             stars +="*";
            
//         }
//         console.log(stars);
//     }
// }
// ShowStars();




// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= n; num++) {
      pattern += variable+" ";
      variable++;
   }
   pattern += "\n";
}
console.log(pattern);




