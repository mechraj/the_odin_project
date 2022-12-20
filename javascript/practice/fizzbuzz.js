//Task : To write a program that takes input from the user, counts from 1, till the number user entered
//when it reached the muktiple of 3 it prints out fizz and buzz when it reached multiples of 5
// If the number is divisible by both 3 and 5 print fizzbuzz

//Plan : Whrn user enters a number
//start looping from 1
//If the number is divisible by 3, print fizz
//If number is divisible by 5 print buzz
//if number is divisible by both 3 and 5, print fizzbuzz

//Step 1 : ASking user for a input
let answer=parseInt(prompt('Please enter a number you want to fizz upto: '))

//Step 2 :Looping from 1 to the numbner entereed
for (let i = 1;i<=answer;i++) {
    //step5: If the number is divisible by both 3 and 5 print FIzzBuzz
    if(i%3==0 && i%5==0){
        console.log('FizzBuzz')
    }
    //step 3 :If the number is divisible by 3 we print fizz
    else if (i%3==0){
        console.log('fizz')
    }
    //step 4 :If the number is divisible by 5 we print buzz
    else if (i%5==0) {
        console.log('Buzz')
    }
    else{
        console.log(i);   
    }
}
