const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
firstImage = carousel.querySelectorAll("img")[0];


let isDragStart=false , prevPageX ,prevScrollLeft;
let firstImageWidth=firstImage.clientWidth + 14;

arrowIcons.forEach(icon =>{
  icon.addEventListener("click" , ()=>{
      carousel.scrollLeft+=icon.id == "left"? -firstImageWidth : firstImageWidth;
  });
});

const dragStart=(e)=>{
  isDragStart=true;
  prevPageX=e.pageX
  prevScrollLeft=carousel.scrollLeft;
}

const dragging=(e)=>{
  if(!isDragStart) return;
     e.preventDefault();
     let positionDiff=e.pageX-prevPageX;
     carousel.scrollLeft=prevScrollLeft-positionDiff;
}

const dragStop = ()=>{
   isDragStart=false;
}

carousel.addEventListener("mousedown" , dragStart);
carousel.addEventListener("mousemove" , dragging);
carousel.addEventListener("mouseup" , dragStop);