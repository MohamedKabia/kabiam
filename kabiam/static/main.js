'use strict';
//scroll back to top:
let alertcont=document.querySelector('.s-alert');
let alerticon =document.querySelector('.mdi-progress-close ');
try{
alerticon.addEventListener('click', ()=>{
    alertcont.style.display='none';
})
}
catch(err){//console.warn(err)
}

let toTopbtn = document.getElementById("btop");
try{
    toTopbtn.addEventListener('click', ()=>{
        topFunction();
     })
 }
catch(error){
    //fail silently
}
 function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTopbtn.style.display = "block";
    } else {
      toTopbtn.style.display = "none";
    }
  }
// When user clicks on the button, scroll to  top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  scrollFunction() 
//end


//scrollspy
const scrollSpy=document.querySelector('.s-scroll-spy');
const scrollSpyArr = Array.from(scrollSpy.children);
let active =document.querySelector('.active');
//section id and position
const secPos ={}
let secId = []
scrollSpyArr.forEach(section=>{
    secId.push(section.id)
    secPos[section.id] = section.getBoundingClientRect( ).top; 
});
 
 const scrollFunk =()=>{
    let scrollPosition =document.documentElement.scrollTop
    || document.body.scrollTop;
    
    let id =secId;
    for(id in secPos){
        if(secPos[id] <= scrollPosition){
            active.classList.remove('active');
            document.querySelector(`a[href*=${id}]`).classList.add('active');
            active=document.querySelector('.active')
        }
    }
 };

 window.document.addEventListener('scroll',()=>{
  scrollFunk();
  scrollFunction() 
 });

 //mobile menu script
 const menueToggler = document.querySelector('.left-right-toggler');
const hmnu =document.querySelector('.hamburger-menu');
const mobmenu =document.querySelector('.mobile-nav-link');

menueToggler.addEventListener('click', ()=>{
  if(mobmenu.classList.contains('show')){
    hmnu.classList.remove('animate');
    mobmenu.classList.remove('show');
  }
  else{
    hmnu.classList.add('animate');
    mobmenu.classList.add('show');
  }
});