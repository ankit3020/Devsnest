// Day 7  
//--------1st-----------
const student = { 
    name: "David Rayy",
    class: "VI", 
    rollno: 12 
};

const output= Object.keys(student);
console.log(output.toString());
//--------1st-----------

//--------2nd------------
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(student);
delete student.rollno;
console.log(student);

//---------3rd-----------



//---------4th-----------
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

library.forEach((lib, i) => {
    console.log(`${library[i].author}, ${library[i].title}, ${library[i].readingStatus}`);
})
//--------4th----------

//--------5th----------
const radius= prompt('enter radius');
const height=prompt('enter height');

let volume = Math.PI * Math.pow(radius, 2) * height;
console.log(volume.toFixed(4));
//--------5th---------

//--------6th---------
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

library.sort((a, b) => {
    return b.libraryID - a.libraryID;
});

library.forEach((lib, i) => {
   const store=[`{author: ${library[i].author}, libraryID: ${library[i].libraryID},title:${library[i].title}}`]
   console.log(store);
});
//--------6th--------