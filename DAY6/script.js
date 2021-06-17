// -------1------
console.log(Array.isArray('w3resource'));
console.log(Array.isArray([1, 2, 4, 0]));
// -------1------


// ----2----
const old=[1, 2, 4, 0];
const cloned= [...old];
console.log(cloned);

const old2=[1, 2, [4, 0]];
const cloned2=[...old2];
console.log(cloned2);

// ------2------

// -----3------

const first = [7, 9, 0, -2];
console.log(first.slice(0,3));

// -----3------

// -----4------
const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(''));
console.log(myColor.join(' ,'));
console.log(myColor.join('+'));

// -----4------

// ----5-----
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; //array
var mf = 1; //default maximum frequency
var m = 0;  //counter
var item;  //to store item with maximum frequency
for (var i=0; i<arr1.length; i++)    //select element (current element)
{
        for (var j=i; j<arr1.length; j++)   //loop through next elements in array to compare calculate frequency of current element
        {
                if (arr1[i] == arr1[j])    //see if element occurs again in the array
                 m++;   //increment counter if it does
                if (mf<m)   //compare current items frequency with maximum frequency
                {
                  mf=m;      //if m>mf store m in mf for upcoming elements
                  item = arr1[i];   // store the current element.
                }
        }
        m=0;   // make counter 0 for next element.
}
console.log(mf)

