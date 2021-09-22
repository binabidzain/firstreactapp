const cardata=[
    {
        id:1,
        title:"Audi",
        model: "A5",
        price: 790000,
        ratings: "4 Stars",
        image: "images/car1.jpg",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
    
    },
    {
        id:2,
        title:"Porche",
        model: "A5",
        price: 98000,
        ratings: "4 Stars",
        image :"images/car2.jpg",
        description : "wLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
    },
    
    {
        id:3,
        title:"Honda Civic",
        model: "A5",
        price: 4000,
        ratings: "2 Stars",
        image:"images/car3.jpg",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
    },
    
    {
        id:4,
        title:"Mehran",
        model: "A5",
        price: 50000,
        ratings: "4 Stars",
        image:"images/500.png",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
    }
    ,
    {
        id:5,
        title:"Kia",
        model:"Sportage VV",
        price:89000,
        ratings: "5 Stars",
        image:"images/5002.png",
        description : "wLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
    }
];
    
function getProductById(id){

    let product = cardata.find(p => p.id=== Number(id));
    return product;
}


export {
   cardata,
   getProductById 
}
