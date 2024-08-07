export function menu(){
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.querySelector(".header__nav");

    if(headerToggle){
    headerToggle.addEventListener("click", () => {
        // 클릭하면 show클래스를 붙여주고 다시 한번 클릭하면 제거해준다
        headerNav.classList.toggle("show");
        headerToggle.getAttribute("aria-expanded") === "true" 
        ? headerToggle.setAttribute("aria-expanded", "fasle") 
        : headerToggle.setAttribute("aria-expanded", "true");
        
    });
}
}