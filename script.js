function loco(){


gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco()

var a = 1
var page1 = document.querySelector("#page1")
var button = document.querySelector("#c")


button.addEventListener("click",function(){

  if(a==1){
    a = 0
  page1.style.backgroundColor = "#000"
  document.querySelector("#nleft a").style.color = "#fff"
  document.querySelector("#page1>h1").style.color = "#fff"
  document.querySelector("#black").style.backgroundColor = "#fff"
  document.querySelector("#black>p").style.color = "#000"
  document.querySelector("#aandcolor>a").style.color = "#fff"
  document.querySelector("#nlinks1").style.color = "#fff"
  document.querySelector("#nlinks2").style.color = "#fff"
  document.querySelector("#nlinks3").style.color = "#fff"
  document.querySelector("#nlinks4").style.color = "#fff"
  document.querySelector("#nlinks5").style.color = "#fff"


  
  }
  else{
    page1.style.backgroundColor = "white"
    document.querySelector("#nleft a").style.color = "#000"
    document.querySelector("#page1>h1").style.color = "#000"
    document.querySelector("#black").style.backgroundColor = "#000"
    document.querySelector("#black>p").style.color = "#fff"
    document.querySelector("#aandcolor>a").style.color = "#000"
    document.querySelector("#nlinks1").style.color = "#000"
  document.querySelector("#nlinks2").style.color = "#000"
  document.querySelector("#nlinks3").style.color = "#000"
  document.querySelector("#nlinks4").style.color = "#000"
  document.querySelector("#nlinks5").style.color = "#000"





    a = 1
  }
})


