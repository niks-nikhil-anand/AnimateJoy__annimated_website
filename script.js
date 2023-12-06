let page1Content = document.querySelector(".page1_content")
let cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove" , function(dets){
    // cursor.style.left = dets.x + "px";
    // cursor.style.top = dets.y + "px";
   gsap.to(cursor , {
    x: dets.x,
    y: dets.y
   })
})