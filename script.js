let moon = document.querySelector('.moon')
let sun = document.querySelector ('.sun')
let nav = document . querySelector('.nav__ul')
let ul1 = document . querySelector('.nav__ul1')
let moon1 = document.querySelector('.moon1')
let sun1 = document.querySelector ('.sun1')






moon.addEventListener('click',()=>{
    moon.style.display = 'none'
    sun.style.display = 'inline-block'
    nav.style.display = 'inline-block'
    
    
    
})
sun.addEventListener('click',()=>{
    moon.style.display = 'inline-block'
    sun.style.display = 'none'
    nav.style.display = 'none'
    
    
    
})
moon1.addEventListener('click',()=>{
    moon1.style.display = 'none'
    sun1.style.display = 'inline-block'
    ul1.style.display = 'inline-block'
    
    
    
})
sun1.addEventListener('click',()=>{
    moon1.style.display = 'inline-block'
    sun1.style.display = 'none'
    ul1.style.display = 'none'
    
    
    
})