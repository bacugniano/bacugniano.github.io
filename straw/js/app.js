//////////////////////////
// scroll slider 
//////////////////////////

const html = document.documentElement;
const canvas = document.getElementById("hero-section");
const context = canvas.getContext("2d");

const frameCount = 170;
const currentFrame = index => (
  `canvas/jpg/${index.toString().padStart(4, '0')}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=868;
canvas.height=434;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()

/////////////////////////// 
// animation
////////////////////////// 

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
      triggerHook: 'onLeave'
  }
});

$(function () { // wait for document ready
  // build scene
  var scene = new ScrollMagic.Scene({
                                      triggerElement: "#trigger", 
                                      duration: 4000,
                                      // triggerHook: 0.1
                                    })
                             .setPin("#pin")
                             .addTo(controller);

  var scene = new ScrollMagic.Scene({
                                      triggerElement: "#trigger", 
                                      duration: 2000
                                    })
                             .setClassToggle(".how-work__text-wrap--first", "how-work__text-wrap--first-active")
                             .addTo(controller);

  var scene = new ScrollMagic.Scene({
                                      triggerElement: "#trigger", 
                                      duration: 2000
                                    })
                             .setClassToggle(".how-work__text-wrap--second", "how-work__text-wrap--second-active")
                             .addTo(controller);

}); 