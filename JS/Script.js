// 1.	find the duplicate in a string() (use array) -optional


// 2.	reverse a string (use array method)
var str="Hello Diksha!"
console.log(str)
//console.log(str.length);
var split_str=str.split("");
//console.log(split_str);
var str_reverse=split_str.reverse();
//console.log(str_reverse);
console.log(str_reverse.join(""))


// 3.	find the highest and lowest value in array
var n = [3, 6, 5, 9, 2];
var a=Math.max(...n);
var b=Math.min(...n);
console.log(a);
console.log(b);

// 4.	sorting of an array - optional


// 5.	(employee data structure): practice array of objects
var employee = [
    {
        emp_id:101,
        emp_name:"shyam",
        emp_age:40,
        emp_city:"Pune",
        start_year:2012,
    },
    {
        emp_id:231,
        emp_name:"gopal",
        emp_age:38,
        emp_city:"mumbai",
        start_year:2014,
    },
    {
        emp_id:301,
        emp_name:"sita",
        emp_age:35,
        emp_city:"mumbai",
        start_year:2013,
    },
];
console.log(employee);
console.log(employee[2].emp_id);

// 6.	display first 3 elements in an array
var a=[3,5,8,1,9,7];
console.log(a.slice(0,3));

// 7.	remove 4th (index) element and add 2 element there
var a=[3,5,8,1,9,7];
console.log(Array.isArray(a));
console.log(a);
a.splice(4,1,10,12);//array.splice(index, howmany, item1, ....., itemX)
console.log(a);

// 8.	Study events, onload, ondoubleclick, onsubmit, onchange, onkeyup, onkeydown
function getName(){
    var a= document.getElementById("fname").value
    var b= document.getElementById("lname").value
    var c= document.getElementById("age").value
    console.log(a)
    console.log(b)
    console.log(c)
};

// 9.	task on function and math object
// create parametrized method/function to multiply 3 numbers
function mul(a,b,c){
    var m=a*b*c;
    console.log(m);
}
mul(2,3,4);

// create parametrized method to divide 2 numbers
function divide(a,b){
    var d=a/b;
    console.log(d);
}
divide(8,2);

// create a method to add background color to div element
function getName(){
    document.getElementById("bg").style.backgroundColor = "blue";
}

// write a js method, when user click on button, display random integer below it.
function getNumber(){
   var n=(Math.floor(Math.random()*10));
   document.getElementById("Number").innerHTML=n
}

// write js function to format number up to specified decimal places.

// write function to convert negative number to positive number
function getno(a){
    console.log(Math.abs(a))
}
getno(-5)

// write function to generate random background color of body
document.body.style.backgroundColor="pink"

// onload of your webpage, display modal (bootstrap 4/5)

