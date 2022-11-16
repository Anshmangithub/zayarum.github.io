function gsapanimation(){
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: "#main" });
// gsap animation
gsap.from("#textimg" ,{
  opacity: 0,
  scale : .7,
  ease: Power4,
  duration : 1
})
gsap.from("#navbar h2 ,h3" ,{
 opacity : 0,
  y: -30,
  ease: Power4,
  duration : 1,
  
})


gsap.from("#txt1 ,#txt2" ,{
  opacity: 0,
  y: 20,
  ease: Power4,
  duration : 0.5,
  Stagger : 2,
  scrollTrigger :{
      trigger: "#txt1 , #txt2",
      start: "top 70%",
      end: "bottom 30%",
      // markers : true
  }
})

gsap.from("#linedesign" ,{
opacity: 0,
x: -70,
ease: Power4,
duration : 1,
// Stagger : 2,
scrollTrigger :{
    trigger: "#linedesign",
    start: "top 70%",
    end: "bottom 30%",
    // markers : true
}
})

gsap.from("#txts1 ,#txts2 ,#txts3" ,{
opacity: 0,
y: 20,
ease: Power4,
duration : 0.5,
Stagger : 2,
scrollTrigger :{
    trigger: "#txts1 ,#txts2",
    start: "top 70%",
    end: "bottom 30%",
    // markers : true
}
})


gsap.from("#rumbottle" ,{

y: -30,
ease: Power4,
duration : 1,

scrollTrigger :{
    trigger: "#rumbottle",
    start: "top 80%",
    end: "bottom 20%",
    // markers : true,
    scrub: 2
}
})

gsap.from("#linedesign2" ,{
opacity: 0,
x: -70,
ease: Power4,
duration : 0.5,
Stagger : 2,
scrollTrigger :{
    trigger: "#linedesign2",
    start: "top 70%",
    end: "bottom 30%",
    // markers : true
}
})


gsap.from("#txtt1 ,#txtt2 ,#txtt3" ,{
opacity: 0,
y: 30,
ease: Power4,
duration : 0.5,
Stagger : 2,
scrollTrigger :{
    trigger: "#txtt1 ,#txtt2 ,#txtt3",
    start: "top 70%",
    end: "bottom 30%",
    // markers : true
}
})

gsap.from("#txtf1 , #txtf2" ,{
opacity: 0,
y: 30,
ease: Power4,
duration : 0.5,
Stagger : 2,
scrollTrigger :{
    trigger: "#txtf1 ,#txtf2",
    start: "top 70%",
    end: "bottom 30%",
    // markers : true
}
})

ScrollTrigger.refresh();
}

function navbaranimation(){
  var lasttop = 0;
  navbar = document.querySelector("#navbar");
  window.addEventListener("scroll",function(){
      var scrolltop = window.pageYOffset || document.documentElement.scrolltop;
      
      if(scrolltop > lasttop){
          navbar.style.top ="-100px";

      }
      else{
          navbar.style.top = "0";
      }
      lasttop = scrolltop;

  })
}

navbaranimation();
gsapanimation();

