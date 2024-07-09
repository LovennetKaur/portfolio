// typing animation
var typed = new Typed(".typing",{
    strings:[ "" ,"Web Developer","Software Engineer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
 
// aside
const nav = document.querySelector(".nav"),
     navList = nav.querySelectorAll("li"),
     totalNavlist =navList.length,
     allSection =document.querySelectorAll(".section"),
     totalSection = allSection.length;
     for(let i=0; i<totalNavlist;i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function(){
            removeBackSection();
            for(let j =0;j<totalNavlist;j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                    
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth<1200){
                asideSectionTogglerBtn()
            }
        })
     }
     function removeBackSection(){
        for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("back-section");
             }

     }
     function addBackSection(num){
        allSection[num].classList.add("back-section");
     }
     function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const href = element.getAttribute("href").split("#");
        target = href[1];
        document.querySelector("#"+ target).classList.add("active")
     }
     function updateNav(element){
        for(let i =0;i<totalNavlist;i++){
            navList[i].querySelector("a").classList.remove("active");
            const href = element.getAttribute("href").split("#");
            target = href[1];
           
        }
     }
     document.querySelector(".hire-me").addEventListener("click",function(){
        const sectionIndex = this.getAttribute("data-section-index")
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
     })
     const navTogglerBtn = document.querySelector(".nav-toggler"),
     aside = document.querySelector(".aside");
     navTogglerBtn.addEventListener("click",()=>{
        asideSectionTogglerBtn();
     })
     function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i =0;i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
     }