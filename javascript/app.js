let userForm =document.getElementById('userForm');
let tabel=document.getElementById('tabel');

imageArr=['./img/burger.jpg','./img/shawarma.jpg','./img/pizza.jpg'];

function Food(name,type,img,price){
  this.name=name;
  this.type=type;
  this.img=img;
  this.price=price;
  Food.all.push(this);
}
Food.all=[];

function getData(e){
  e.preventDefault();

  let name = e.target.userName.value;
  let option=e.target.selectTyp.value;
  let price=getRandomInt(10,100);
  let img;
  if(option==='shawarma'){
    img=imageArr[1];
    new Food(name,option,img,price);
  }
  if(option==='burger'){
    img=imageArr[0];
    new Food(name,option,img,price);
  }
  if(option==='pizza'){
    img=imageArr[2];
    new Food(name,option,img,price);
  }
 localStorage.setItem('userOrder', JSON.stringify(Food.all))
 let tr=document.createElement('tr');
 tabel.appendChild(tr);
 let td1 =document.createElement('img');
 
 td1.src=img;
 tr.appendChild(td1);
 let td2=document.createElement('td');
 tr.appendChild(td2);
 let p1 =document.createElement('p');
 td2.appendChild(p1);
 p1.textContent=`user name: ${name}`;
 let p2 =document.createElement('p');
 td2.appendChild(p2);
 p2.textContent=`type: ${option}`;
 let p3 =document.createElement('p');
 td2.appendChild(p3);
 p3.textContent=`price:${price}`;
//  td2.textContent=`user name: ${name} type: ${option} price:${price}`;
}
userForm.addEventListener('submit',getData);

function render(){
  let data= JSON.parse(localStorage.getItem('userOrder'));
  if(data){
    Food.all=data;
    for (let i = 0; i < data.length; i++) {
      console.log(data);
      let tr=document.createElement('tr');
      tabel.appendChild(tr);
      
      // var x=firstRow.insertCell(-1);
      //  x.innerHTML="New cell";
      let td1 =document.createElement('td');
      td1.setAttribute('id',i)
      tr.appendChild(td1);
      
      let img =document.createElement('img');
      
      img.src=data[i].img;
      document.getElementById(i).appendChild(img);
      
      
      let td2=document.createElement('td');
      tr.appendChild(td2);
      let p1 =document.createElement('p');
      td2.appendChild(p1);
      p1.textContent=`user name: ${data[i].name}`;
      let p2 =document.createElement('p');
      td2.appendChild(p2);
      p2.textContent=`type: ${data[i].type}`;
      let p3 =document.createElement('p');
      td2.appendChild(p3);
      p3.textContent=`price:${data[i].price}`;
            
    }
  }
}
render();
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}