

function scroll_loco() {
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
scroll_loco()
function move_cursor() {
    let page1Content = document.querySelector(".page1_content")
    let cursor = document.querySelector("#cursor")

    page1Content.addEventListener("mousemove", function (dets) {
        // cursor.style.left = dets.x + "px";
        // cursor.style.top = dets.y + "px";
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}
move_cursor()

function page2_annimation() {
    gsap.from(".text_bar2 p ", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        ScrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })
}

page2_annimation()


// mouse move event of "take it" cursor
function take_it() {
    let page4 = document.getElementById("page4_content");
    let pointer = document.getElementById("take_it");

    page4.addEventListener("mousemove", function (dets) {
        gsap.to(pointer, {
            x: dets.x,
            y: dets.y
        })
    });

    page4.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    });

    page4.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    });
}

take_it();

// swiper scripts starts from here 
function autoplaySlider() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 1500, // Set the delay to control the duration between slides (in milliseconds)
            disableOnInteraction: true,
        },
        speed: 11000, // Set the speed for the transition between slides (in milliseconds)
        effect: 'coverflow', // Use the 'coverflow' effect for a smoother transition
        coverflowEffect: {
            rotate: 50, // Set the rotate value for the coverflow effect
            stretch: 0, // Set the stretch value for the coverflow effect
            depth: 100, // Set the depth value for the coverflow effect
            modifier: 1, // Set the modifier value for the coverflow effect
            slideShadows: false, // Disable slide shadows for better visibility
        },
    });
}



autoplaySlider();


// loader scripts starts from here 

var tl = gsap.timeline();

tl.from("#loader h3", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1

})
tl.to("#loader h3", {
    opacity: 0,
    x: -40,
    duration: 1,
    stagger: 0.1

})
tl.to("#loader", {
    opacity: 0
})
tl.to("#loader", {
    display: "none"
})

tl.from(".page1_content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1 ,
    duration : 0.1

})
tl.from(".text_bar1 h3", {
    y: -100,
    opacity: 0,
    stagger: 0.1 ,
    duration : 0.1

})
tl.from(".text_bar2 p", {
    y: 100,
    opacity: 0,
    stagger: 0.1 ,
    duration : 0.3

})

tl.from(".page7_footer h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1 ,
    duration : 0.9
})




