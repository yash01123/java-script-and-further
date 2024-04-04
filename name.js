/*const n=['kartik','abhay','atul','spideman','yash'];
console.log(n.length);
let l=n.length;

if(l>5)
{
    console.log(n);
}
*/


const nums=['kartik','abhay','atul','spideman','yash'];


//shortcut

//nums.map((a)=>{console.log(a);});
const upperCaseName= nums.map((n)=>{return n.toUpperCase()});
console.log(upperCaseName);


//filter

nums.filter((n)=>{return n%2==0});
console.log(evenNums);




