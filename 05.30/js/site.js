

  gsap.registerPlugin(ScrollTrigger);
 
 //헤더영역 애니메이션
 const tl = gsap.timeline();
tl.from(".slogan>h2",{
    opacity:0,
    y:-50,
    duration:1
})
.from(".slogan>h1",{
    opacity:0,
    y:-50,
    duration:1
}, "-=0.5") // "-=0.5" 0.5초 정도 빠르게 진행하라
.from(".slogan>p",{
    opacity:0,
    y:-50,
    duration:1
}, "-=0.5");

// gsap.from(".slogan>h1",".slogan>h2",".slogan>p",{
//       opacity:0,
//     y:-50,
//     duration:1,
//     stagger:0.5
// } );

//aboutme
gsap.from("#aboutme", {
    opacity:0,
    y:100,
    // duration:1,
    scrollTrigger:{
        trigger:"#aboutme",
        start:"top 60%",
        end:"top 30%",
        scrub:true
    }
}) ;

//laster
const $ul = document.querySelector("#laster>ul");
// const dist=$ul.scrollWidth-window.innerWidth; //이동해야하는 width값 
const dist = $ul.scrollWidth-(window.innerWidth*0.7); //이동해야하는 width값 
gsap.to($ul, {
    x:-(dist),
    ease:"none",
    // duration:1,
    scrollTrigger:{
        trigger:"#laster",
        start:"top top",
        end:"+="+dist,
        scrub:true,
        pin:true
    }
});

//#contact
gsap.from("#contact .title",{
    opacity:0.3,
    scale:0.5,
    duration:0.5,
    scrollTrigger:{
        trigger:"#contact",
        start:"top 50%"
    }

});


