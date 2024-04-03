const user= { name : 'raju' , email:'raju@gamil.com' , password: '1234'};
console.log(user);
console.log(user.email);


console.log(user['password']);

//key

let key='name';
console.log(user[key]);


user.password="awdhibvi";
console.log(user);
user.address='lucknow';
console.log(user);

//excess all keys
console.log(Object.keys(user));

//excess all values
console.log(Object.values(user));

const smartphhone={
    brand:'samsung',
    model:'s24',
    price:'120000',
    colors:['white' , 'black', 'blue'],
};
console.log(smartphhone.colors[1][3]);

const smartphhonelist=[
    {brand:'samsung ' , model: 's24' , price: 12000, colors:['white' , 'black' , 'blue']},
    {brand:'iphone ' , model: 's25' , price: 12001, colors:['white' , 'black' , 'blue']},
    {brand:'nokia ' , model: 's26' , price: 12002, colors:['white' , 'black' , 'blue']},
    {brand:'redmi ' , model: 's27' , price: 12003, colors:['white' , 'black' , 'blue']},
    {brand:'jio ' , model: 's28' , price: 12004, colors:['white' , 'black' , 'blue']},
]
console.log(smartphhonelist[2].colors[1]);
smartphhonelist[2].colors.push('red');
console.log(smartphhonelist[2].colors);
