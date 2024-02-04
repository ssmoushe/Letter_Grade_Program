var mark = prompt("Enter input exam marks: ")

if  (mark > 100 || mark < 0)
console.log("Invalid marks");

else if (mark>=80 && mark<=100)
console.log("A+");


else if (mark>=70 && mark<=79)
console.log("A");

else if (mark>=65 && mark<=69)
console.log("A-");

else if (mark>=60 && mark<=64)
console.log("B+");

else if (mark>=55 && mark<=59)
console.log("B-");

else if (mark>=50 && mark<=54)
console.log("C+");

else if (mark>=45 && mark<=49)
console.log("C-");

else if (mark>=40 && mark<=44)
console.log("D");



else
console.log("Fail");
