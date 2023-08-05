function init(){
    gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
  
}
// init()

var middle = document.querySelector("#overlaymiddle");
middle.addEventListener("mouseenter",function(){
    middle.style.scale = "1.1";
    middle.style.transition = "ease 0.8s";
    middle.style.cursor = "pointer";
})

middle.addEventListener("mouseleave",function(){
    middle.style.scale = "initial";
    middle.style.cursor = "initial";
})

var photu1 = document.querySelector("#overlayphotu1");
photu1.addEventListener("mouseenter",function(){
    photu1.style.scale = "1.1";
    photu1.style.transition = "ease 0.8s";
    photu1.style.cursor = "pointer";
})

photu1.addEventListener("mouseleave",function(){    
    photu1.style.scale = "initial";
    photu1.style.cursor = "initial";
})

var photu = document.querySelector("#overlayphotu");
photu.addEventListener("mouseenter",function(){
    photu.style.scale = "1.1";
    photu.style.transition = "ease 0.8s";
    photu.style.cursor = "pointer";
})

photu.addEventListener("mouseleave",function(){
    photu.style.scale = "initial";
    photu.style.cursor = "initial";
})

var badiphoto = document.querySelector("#overlaybadiphoto");
badiphoto.addEventListener("mouseenter",function(){
    badiphoto.style.scale = "1.1";
    badiphoto.style.transition = "ease 0.8s";
    badiphoto.style.cursor = "pointer";
})

badiphoto.addEventListener("mouseleave",function(){
    badiphoto.style.scale = "initial";
    badiphoto.style.cursor = "initial";
})

var lefttphoto = document.querySelector("#overlaylefttphoto");
lefttphoto.addEventListener("mouseenter",function(){
    lefttphoto.style.scale = "1.1";
    lefttphoto.style.transition = "ease 0.8s";
    lefttphoto.style.cursor = "pointer";
})

lefttphoto.addEventListener("mouseleave",function(){
    lefttphoto.style.scale = "initial";
    lefttphoto.style.cursor = "initial";
})

var righttphoto = document.querySelector("#overlayrighttphoto");
righttphoto.addEventListener("mouseenter",function(){
    righttphoto.style.scale = "1.1";
    righttphoto.style.transition = "ease 0.8s";
    righttphoto.style.cursor = "pointer";
})

righttphoto.addEventListener("mouseleave",function(){
    righttphoto.style.scale = "initial";
    righttphoto.style.cursor = "initial";
})

var last = document.querySelector("#last");
var lasth1 = document.querySelector("#last h1");
var lastimg = document.querySelector("#last img");

last.addEventListener("mouseenter",function(){
    lasth1.style.letterSpacing = "4px";
    lasth1.style.transition = "ease 0.5s";
    lastimg.style.transition = "ease 0.5s"; 
    lastimg.style.height = "3.2vw";
    lastimg.style.borderColor = "#cba55a";
    last.style.cursor = "pointer";
})

last.addEventListener("mouseleave",function(){
    lasth1.style.letterSpacing = "initial";
    lastimg.style.height = "initial";
    lastimg.style.borderColor = "#aaa";
    last.style.cursor = "initial";

})

var tl = gsap.timeline();
tl
.from("#one",{
    opacity: 0,
    duration: 1,
    y: -300,
    ease: Expo
})
.from("#two",{
    opacity: 0,
    duration: 1,
    y: 300,
    delay: -1,
    ease: Expo
})
.from("#overlay2>h3",{
    opacity: 0,
    y: 20,
    duration: 1,
    ease: Expo
})

gsap.from("#section2",{
    backgroundColor: "white",
    scrollTrigger: {
        trigger: "#section2",
        start: "top 80%",
    }
})

gsap.from("#box1",{
    width: 0,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#section4",
        start: "top 40%",
    }
})

gsap.from("#box3",{
    width: 0,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#section4",
        start: "top 40%",
    }
})

gsap.to("#overlaybox1",{
    width: "100%",
    opacity: 1,
    duration: 1,
    delay: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#section4",
        start: "top 40%",
    }
}) 

gsap.from("#sec1",{
    width: 0,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#section4",
        start: "top 80%",
    }
})

gsap.to("#overlaysec1",{
    width: "100%",
    opacity: 1,
    duration: 1,
    delay: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#section5",
        start: "top 80%",
    }
})

gsap.from("#sec2,#sec3,#sec4",{
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.1,
    ease: Bounce.ease,
    scrollTrigger: {
        trigger: "#section5",
        start: "top 80%",
    }
})

gsap.from("#top span",{
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#section6",
        start: "top 70%",
    }
})

gsap.from("#middle",{
    y: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#middle",
        start: "top 90%",
    }
})

gsap.from("#photu",{
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#section7",
        start: "top 70%",
    }
})

gsap.from("#photu1",{
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#section7",
        start: "top 10%",
    }
})

gsap.from("#badiphoto",{
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#section8",
        start: "top 10%",
    }
})

gsap.from("#righttphoto",{
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#section10",
        start: "top 70%",
    }
})

gsap.from("#lefttphoto",{
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#section10",
        start: "top 40%",
    }
})

gsap.from("#lleftphoto",{
    width: 0,
    opacity: 0,
    duration: 1,
    ease:Expo.easeInOut,
    scrollTrigger: {
        trigger: "#section13",
        start: "top 80%",
    } 
})

gsap.to("#overlaylleftphoto",{
    width: "100%",
    opacity: 1,
    duration: 1,
    delay: 1,
    ease:Expo.easeInOut,
    scrollTrigger: {
        trigger: "#section13",
        start: "top 80%",
    }   
})

// .from("#sec1",{
//     width: 0,
//     opacity: 0,
//     duration: 1,
//     ease:Expo.easeInOut   
// })
// .from("#overlaysec1",{
//     width: 0,
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     ease:Expo.easeInOut   
// })

// .from("#write1,#write2,#photu",{
//     y: 100,
//     opacity: 0,
//     duration: 1,
//     ease: Expo.easeInOut,
//     stagger: 0.5
// })

// .from("#para1",{
//     y: 100,
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     ease: Expo.easeInOut
// })
// .from("#lefttpara,#rightttext,#righttphoto,#lefttphoto",{
//     y: 100,
//     opacity: 0,
//     duration: 1,
//     delay: 1,
//     ease: Expo.easeInOut,
//     stagger: 0.5
// })

