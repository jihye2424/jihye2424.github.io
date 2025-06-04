const elem = document.querySelectorAll("nav>ul>lu>label");
elem.forEach((label)=>{
    label.addEventListener("click",()=>{
        document.getElementById("check-icon").checked=false
    });
});

