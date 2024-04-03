const nums=[4,8,3,1,6,9];
const newNums=[];
for(let n of nums ){
    newNums.push(n**3)
}
console.log(newNums);

//shortcut

//nums.map((a)=>{console.log(a);});
const newArr= nums.map((a)=>{return a**3});
console.log(newArr);

