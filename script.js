//locomotive js - smooth scrolling
/*const scroll = new LocomotiveScroll({
	main: document.querySelector('#main'),
	smooth:true
});*/

//gsap to animate
gsap.from(".nlink",{
    stagger: .2,
    y: 10,
    duration:1,
    ease: Power2,
    opacity:0
})

Shery.textAnimate("#headings h3" ,{
    style: 2,
    y: 10,
    delay: 0.1,                                 
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });


gsap.from(".anim2", {
    y:50,
    opacity: 0,
    ease: Expo,
    duration: 1,
    stagger: .3,

})

Shery.imageEffect("#imgntext img",{
    style:3,
    config: {"uFrequencyX":{"value":18.32,"range":[0,100]},
    "uFrequencyY":{"value":6.11,"range":[0,100]},
    "uFrequencyZ":{"value":22.9,"range":[0,100]},
    "geoVertex":{"range":[1,64],"value":18.31},
    "zindex":{"value":-9996999,"range":[-9999999,9999999]},
    "aspect":{"value":0.7500065495106449},"ignoreShapeAspect":{"value":true},
    "shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},
    "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},
    "currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},
    "infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},
    "durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,
    "range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},
    "maskVal":{"value":1.85,"range":[1,5]},"scrollType":{"value":0},
    "noEffectGooey":{"value":true},"onMouse":{"value":1},
    "noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,
    "range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},
    "antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,
    "range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    

})

Shery.imageEffect("#picimg img",{
    style:5,
    config: {"uFrequencyX":{"value":18.32,"range":[0,100]},
    "uFrequencyY":{"value":6.11,"range":[0,100]},
    "uFrequencyZ":{"value":22.9,"range":[0,100]},
    "geoVertex":{"range":[1,64],"value":18.31},
    "zindex":{"value":-9996999,"range":[-9999999,9999999]},
    "aspect":{"value":0.7500065495106449},"ignoreShapeAspect":{"value":true},
    "shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},
    "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},
    "currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},
    "infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},
    "durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,
    "range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},
    "maskVal":{"value":1.85,"range":[1,5]},"scrollType":{"value":0},
    "noEffectGooey":{"value":true},"onMouse":{"value":1},
    "noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,
    "range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},
    "antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,
    "range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
    
})



gsap.from("#imgntext img",{
    y:"80",
    z: -3,
    opacity:0,
    duration: 2,
    ease:Expo.easeInOut,

})

Shery.imageEffect("#bimg ",{
    style:5,
    config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.276622908481038},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.56,"range":[1,15]},"durationOut":{"value":0.44,"range":[0.1,5]},"durationIn":{"value":1.45,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.37,"range":[0,10]},"metaball":{"value":0.17,"range":[0,2]},"discard_threshold":{"value":0.46,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.4,"range":[0,2]},"noise_scale":{"value":19.85,"range":[0,100]}},
    gooey: true,
})

document.querySelector("#ftext button")
.addEventListener("mouseover", function(){
    gsap.to("#future video",{
        opacity:1,
        duration:1,
        ease: Power4
    })
})

document.querySelector("#ftext button")
.addEventListener("mouseleave", function(){
    gsap.to("#future video",{
        opacity:0,
        duration:1,
        ease: Power4
    })
})
// shery js to animate images accordingly