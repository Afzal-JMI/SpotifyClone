let students = [
    { name: "Piyush", rollNumber: 31, marks: 80},
    { name: "Jenny", rollNumber: 15, marks: 69},
    { name: "Kaushal", rollNumber: 16, marks: 35},
    { name: "Dilpreet", rollNumber: 7, marks: 55},
];

students.forEach((i)=>{
    if(i.marks<60){
        i.marks+=20;
    }
})

console.log(students);

let total = students.filter((i)=>{
    return i.marks>60;
}).reduce((arr, crr)=>{
    return arr+crr.marks;
},0)

console.log(total);