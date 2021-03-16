'use strict'
const section=document.getElementById('section');
const leftimage=document.getElementById('leftimage');
const middleimage=document.getElementById('middleimage');
const rightimage=document.getElementById('rightimage');

const items= [
    'bag',
    'banana',
    'bathroom',
    'wine-glass',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'sweep',
    'tauntaun',
    'unicorn',
    'usb',
    'water-can',
];
const itemsext= [
    'jpg',
    'jpg',
    'jpg',
    'jpg',
    'jpg',
    'jpg',
    'jpg',
    'jpg',
    'jpg',
    'jpg',
    'jpg',
    'jpg',
    'jpg',
    'jpg',
    'jpg',
    'png',
    'jpg',
    'jpg',
    'gif',
    'jpg',
];



function Item(name,imgExt){
    this.name=name
    this.imgExt=imgExt
    this.votes=0;
    this.views=0;
    this.path=`./img/${name}.${imgExt}`
    Item.all.push(this); 
    
    Item.all= JSON.parse(localStorage.getItem("products"));
}

Item.all=[];



for(let i=0;i<items.length;i++){
    new Item(items[i],itemsext[i]);
}
function randomNumber(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function render(){
    let leftindex=randomNumber(0,Item.all.length-1); 
    let middleindex=randomNumber(0,Item.all.length-1);
    let rightindex=randomNumber(0,Item.all.length-1);
       
    if(leftindex !== middleindex && middleindex!== rightindex && leftindex !== rightindex ){
      
    const left=Item.all[leftindex]
    leftimage.src=left.path;
    leftimage.title=left.name;
    leftimage.alt=left.name;
    

    const middle=Item.all[middleindex]
    middleimage.src=middle.path;
    middleimage.title=middle.name;
    middleimage.alt=middle.name;

    
    const right=Item.all[rightindex];
    rightimage.src=right.path;
    rightimage.title=right.name;
    rightimage.alt=right.name
    }else{
         render();
    }
}


section.addEventListener('click',clickhandler);


let counter=25;


function clickhandler(event){
    counter--;
    if(counter===0){
        section.removeEventListener('click',clickhandler);
      
         
        chart();
            
        
       

          
    }else{
     
      if(event.target.id === 'leftimage' || event.target.id === 'middleimage' || event.target.id === 'rightimage'){
        
       for(let i=0;i<Item.all.length;i++){
        
          if(Item.all[i].name === event.target.title){
            
              Item.all[i].votes++;
              Item.all[i].views++;
              
            
            }
        
        }
      }
    }
    localStorage.setItem("products",JSON.stringify(Item.all));
  render();
  
}
function chart(){
  let ctx = document.getElementById('Chart').getContext('2d');
  let products=[];
  let productsVotes=[];
  let productsViews=[];

  for(let i=0;i<Item.all.length;i++){
    products.push(Item.all[i].name);
  }
  for(let i=0;i<Item.all.length;i++){
    productsVotes.push(JSON.parse(localStorage.getItem("products"))[i].votes);
  }
  for(let i=0;i<Item.all.length;i++){
    productsViews.push(JSON.parse(localStorage.getItem("products"))[i].views);
  }
let chart = new Chart(ctx, {
    
    type: 'bar',

    
    data: {
        labels:products,
        datasets: [{
            label: 'Products votes',
            
            backgroundColor:  [
              'rgba(255, 99, 132, 5)',
              'rgba(54, 162, 235, 5)',
              'rgba(255, 206, 86, 5)',
              'rgba(75, 192, 192, 5)',
              'rgba(153, 102, 255, 5)',
              'rgba(255, 159, 64, 5)',
              'rgb(0, 0, 255)',
              '	rgb(128, 0, 255)',
              '	rgb(255, 0, 0)',
              'rgb(0, 255, 255)',
              'rgb(102, 255, 102)',
              'rgb(204, 51, 0)',
              'rgb(204, 102, 255)',
              'rgb(102, 153, 153)',
              'rgb(51, 102, 0)',
              'rgb(51, 153, 102)',
              'rgb(0, 255, 0)',
              'rgb(255, 153, 153)',
              'rgb(102, 0, 51)',
              'rgb(0, 102, 153)',
          ],
            borderColor: 'rgb(000, 99, 132)',
            color: [
              'rgba(255, 99, 132, 5)',
              'rgba(54, 162, 235, 5)',
              'rgba(255, 206, 86, 5)',
              'rgba(75, 192, 192, 5)',
              'rgba(153, 102, 255, 5)',
              'rgba(255, 159, 64, 5)',
              'rgb(0, 0, 255)',
              '	rgb(128, 0, 255)',
              '	rgb(255, 0, 0)',
              'rgb(0, 255, 255)',
              'rgb(102, 255, 102)',
              'rgb(204, 51, 0)',
              'rgb(204, 102, 255)',
              'rgb(102, 153, 153)',
              'rgb(51, 102, 0)',
              'rgb(51, 153, 102)',
              'rgb(0, 255, 0)',
              'rgb(255, 153, 153)',
              'rgb(102, 0, 51)',
              'rgb(0, 102, 153)',
            ],
            labels:[
              'rgba(255, 99, 132, 5)',
              'rgba(54, 162, 235, 5)',
              'rgba(255, 206, 86, 5)',
              'rgba(75, 192, 192, 5)',
              'rgba(153, 102, 255, 5)',
              'rgba(255, 159, 64, 5)',
              'rgb(0, 0, 255)',
              '	rgb(128, 0, 255)',
              '	rgb(255, 0, 0)',
              'rgb(0, 255, 255)',
              'rgb(102, 255, 102)',
              'rgb(204, 51, 0)',
              'rgb(204, 102, 255)',
              'rgb(102, 153, 153)',
              'rgb(51, 102, 0)',
              'rgb(51, 153, 102)',
              'rgb(0, 255, 0)',
              'rgb(255, 153, 153)',
              'rgb(102, 0, 51)',
              'rgb(0, 102, 153)',
            ],
          data:productsVotes
          
        },{
          label: 'Products views',
          
          backgroundColor:  [
            'rgba(255, 99, 132, 5)',
            'rgba(54, 162, 235, 5)',
            'rgba(255, 206, 86, 5)',
            'rgba(75, 192, 192, 5)',
            'rgba(153, 102, 255, 5)',
            'rgba(255, 159, 64, 5)',
            'rgb(0, 0, 255)',
            '	rgb(128, 0, 255)',
            '	rgb(255, 0, 0)',
            'rgb(0, 255, 255)',
            'rgb(102, 255, 102)',
            'rgb(204, 51, 0)',
            'rgb(204, 102, 255)',
            'rgb(102, 153, 153)',
            'rgb(51, 102, 0)',
            'rgb(51, 153, 102)',
            'rgb(0, 255, 0)',
            'rgb(255, 153, 153)',
            'rgb(102, 0, 51)',
            'rgb(0, 102, 153)',
        ],
          borderColor: 'rgb(000, 99, 132)',
          color: [
            'rgba(255, 99, 132, 5)',
            'rgba(54, 162, 235, 5)',
            'rgba(255, 206, 86, 5)',
            'rgba(75, 192, 192, 5)',
            'rgba(153, 102, 255, 5)',
            'rgba(255, 159, 64, 5)',
            'rgb(0, 0, 255)',
            '	rgb(128, 0, 255)',
            '	rgb(255, 0, 0)',
            'rgb(0, 255, 255)',
            'rgb(102, 255, 102)',
            'rgb(204, 51, 0)',
            'rgb(204, 102, 255)',
            'rgb(102, 153, 153)',
            'rgb(51, 102, 0)',
            'rgb(51, 153, 102)',
            'rgb(0, 255, 0)',
            'rgb(255, 153, 153)',
            'rgb(102, 0, 51)',
            'rgb(0, 102, 153)',
          ],
          labels:[
            'rgba(255, 99, 132, 5)',
            'rgba(54, 162, 235, 5)',
            'rgba(255, 206, 86, 5)',
            'rgba(75, 192, 192, 5)',
            'rgba(153, 102, 255, 5)',
            'rgba(255, 159, 64, 5)',
            'rgb(0, 0, 255)',
            '	rgb(128, 0, 255)',
            '	rgb(255, 0, 0)',
            'rgb(0, 255, 255)',
            'rgb(102, 255, 102)',
            'rgb(204, 51, 0)',
            'rgb(204, 102, 255)',
            'rgb(102, 153, 153)',
            'rgb(51, 102, 0)',
            'rgb(51, 153, 102)',
            'rgb(0, 255, 0)',
            'rgb(255, 153, 153)',
            'rgb(102, 0, 51)',
            'rgb(0, 102, 153)',
          ],
        data:productsViews
        
      }
      ]
        
    },

    options: {
      legend: {
        fontColor: "red"
    },
    scales: { 
        xAxes: [{
            ticks: {
                fontColor: "red",
                fontSize:'18',
                beginAtZero: true
            }
        }],
        yAxes:[{
          ticks: {
              fontColor: "blue",
              fontSize:'12',
              stepSize: 1,
              beginAtZero: true
          }
      }],
    }
    }
});

}


render();