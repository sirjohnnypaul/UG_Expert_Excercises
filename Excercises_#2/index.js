

//excercise 1
console.log('Excercise 1');
//declaring 50 elements array and fillin with random data
let vals = new Array(50);
vals = vals.fill(0).map(x => Math.random()+3);
console.log(vals);

//rounding each element to 2 decimal places
sampleArray = vals.map(function(each_element){
    return Number(each_element.toFixed(2));
});
console.log(sampleArray);

//excercise 2
console.log('Excercise 2');


for(var y=0; y <= 100; y++) {
    if(y%3 == 0 && y%9 ==0){
        console.log('Dividable by both: '+y);
    }
    else {
        console.log('Dividable by one of them or not: '+y);
    }
}

//Write a function accepting two parameters: One - type of action (addition, subtraction, multiplication, division, roots); 
//Two - input number.Create validation. If input of any is text -> "Error, only numbers are supported". 
//Define each action and return the result. Test if everything is working.

console.log('Excercise 3');

function myCalculator(action,num1,num2) {

    switch(action.toLowerCase()) {
        case 'addition':
            result = num1+num2;
            break;
        case 'substraction':
            result = num1 - num2;
            break;
        case 'multiplication':
            result = num1 * num2;
            break;
        case 'division':
            if(num2 != 0){
            result = num1 / num2
            }
            else {
                console.log("We won't commit a crime and divide by zero for you!")
            }
            break;
        default:
            console.log('Hey');
    }
    console.log(result);
}

myCalculator('division',1,1);

//zadanie 4
// Write a JavaScript program to sort the items of an array 1- ascending and 2- descending.

var arrInput = [ 1,42,111,-25,746,2,56,-2];

//ascending
console.log('Sorted in ascending order '+arrInput.sort());
//descending
console.log('Sorted in descending order '+arrInput.sort().reverse());


