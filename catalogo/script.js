const body = document.querySelector('body'),
    slidebear = body.querySelector('nav'),
    toggle = body.querySelector('.toggle'),
    searchBtn = body.querySelector (".search-box"),
    modeText =body.querySelector(".mode-text");

    toggle.addEventListener("click", () => {
        slidebear.classList.toggle("close");
    })

    searchBtn.addEventListener("click", () => {
        slidebear.classList.remove("close");
    })

   
        