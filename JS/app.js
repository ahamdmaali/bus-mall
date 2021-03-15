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
}
Item.all=[];

for(let i=0;i<items.length;i++){
    new Item(items[i],itemsext[i]);
}

function render(){
    const leftindex=randomNumber(0,Item.all.length-1);
    const left=Item.all[leftindex]
    leftimage.src=left.path;
    leftimage.title=left.name;
    leftimage.alt=left.name

    const middleindex=randomNumber(0,Item.all.length-1);
    const middle=Item.all[middleindex]
    middleimage.src=middle.path;
    middleimage.title=middle.name;
    middleimage.alt=middle.name;

    const rightindex=randomNumber(0,Item.all.length-1);
    const right=Item.all[rightindex];
    rightimage.src=right.path;
    rightimage.title=right.name;
    rightimage.alt=right.name
}

section.addEventListener('click',clickhandler);


let counter=25;
let list=[];
function clickhandler(event){
    counter--;
    if(counter===0){
        section.removeEventListener('click',clickhandler);
        render();
       
        let results=document.getElementById('button')
        results.textContent='View your cart'
        results.addEventListener('click',buttomhandler);
        function buttomhandler(event){
            event.preventDefault();
            document.getElementById('cart').innerHTML=list
            
            
          }
          
         

 


        
    
    }else{
    if(event.target.id === 'leftimage' || event.target.id === 'middleimage' || event.target.id === 'rightimage'){
    for(let i=0;i<Item.all.length;i++){
       
        if(Item.all[i].name === event.target.title){
            Item.all[i].votes++;
            Item.all[i].views++;
            
           
             let data=Item.all[i].name +' ,Votes = '+(Item.all[i].votes  +' ,views = '+Item.all[i].views);

             list.push(data);
             
             
           
           
            
        }
        
    }
  }
    }

  render();
  
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  render();
 


