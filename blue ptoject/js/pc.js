// const { startTransition } = require("react");

gsap.registerPlugin(ScrollTrigger);

//헤더영역의 타이틀이 오른쪽에서 왼쪽으로 이동
const $headerMsg=document.querySelectorAll("header .title li");
gsap.from($headerMsg,{
    x:300,
    opacity:0,
    duration:1,
    sragger:0.5,
})
//arrow 화살표가 아래로 이동, 1번화살표 실행 후 2번 화살표 실행
gsap.set(".arrow > p", {y:0});
const tl=gsap.timeline({repeat:-1});
tl.to(".arrow > p",{
    y:10,
    opacity:1,
    stagger:0.2,
    duration:0.2,
    ease:"power1.out"
})
.to("arrow > p",{
    y:20,
    opacity:0,
    stagger:0.2,
    duration:0.2,
    ease:"power1.out"
})

//h1태그는 스케일이 변경되고 bounce out 처리
gsap.from("header > h1",{
    scale:0.7,
    opacity:0,
    duration:1,
    ease:"bounce.out"
});

// about영역을 가로로 스크롤 되게
// const $aboutWrap = document.querySelector("#about>.about-wrap");
// const scrollWidth = $aboutWrap.scrollWidth-window.innerWidth;
// const horizonScroll = gsap.to($aboutWrap,{
//     x: -scrollWidth,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#about",
//         start:"top top",
//         end:"+="+scrollWidth,
//         Pin:true,
//         scrub:true
//     }
// });

// //어바웃 영역을 스크롤 되게 처리
const $aboutWrap = document.querySelector("#about>.about-wrap");
const scrollWidth = $aboutWrap.scrollWidth-window.innerWidth;
const horizonScroll= gsap.to($aboutWrap,{
  x:-scrollWidth,
  duration:1,
  scrollTrigger:{
    trigger:"#about",
    start:"top top",
    end:"+="+scrollWidth,
    pin:true,
    scrub:true,
  }
});


//about info에 있는 p태그 들은 오른쪽에서 왼쪽으로 이동
const $aboutMsg = document.querySelectorAll("#about .info p");
$aboutMsg.forEach((msg)=>{
    gsap.from(msg,{
        x:200,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:msg,
            containerAnimation : horizonScroll, // 가로스크롤인 경우 꼭 필수!
            start:"left 90%",
            toggleActions:"play reverse play reverse"
        }
    });
});

//keyword 부분이 가로롤 왔다갔다 실행 li 애니메이션
const $keywordList = document.querySelectorAll(".keyword>li");
$keywordList.forEach((elem,idx)=>{
    const posX = (idx ===1 )? 50:-50;
        gsap.fromTo(elem,{
            x:posX

        },{
            x:-posX,
            duration:1,
            repeat:-1,
            yoyo:true,
            ease:"none"
    });
});

//project 이동 gsap 애니
const fromTop=(elem,posY)=>{     
    gsap.from(elem,{
            y:200,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:elem,
                start:`top ${posY}%`,
                end:"top 25%",
                scrub:true
            }
        });

}

//프로젝트 안에 카드아이템은 계단형식으로 나타나게 처리
// const $project = document.querySelectorAll("#project>.normal");
const $project = document.querySelectorAll("#project>.project-wrap")
$project.forEach((article)=>{
    const $item = article.querySelectorAll(".item");
    $item.forEach((item,idx)=>{
        let posY = 90-idx*15;
        fromTop(item,posY);
    });
});


//practice projec 영역은 계단식 애니메이션 처리
const $practice =document.querySelectorAll("#project>.practice .item");
$practice.forEach((item,idx)=>{
    let posY= 70-idx*7;
    fromTop(item,posY);
});

//skill에서 h2태그는 커진상태에서 작아지면서 안보이게
gsap.to("#skill>h2",{
    opacity: 0,
    scale: 0.8,
    duration: 3,
    scrollTrigger:{
        trigger: "#skill",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});

//skill에서 li들은 작아진 상태에서 커지게
const $shape=document.querySelectorAll(".skill-item>li");
gsap.from($shape,{
    opacity:0,
    scale:0.2,
    duration:0.5,
    stagger:0.2,
    ease:"back.out",
    scrollTrigger:{
    trigger:"skill",
    start:"top 50%",
    toggleActions: "play reverse play reverse"
 }
});