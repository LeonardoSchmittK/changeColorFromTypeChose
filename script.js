document.body.onload=randomHEX

let txtColor=window.document.getElementById('txtColor')
let bodyBg=document.body
let container=window.document.getElementsByClassName('container')
let color=window.document.getElementsByName('typeColor');

function verifyTypeColor(){
   if(color[0].checked===true){
     randomHEX();
   } else if(color[1].checked===true){
     randomRGB();
   }else{
     randomHSL();
   }
}


let possibleValuesHex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

function randomHEX(){
 let hex='#'
  for(var i=0;i<=5;++i){
  let random= Math.floor(Math.random()*possibleValuesHex.length);
    hex+=possibleValuesHex[random]
  }
 bodyBg.style.backgroundColor=hex; 
  txtColor.innerText=hex;
   container[0].style.backgroundColor=hex;
}




function randomRGB(){

let r=Math.floor(Math.random()*255);
let g=Math.floor(Math.random()*255);
let b=Math.floor(Math.random()*255);

 let rgb='rgb('+r+','+g+','+b+')'
bodyBg.style.backgroundColor=rgb;
container[0].style.backgroundColor=rgb;
txtColor.innerText=rgb;
}




function randomHSL(){
let hsl='hsl';
let hue=Math.floor(Math.random()*360);
let saturation=Math.floor(Math.random()*100);
let light=Math.floor(Math.random()*100);
hsl+=`(${hue},${saturation}%,${light}%)`

bodyBg.style.backgroundColor=hsl;
container[0].style.backgroundColor=hsl;
txtColor.innerText=hsl; 

}