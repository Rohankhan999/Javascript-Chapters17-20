//Assigment no 06//

//Question no 01,02//

var arr = [[1,2,3],[1,2,3],[1,2,3]]

console.log(arr[0].join(" ") );
console.log(arr[1].join(" ") );
console.log(arr[2].join(" ") );

//Question no 03//

// for(var  i = 0; i <= 10 ;  i++){
//    document.write("<h1>" + i + "</h1>");
// }


//Question no 04//

//  for(var i = 1 ; i <= 10 ; i++){
//     document.write( "<h1>" +2 + " x " + i + " = " + i*2 + "</h1>");
//  }


 var number = prompt("Enter Your Number!");
 var lenght = prompt("Enter your lenght!")

for(var i = 1 ; i <= lenght; i++){
    document.write("<h1>"+ number + " x " + i + " = " + number * i +"</h1>")
}