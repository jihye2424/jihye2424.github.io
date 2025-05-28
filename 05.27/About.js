 let intervalID = null;
    let current=0;
    //설정
    const WIDTH=500;
    // const MAX_LEN = $section.length; //3
//객체 가져오기 
    const $prveBtn = document.querySelector(".prev");
    const $nextBtn = document.querySelector(".next");
    const $list = document.querySelector("#list")
    const $section = document.querySelectorAll("#list>section");

  //    // 복제: 마지막 -> 맨 앞, 첫 번째 -> 맨 뒤
  // const $firstClone = $section[0].cloneNode(true);
  // $list.appendChild($firstClone);
  // const $lastClone = $section[$section.length-1].cloneNode(true);
  // $list.insertBefore($lastClone, $list.firstChild); // 앞에 마지막 복제
 


  gsap.set("#list",{x:-(WIDTH)*current});

    const clickNextBtn= ()=>{
      current++;
      gsap.to("#list",{
        x:-(WIDTH)*current,
        duration:0.5,
        onComplete:()=>{
          //마지막에 호출되는 함수(지쌉에서 "on"이 붙는건 이벤트이므로 함수표시)
          if(current === (3+1)){
            current=0;
            gsap.set("#list",{x:-(WIDTH)*current});
          }
        //   updateMenuClass();
        }
      });
    }
    //다음버튼
    $nextBtn.addEventListener("click",()=>{
    //   $playwrap[1].click();


      clickNextBtn();
    });

    //이전버튼
    $prveBtn.addEventListener("click",()=>{
    //   $playwrap[1].click();
       current--;
      gsap.to("#list",{
        x:-(WIDTH)*current,
        duration:0.5,
        onComplete:()=>{
          if(current === 0){
            current=3;
            gsap.set("#list",{x:-(WIDTH)*current});
          }
        //   updateMenuClass();
        }
      });
    });

///
    