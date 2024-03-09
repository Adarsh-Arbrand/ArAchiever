const navbarbtu = document.querySelector(".navbar-btu")
const navmemu = document.querySelector(".nav-item")

navbarbtu.addEventListener("click" , () =>{
    // navbarbtu.classList.toggle("active");
    navmemu.classList.toggle("active");

})

//   about page
var team_1 = document.querySelector('.team-item')
var text = document.querySelector('.team-item-detail h3')
console.log(text)
team_1.addEventListener('click' , () =>{
    text.innerHTML = 'Aleesha Brown'
//    gsap.from(".team-item-detail" ,{
//     x:-200,
//     duration:1,
//     opacity:0,
//    })
})
gsap.to(".team-1 h3",{
    x:-100,
    opacity:0,
    duration:1
   })
// end about page
gsap.from(".home-sec h3, .home-sec p , .home-button button " ,{
    x:-200,
    duration:1,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:".home-sec h3 , .home-sec p , .home-button button " ,
        scroll:"boby",
        scrub:true
    }
})
gsap.from(".home-section img" ,{
    x:200,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".home-section img" ,
        scroll:"boby",
        scrub:true
    }
})
gsap.from(".home-video" , {
    y:300,
    duration:1,
    opacity:0,
    scrollTrigger:".home-video"
})
