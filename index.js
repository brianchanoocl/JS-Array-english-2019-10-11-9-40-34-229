// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a));
console.log(Array.isArray(b));


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a = a.map((x)=>x*2);
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var color_string = "";

do{
color_string = color_string + colors.shift() + " ";
} while (colors.length > 0);

color_string = color_string.substring(0, color_string.length - 1);

console.log(color_string);

// case 2 output: 'Red+Green+White+Black'
color_string = "";

do{
color_string = color_string + colors.shift() + "+";
} while (colors.length > 0);

color_string = color_string.substring(0, color_string.length - 1);

console.log(color_string);

// case 3 output: 'Red,Green,White,Black'
color_string = "";

do{
color_string = color_string + colors.shift() + ",";
} while (colors.length > 0);

color_string = color_string.substring(0, color_string.length - 1);

console.log(color_string);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a = a.sort((a, b)=>{return b-a});

console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var largeHz = 1;
var frequency = 0;
var item;
for (var i=0; i<a.length; i++)
{
        for (var j=i; j<a.length; j++)
        {
                if (a[i] == a[j])
                 frequency++;
                if (largeHz<frequency)
                {
                  largeHz=frequency; 
                  item = a[i];
                }
        }
        frequency=0;
}
console.log(item+" is the most frequent element") ;
