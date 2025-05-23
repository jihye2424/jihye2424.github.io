// const { createContext } = require("react");

    // let keyword = "";
  
  const $input = document.querySelector("#input");
  const $inputbtn = document.querySelector(".btn-input");
    const $chatList =document.querySelector("#word-list");
    const $startBtn = document.querySelector(".btn-start");

      //p태그의 텍스트컨텐츠를 변경
       const changePcontent= (keyword)=>{
      const $p = document.querySelector(".word-p");
      $p.textContent = keyword;
    //   $p.textContent = `${keyword}`;
    }

    //
    const appendChild = (keyword) => {
  const $li = document.createElement("li");  
  $li.classList.add("enter");
  $li.textContent = keyword;
  $chatList.appendChild($li);
  if( $chatList.children.length > 7 ){
    const $first = $chatList.children[0];
    $chatList.removeChild($first);
  }
};
    // 
    const handleWord= ()=>{
      const elem = document.querySelector("#start-word").value;
      if(elem !== ""){
        // const elemlist = document.createElement("li");
        // elemlist.textContent = elem;
        // $list.appendChild(elemlist);
        appendChild(elem);
        changePcontent(elem);
        //
        const $view = document.querySelector("#one");
        $view.style.display = "none";
        const $start = document.querySelector("#two");
        $start.style.display = "block";
      } else{
        alert("단어를 입력하세요");
        return;
      }
    };
    $startBtn.addEventListener("click", handleWord);

    //
//맞는 낱말인지 체크
    const handleWordinput = () => {
      const keyword = $input.value.trim();
      if(keyword === ""){
        alert("단어를 입력하세요");
        return
      }
      // const startkeyword = $startinput.value.trim();
      //이전 입력 문자 가져오기
      const last = $chatList.lastElementChild.textContent;
      const lastword = last[last.length - 1];
      const firstword = keyword[0];
      //올바르게 입력되었는지 체크
      if (lastword === firstword) {
        //성공
        changePcontent(keyword);
        //ul > li로 추가
        // const elem = document.createElement("li");
        // elem.textContent = keyword;
        // $list.appendChild(elem);
        appendChild(keyword);
      } else {
        //실패
        alert(`틀렸어요. ${lastword}로 시작해야 합니다`);
      }
      $input.value = "";
      $input.focus();
    };

    $inputbtn.addEventListener("click", handleWordinput);
    $input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        // $inputbtn.click();
        handleWordinput();
      }
    });

