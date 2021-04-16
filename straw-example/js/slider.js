//////////////////////////
// scroll slider stick
//////////////////////////

const html = document.documentElement;
const canvas = document.getElementById("stick-canvas");
const context = canvas.getContext("2d");

const frameCount = 170;
const currentFrame = index => (
  `img/canvas/stick-jpg/${index.toString().padStart(4, '0')}.jpg`
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

//////////////////////////////
// Scroll slider filter
//////////////////////////////

// const htmlFilter = document.documentElement;
// const canvasFilter = document.getElementById("filter-canvas");
// const contextFilter = canvasFilter.getContext("2d");

// const frameCountFilter = 170;
// const currentFrameFilter = index => (
//   `img/canvas/filter-png/${index.toString().padStart(4, '0')}.png`
// )

// const preloadImagesFilter = () => {
//   for (let i = 1; i < frameCountFilter; i++) {
//     const imgFilter = new Image();
//     imgFilter.src = currentFrameFilter(i);
//   }
// };

// const imgFilter = new Image()
// imgFilter.src = currentFrameFilter(1);
// canvasFilter.width=868;
// canvasFilter.height=434;
// imgFilter.onload=function(){
//   contextFilter.drawImage(img, 0, 0);
// }

// const updateImageFilter = index => {
//   imgFilter.src = currentFrameFilter(index);
//   contextFilter.drawImage(img, 0, 0);
// }

// window.addEventListener('scroll', () => {  
//   const scrollTopFilter = htmlFilter.scrollTop;
//   const maxScrollTopFilter = htmlFilter.scrollHeight - window.innerHeight;
//   const scrollFractionFilter = scrollTopFilter / maxScrollTopFilter;
//   const frameIndexFilter = Math.min(
//     frameCountFilter - 1,
//     Math.ceil(scrollFractionFilter * frameCountFilter)
//   );
  
//   requestAnimationFrame(() => updateImageFilter(frameIndexFilter + 1))
// });

// preloadImagesFilter()