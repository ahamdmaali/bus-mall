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
let cart=document.getElementById('cart');

function clickhandler(event){
    
    if(event.target.id === 'leftimage' || event.target.id === 'middleimage' || event.target.id === 'rightimage');
    for(let i=0;i<Item.all.length;i++){
        if(Item.all[i].name === event.target.title){
            Item.all[i].votes++;
            Item.all[i].views++;
            

            
            let data=document.createElement('li');
            data.textContent= Item.all[i].name+'=' +(Item.all[i].votes);
            cart.appendChild(data);
            
            
        }
    }
    

  render();
  
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  render();
 


