
// Qus 
// 1. Get fast name from user
// 2. Get last name from user
// 3.total length for user 
// 4. convart username into upercase
// 5. convart username into lowercase


// 1
// // var mc = prompt("gal da vi");
// // document.write(mc);
// 2

// // var motu = "pinky rani mohonta"

// // votki= motu.slice(10);
// // document.write(votki);
// 3

// // var motki = "pinky rani mohanta";
// // document.write(motki.length);

// 4

// var motu= "pinky rani votki";
// document.write(motu.toUpperCase());

// 5
// var motu= "pinky rani votki";
// document.write(motu.toLocaleLowerCase());


// task 3 


// let number1 = prompt("Enter Your Fast number ")
// let number2 = prompt("Enter Your Second number ")
// number1= parseInt(number1,10);
// number2= parseInt(number2,10);
// let sum , sub , div , voda;

// sum= number1+number2;

// document.write("sum = "+ sum +"<br/>" );

// sub= number1-number2;

// document.write("sub = "+ sub +"<br/>");

// div= number1/number2;

// document.write("div = "+ div +"<br/>");

// voda= number1*number2;

// document.write("Voda = "+ voda +"<br/>");

// task 4


// var num1 = 10 ;
// var num2 = 29 ;
// var num3 = 40;

// document.write(num1 > num2);
// document.write(num1 < num2);
// document.write(num1 >= num2);

// document.write( num1<num2 != num2<num3 );


// task 4

// var ab = prompt("enter your number");
//  if (ab >= 80)
//     dconsole.log("A+");
// else if (ab>= 70)
//     console.log("A");   
// else if (ab>= 60)
//     console.log("A-");
// else if (ab>= 50)
//     document.write("B");
// else if (ab>= 40)
//     console.log("c");
// else if (ab>= 34)
//     console.log("d");
// else
//     console.log("Fail");


// else if  (ab >= 70 && ab<80);
// document.write("A");



// var latter = prompt("enter Your Letter");

// latter = latter.toLowerCase();

// switch(latter){
//     case "a":
//         console.log("Vowel")
//     break;
//     case "e":
//         console.log("Vowel")
//     break;
//     case "i":
//         console.log("Vowel")
//     break;
//     case "o":
//         console.log("Vowel")
//     break;
//     case "u":
//         console.log("Vowel")
//     break;
//     default:
//     console.log("consunent");
// }


// for (var x=1 ; x<=1000 ; x= x+10 ) 
// {
//     document.write("" + x);
// }

// var num = new Array();

// for(i=0; i<5; i++)
// {
//     num[i]= parseInt(prompt("enter your number"));
// }

// var sum = 0;
// for( i=0; i<5; i++)
// {
//     console.log (num[i]);
//     sum = sum + num[i];

// }
// console.log(sum);


// array libary 

// pop push 

// var pinku = [ 'motu', 'motki' , 'votki', 'ETC'];
// pinku.pop();
// pinku.push('soitan');
// pinku.shift()
// pinku.unshift('jawra');
// var shovon=pinku.slice(1);
// adding element with splice mathods
// pinku.splice(2,0,'shovon', 'valo','cela');
// remove element with splice mathods
// pinku.splice(1,3);


// pinku.sort();

// console.log(pinku);

// // using sort with number Element;

// var sona = [ 1,22,34,2231,12,332,312,111];
// sona.sort(function (a,b){
//     return(a-b);
// })
// console.log(sona);

// task 8 
// Create a funtion called highest score that will
// receive a one dimantional array called score
// return the high score

// function hightscore(score){
//     let max = score[0];

//     for( var x=0; x<score.length; x++){
//         if(max<score[x]){
//             shovon = score[x];
//         };
//     } 
//     return shovon; 
// }
// let value = [10,376,37,838,648.173,87492,873,3847,84778,869424];
// let voda = hightscore(value);
// console.log(voda);

// task 9 
// create a funtion name highestscorer
// that will received 2d array called playerinfo
// based on highest score , return name of the player.


// function highscorer(playerinfo){
//    let highscorename = playerinfo[0] [0];
//    let highscorepoint = playerinfo[0] [1];

//    for(var x=1 ; x<playerinfo.length; x++){
//         if(highscorepoint<playerinfo[x] [1]){
//             highscorepoint = playerinfo [x][1]
//             highscorename=playerinfo[x][0]
//         }
//     } 
//    // return highscorename;
//      return highscorepoint;
//    } 


// let playername = [
//     [ 'Shovon' , 12] ,
//      [ 'shoumik' , 14] , 
//      ['pinky' , 78] , 
//      ['sujoy', 76]
//     ];

// let voda =highscorer(playername);
// console.log(voda);






// task 9 
// create a funtion name highestscorer
// that will received 2d array called playerinfo
// based on highest score , return name of the player.


// function highestscore(playerinfo){
//     let name = playerinfo[0][0]
//     let point = playerinfo[0][1]

//     for(let x=0; x<playerinfo.length; x++){
//         if(point<playerinfo[x][1]){
             
//              point = playerinfo[x][1]
//              name = playerinfo[x][0]
//         }
//     }
//     return name;
// }

// let player = [
//     ['shovon' ,89],
//     ['shoumik' , 12],
//     ['Rupon', 17],
//     ['Srijon' , 76]
// ];
// let topplayer =highestscore(player);
// console.log(topplayer);

// how to create an object 
// how to print value of an object
// adding a constractor
// adding a funtion inside a conastractor


// let student1 ={
//      name : 'jhsdkf',
//      roll : 8689,
//      cgpa : 3.67,
//      language : ["dff", "fdf"]
// }
// console.log(student1.cgpa);



// how to create a constractor . and adding a inside a constractor .


// function Object (name , roll , cgpa , language){
//      this.name = name,
//      this.roll = roll ,
//      this.cgpa = cgpa,
//      this.language = language   

//      this.display= function (){
//           console.log(this.name); 
//           console.log(this.roll); 
//           console.log(this.cgpa); 
//           console.log(this.language); 
//      } 
// }

// let  student1= new Object ("pinky ", 76, 3.34, ["bangla", "english"]);
// let  student2= new Object ("shakil", 33, 3.44, ["bangla", "english"]);
// let  student3= new Object ("shafim", 78, 3.33, ["bangla", "english"]);
// let  student4= new Object ("shovon ", 72, 2.34, ["bangla", "english"]);

// student1.display()
// student4.display()



// Gussing game .
// gussing a number 1 to 5 
// genarate a number between 1 to 5
// if the guss number match tha random number then called you have win otherwise loss .
// run the game for 5 time 
// show the number to win or loss
// var win = 0;
// var loss = 0;

// for(var x=1; x<=5; x++){
//      var gussnum = parseInt(prompt("Enter your guss number"));
//      var randomnum = Math.ceil(Math.random()*5);
//      if(gussnum==randomnum){
//           console.log("you have win")
//           win++;
//      }
//      else{
//           console.log("you have loss this number is "+ randomnum)
//           loss++;
//      }
// }

// document.write("you win" + win + "<br>" );
// document.write("you loss" +loss + "<br>");   


// data object and mathod
// var time = new Date ();
// console.log(time);

// var tarik = time.getDate();
// console.log(tarik);
// var day = time.getDay();
// console.log(day);
// var secound = time.getSeconds();
// console.log(secound);



// DOM-Document object model
document.getElementById("shovon").innerHTML="Pinky";
document.getElementById("kumar").innerHTML="rani";
document.getElementById("das").innerHTML="mohanta";
