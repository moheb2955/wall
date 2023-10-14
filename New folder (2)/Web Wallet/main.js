const menu = document.getElementById('menu')
const x = document.getElementById('x')
const nav = document.getElementById('nav')
const screenpage = document.getElementById('screenpage')
const type1 = document.getElementById('type1')

// menu.addEventListener("click", ()=>{
//   nav.classList.remove('hidden')
//   screenpage.classList.add('overflow-hidden')
//   screenpage.classList.add('h-screen')
// });

// x.addEventListener("click", ()=>{
//   nav.classList.add('hidden')
//   screenpage.classList.remove('overflow-hidden')
//   screenpage.classList.remove('h-screen')

// });

let text1 = [
  'user friendly accessibility',
  'unwavering security',
  'user-centric',
  'compatible browser',
];
let j=0;
let i = 0;
let k=2;
let txt2;

console.log(text1[3].split('').splice(0,text1[3].length-10))
setInterval(()=>{

  if(i < text1[j].split("").length){
    type1.textContent += text1[j].split("")[i];
    i++;
    if(i==text1[j].split("").length-1 && j< text1.length-1){
    
      type1.textContent=+text1[j].split('').splice(0,text1[j].length-k);
      k++;
      if(k==text1[j].length-1){
        j++;
        i=0;
      }
    }
  }

},100)


console.log("hi")

