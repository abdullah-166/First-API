                                // difference between let and const
// let name = "Abdullah";
//  name = "arif";
//  console.log(name);
// const a = "Abdullah";
// a = "Arif";
// console.log(a);
                                // New techniques
// const name = `IUBAT-International University
// of Business Agriculture
// and Technology`
// const test = "World!!!";
// const name = `Hello ${test}`;
                                // three dot methos in array and string as well in both.
// const num = [1,2,3,4,5];
// const newarr = ["Hello", "World", ...num];
// console.log(...newarr);
// console.log(Math.max(...num));
                                // Arrow Function
// function test(){
//     return "Hello World...";
// }
// const result = test();
// console.log(result);
// const test2 = () =>{
//     console.log(2*2);
//     return "Abdullah";
// }
// console.log(test2());
                                //Object and Array Destructuring
// const numbers = [1,2,3,4,5,6,7,8,9];
// const [a,b,c] = numbers;
// console.log(a,b);
// const obj ={
//     name: "Abdullah",
//     age:23,
//     github: "yes",
//     status: "single",
// }
// const {age,status} = obj;
// console.log(age,status);
// const test =[
//     {
//     name: "Abdullah",
//     age:23,
//     github: "yes",
//     friends:["abd","yes","no"],
//     status: "single",
//     },
//     {},
//     {},
// ]
// console.log(test[0].friends[1]);

                                //Map, Filter and Find
                                // Map

// const num = [1,2,3,4];
// const square = num.map(x => x*x);
// console.log(square);
                                // Filter

// const product = [
//     {id:1,name:"samsung",price:1000,color:"black"},
//     {id:2,name:"samsung",price:1500,color:"blue"},
//     {id:3,name:"apple",price:20000,color:"red"},
//     {id:4,name:"samsung",price:3000,color:"white"},
//     {id:5,name:"oppo",price:4000,color:"black"},
//     {id:6,name:"oppo",price:1200,color:"black"},
// ];
// const result = product.filter((pd)=>console.log(pd)); for getting all the element.
// specefic product
// const result = product.filter((pd)=> pd.color=="black");
// console.log(result);

                                //Find
// const result2 = product.find(pd=>pd.id=="black");
// console.log(result2.price);
// const Product_Container = document.getElementById("ProductContainer")
// const result3 = product.forEach((pd)=>{
    // console.log(pd);
//     const kichu = document.createElement("h1");
//     kichu.innerText = pd.name;
//     Product_Container.appendChild(kichu); 
// })
                                // API
// fetch("https://fakestoreapi.com/products/1")
// .then((res)=>res.json())
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// });
                                //Syncronus Asyncronas
// console.log(1);
// console.log(2);
// name(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// function name(p) {
    // console.log(p);\
    // fetch('https://fakestoreapi.com/products/1')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    // setTimeout(()=>console.log(p));
// }

                                //Promise and async, await
// const getData = new Promise(function (resolve, reject){
//     return reject("Invalid!!!");
// })
// getData
//     .then(dt => console.log(dt))
//     .catch(err => console.log(err));
// fetch("https://fakestoreapi.com/products/1")
//     .then((dt)=>dt.json())
//     .then((data) => console.log(data))
//     .catch(err=>console.log(err));
const loadData = async() =>{
    try{
        const response = await fetch("https://fakestoreapi.com/products/1");
        const data = await response.json();
        console.log(data);
    }
    catch{
        (err) => {
            console.log(err);
        }
    }
};
loadData();









