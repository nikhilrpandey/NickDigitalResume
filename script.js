// ****************Hamburger Menu***********
window.addEventListener('resize',function resize(){
    // document.querySelector("#social-links ul").className="vertical-list-social";
    let windowWidth=window.innerWidth;
    if(windowWidth<=800){
        document.querySelector("nav ul").className="vertical-list";
        document.querySelector("nav ul").style.visibility="hidden";
        
    }
    else{
        document.querySelector("nav ul").className="horizontal-list";
        // document.querySelector("#social-links ul").className="horizontal-list";
        document.querySelector("nav ul").style.visibility="visible";
    }
});

document.querySelector(".ham").addEventListener("click",function(){
    if(document.querySelector(".vertical-list").style.visibility=="hidden" && window.innerWidth<=800){
        document.querySelector(".vertical-list").style.visibility="visible";
    }
    else
        document.querySelector(".vertical-list").style.visibility="hidden";
});


// **************** Smooth Scrolling***************

var scroll=document.querySelectorAll("nav a");
for (const i of scroll) {
    i.addEventListener('click',function(e){
    e.preventDefault();
    let a=i.getAttribute("href");
    let b= document.querySelector(a).getBoundingClientRect().top;  //get the exact location of the element.
    //   console.log(b);
    scrolling(b);
    });
}

function scrolling(b){
    let offTop=0;
    let stopScroll = setInterval(() => {
        console.log("offTop ",offTop);
        console.log("b ",b );
        if(offTop>=b){
            clearInterval(stopScroll);
            return;
        }
        offTop+=10;
        window.scrollBy(0,10);                  
    }, 10);
}
// This module is for auto fill of the skill section
document.addEventListener("scroll",scrollFill);
var count=0;
var target = $("#skills").offset().top-100; //the value is subtracted so that the animation fires as soon as the content is visible
function scrollFill(){
    if(count==0){
  let scr = window.pageYOffset;
  let per = $(".skill-progress");
  if(scr>=target){    
      per.each(function(index,ele){
          let color=0;
          let dataVal=ele.getAttribute("skill-data-value");  
          let stopFill =setInterval(function(){
             if(color>=dataVal){
                clearInterval(stopFill);
             }
             else{
            $(ele).css("width",color+"%");
             color+=1;
             }   
          },30);
      });
      count++;
  }
}    	
}




