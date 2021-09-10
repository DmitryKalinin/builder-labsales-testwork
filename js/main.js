document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("menu__link")){
        if(e.target.dataset.link){
            document.querySelectorAll(".tab").forEach(el=>el.classList.add("tab_hidden"))
            document.querySelector(`.${e.target.dataset.link}`).classList.remove("tab_hidden")
        }
    }
    if(e.target.classList.contains("burger-menu")){
        document.querySelector(".main-menu").classList.toggle("main-menu_hidden")
        document.querySelector(".header").classList.toggle("header_bg");
        document.querySelector(".burger-menu").classList.toggle("burger-menu-active");
        document.querySelector(".logo").classList.toggle("logo-inverse");

    }
})