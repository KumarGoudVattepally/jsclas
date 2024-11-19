// let arr2=["kumar","mahesh","vinay"]
// let z=arr2.map((c)=>{
//     return c.slice(0,-1)+c.at(-1).toUpperCase()
// })
// console.log(z);//[ 'kumaR', 'mahesH', 'vinaY' ]

/// foreach ----wo'not return values

// let  arr=[22,43,55,6788,898,777,898]
// let a=arr.filter((a)=>{
//     return a%2==0
// })
// console.log(a);
//filter uses call back functions

// const users = [
//   { id: 1, name: "Alice", email: "alice@example.com", age: 25, isActive: true },
//   { id: 2, name: "Bob", email: "bob@example.com", age: 30, isActive: false },
//   {
//     id: 3,
//     name: "Charlie",
//     email: "charlie@example.com",
//     age: 28,
//     isActive: true,
//   }
// ];
// let a = users.map((b) => {
//   return b.name;
// });
// console.log(a);//[ 'Alice', 'Bob', 'Charlie' ]


const users = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 25, isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", age: 30, isActive: false },
    {
      id: 3,
      name: "Charlie",
      email: "charlie@example.com",
      age: 28,
      isActive: true,
    }
  ];
//   let a=users.filter((a)=>{
//  if(a.isActive){Map((b)=>{return b.name})}
//   }  ) /// filter return the element based on condition
// console.log(a);
// const products = [
//     {
//       id: 101,
//       name: "Smartphone",
//       description: "A high-end smartphone with a 6.5-inch display, 128GB storage, and a 48MP camera.",
//       price: 699.99,
//       category: "Electronics",
//       inStock: true,
//       ratings: 4.5,
//     },
//     {
//       id: 102,
//       name: "Laptop",
//       description: "A powerful laptop with 16GB RAM, 512GB SSD, and a 15.6-inch display.",
//       price: 1199.99,
//       category: "Computers",
//       inStock: false,
//       ratings: 4.7,
//     },
//     {
//       id: 103,
//       name: "Wireless Headphones",
//       description: "Noise-canceling wireless headphones with a 20-hour battery life and Bluetooth 5.0.",
//       price: 199.99,
//       category: "Accessories",
//       inStock: true,
//       ratings: 4.3,
//     },
//     {
//       id: 104,
//       name: "Smartwatch",
//       description: "A smartwatch with fitness tracking, heart rate monitoring, and GPS.",
//       price: 149.99,
//       category: "Wearables",
//       inStock: true,
//       ratings: 4.2,
//     },
//     {
//       id: 105,
//       name: "Gaming Console",
//       description: "A next-gen gaming console with 4K resolution support and a powerful GPU.",
//       price: 499.99,
//       category: "Gaming",
//       inStock: true,
//       ratings: 4.8,
//     }
//   ];
//    let a=products.filter(a=>a.ratings>=4.5).map(a=>a.name)
//    console.log(a);
//    let a=["hii","hello","bye"]
//    let b= a.find((i)=>i.length-2>2)
   
//    console.log(b);//hii
   //////////////////////////////////////////
//    let  a=[1,2,3,4,5]
//    let y=a.every(e=>e>0)
//    console.log(y);///true
b=[1,2,3,4,5]
let c=b.some(function(v){
    v>0
})
   console.log(c);
   