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

const budget=smartphhonelist.filter((phone) =>{return phone.price<50000});
console.log(budget);

const samsung=smartphhonelist.filter((phone)=>{return phone.brand=='samsung '});
console.log(samsung);

const color=smartphhonelist.filter((phone)=>{return phone.colors.includes('black')})
console.log(color);

const newArr= smartphhonelist.map((phone)=>{return phone.brand});
console.log(new Set(newArr));


