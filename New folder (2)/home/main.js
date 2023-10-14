const menu = document.getElementById('menu')
const x = document.getElementById('x')
const nav = document.getElementById('nav')
const screenpage = document.getElementById('screenpage')

menu.addEventListener("click", ()=>{
  nav.classList.remove('hidden')
  screenpage.classList.add('overflow-hidden')
  screenpage.classList.add('h-screen')
});

x.addEventListener("click", ()=>{
  nav.classList.add('hidden')
  screenpage.classList.remove('overflow-hidden')
  screenpage.classList.remove('h-screen')

});



