function loco() {


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
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
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
var main = document.querySelector("#main")
var page1 = document.querySelector("#page1")
var page2 = document.querySelector("#page2")
var button = document.querySelector("#darkmode")

button.addEventListener("click", function () {

  if (a == 1) {
    a = 0
    page1.style.backgroundColor = "#000"
    page2.style.backgroundColor = "#000"
    main.style.backgroundColor = "#000"
    document.querySelector("#dark").style.opacity = "0"
    document.querySelector("#light").style.opacity = "1"
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
    document.querySelector("#etop p").style.color = "#fff"
    document.querySelector("#page2>h1").style.color = "#fff"
    document.querySelector("#conrighth3").style.color = "#fff"
    document.querySelector("#conmidh3").style.color = "#fff"
    document.querySelector("#conlefth3").style.color = "#fff"
    document.querySelector("#conlh41").style.color = "#fff"
    document.querySelector("#conlh42").style.color = "#fff"
    document.querySelector("#conlh43").style.color = "#fff"
    document.querySelector("#conrh41").style.color = "#fff"
    document.querySelector("#conrh42").style.color = "#fff"
    document.querySelector("#conrh43").style.color = "#fff"
    document.querySelector("#conmh41").style.color = "#fff"
    document.querySelector("#conmh42").style.color = "#fff"
    document.querySelector("#conmh43").style.color = "#fff"
    document.querySelector("#tleft #black").style.backgroundColor = "#fff"
    document.querySelector("#tleft #black>p").style.color = "#000"
    document.querySelector("#tright>h1").style.color = "#fff"


  }
  else {
    a = 1 
    page1.style.backgroundColor = "white"
    page2.style.backgroundColor = "#fff"
    main.style.backgroundColor = "#fff"
    document.querySelector("#dark").style.opacity = "1"
    document.querySelector("#light").style.opacity = "0"
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
    document.querySelector("#etop p").style.color = "#000"
    document.querySelector("#page2>h1").style.color = "#000"
    document.querySelector("#conrighth3").style.color = "#000"
    document.querySelector("#conmidh3").style.color = "#000"
    document.querySelector("#conlefth3").style.color = "#000"
    document.querySelector("#conlh41").style.color = "#000"
    document.querySelector("#conlh42").style.color = "#000"
    document.querySelector("#conlh43").style.color = "#000"
    document.querySelector("#conrh41").style.color = "#000"
    document.querySelector("#conrh42").style.color = "#000"
    document.querySelector("#conrh43").style.color = "#000"
    document.querySelector("#conmh41").style.color = "#000"
    document.querySelector("#conmh42").style.color = "#000"
    document.querySelector("#conmh43").style.color = "#000"
    document.querySelector("#tleft #black").style.backgroundColor = "#000"
    document.querySelector("#tleft #black>p").style.color = "#fff"
    document.querySelector("#tright>h1").style.color = "#000"


  
  }
})





const buttonRight = document.getElementById('rightcl');
const buttonLeft = document.getElementById('leftcl');

buttonRight.onclick = function () {
  document.getElementById('cardsdiv').scrollLeft += 300;
};
buttonLeft.onclick = function () {
  document.getElementById('cardsdiv').scrollLeft -= 300;
};


gsap.from("#page1>h1",{
  opacity:0,
  paddingTop:"50px",
  duration:0.5
})

gsap.from("#page1>h2",{
  opacity:0,
  paddingTop:"50px",
  duration:0.5,
  delay:0.3
})

gsap.from("#aandcolor",{
  opacity:0,
  paddingTop:"50px",
  duration:0.5,
  delay:0.4
})

gsap.from("#ebtm",{
  scrollTrigger:{
    markers:true,
    trigger:"#ebtm",
    scroller:"#main",
    start:"top 80%",
    end:"top 70%",
    scrub:3


  },
  opacity:0,
  paddingTop:"50px",
  duration:0.2,
  
})