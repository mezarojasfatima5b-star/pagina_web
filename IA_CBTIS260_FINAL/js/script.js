const menuToggle=document.getElementById("menuToggle");
const navMenu=document.getElementById("navMenu");
const topicsNav=document.getElementById("topicsNav");
const topicsTrigger=document.getElementById("topicsTrigger");
const topBtn=document.getElementById("topBtn");
function closeMenus(){
  if(navMenu)navMenu.classList.remove("active");
  if(menuToggle)menuToggle.setAttribute("aria-expanded","false");
  if(topicsNav)topicsNav.classList.remove("open");
  if(topicsTrigger)topicsTrigger.setAttribute("aria-expanded","false");
}
if(menuToggle&&navMenu){menuToggle.addEventListener("click",e=>{e.stopPropagation();const open=navMenu.classList.toggle("active");menuToggle.setAttribute("aria-expanded",open?"true":"false");});}
if(topicsTrigger&&topicsNav){topicsTrigger.addEventListener("click",e=>{e.stopPropagation();const open=topicsNav.classList.toggle("open");topicsTrigger.setAttribute("aria-expanded",open?"true":"false");});}
if(navMenu)navMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>closeMenus()));
document.addEventListener("click",e=>{
 if(topicsNav&&!topicsNav.contains(e.target)){topicsNav.classList.remove("open");if(topicsTrigger)topicsTrigger.setAttribute("aria-expanded","false");}
 if(navMenu&&menuToggle&&!navMenu.contains(e.target)&&!menuToggle.contains(e.target)&&window.innerWidth<=650){navMenu.classList.remove("active");menuToggle.setAttribute("aria-expanded","false");}
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenus();});
window.addEventListener("resize",()=>{if(window.innerWidth>650){navMenu?.classList.remove("active");menuToggle?.setAttribute("aria-expanded","false");}});
if(topBtn){window.addEventListener("scroll",()=>topBtn.classList.toggle("show",window.scrollY>500));topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));}
