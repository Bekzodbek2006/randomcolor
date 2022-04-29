let btn = document.getElementById('btn')
let text =document.querySelector('.text')
let box = document.querySelector('#ekran')
console.log(box);
let colors =[
    "red",
    "green",
    "blue",
    "aqua",
    "#3d3d",
    "#3d3d3d",
    "yellow"
]

btn.addEventListener('click' , function(){
   let rand = Math.floor(Math.random()*colors.length)
   document.body.style.background = colors[rand]
   text.textContent ="loading.."
   box.style.boxShadow ="none"
   btn.style.boxShadow ="none"
   btn.style.top ="70px"
   setTimeout(function(){
    text.textContent =colors[rand]
   },500)
})