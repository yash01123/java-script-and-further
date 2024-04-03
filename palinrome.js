let n=191;
let sum=0;
let t=n;
let rev
while (n!=0) 
{
    rev=n%10;
    sum=(sum*10)+rev;
    n=parseInt(n/10);
}
if(t==sum){
    console.log('palinrome');
}
else{
    console.log('not palindrome');
}
