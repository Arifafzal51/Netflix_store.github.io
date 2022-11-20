const firstName=localStorage.getItem('first-name');
const lastName=localStorage.getItem('last-name');
const address=localStorage.getItem('address');
const code=localStorage.getItem('zip-code');
const amt=localStorage.getItem('my-bill');
// const firstName=localStorage.getItem('first-name');

document.querySelector('.name').textContent=  "Name: " + firstName + " " + lastName;
document.querySelector('.address').textContent="Address: " + address;
document.querySelector('.zip').textContent="Zip-code: " + code;
// document.querySelector('.amount').textContent="Total Bill     "+ amt;

// var Data=JSON.parse(localStorage.getItem('data'));

// var bill=0;



// let shopItemsData = [
//     {
//       id: "jfhgbvnscs",
//       name: "Aquaman Hoody",
//       price: 699,
      
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//       img: '../images/img1.jpeg'
//     },
//     {
//       id: "ioytrhndcv",
//       name: "Casual Shirt",
//       price: 400,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//       img: '../images/bajirao.jpg',
//     },
//     {
//       id: "wuefbncxbsn",
//       name: "Iron man tshirt",
//       price: 425,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//       img: '../images/tshirt1.png',
//     },
//     {
//       id: "thyfhcbcv",
//       name: "Iron-man jacket",
//       price: 800,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//       img: '../images/jacket1.jpeg'
//     },
//     {
//       id: "thiecbawdjksadjk",
//       name: "Dhoom3 hat",
//       price: 199,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//       img: '../images/black-hat.jpeg',
//     },
//     {
//       id: "iuertrywebncdjksadjk",
//       name: "Iron Man Cup",
//       price: 149,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//       img: '../images/iron-man-cup.jpeg',
//     },
//     {
//       id: "thierytbvcbvzdhadjk",
//       name: "Marvel Bag",
//       price: 850,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//       img: '../images/marvel-bag.png',
//     },
//     {
//       id: "trfoiwfcnbcawdjksadjk",
//       name: "Marvel Trouser",
//       price: 645,
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
//       img: '../images/marvel-lower.png',
//     },
    
//   ];



// for(var i=0;i<Data.length;i++)
// {
//     var obj=Data[i];
//     var arr=Object.values(obj);

//     for(var j=0;j<shopItemsData;j++)
//     {
//         var obj1=shopItemsData[j];
//         var arr2=Object.values(obj1);
//         if(arr2[0]==arr[1])
//         {
//             bill=bill+obj1.price*arr[1];
//         }
//     }




   

// }



