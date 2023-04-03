function clickImage(smallImg) {
  var fullImg = document.getElementById("imageCoverbox");
  
  // remove border from previously clicked image
  var prevClickedImg = document.querySelector(".clicked-img");
  if (prevClickedImg) {
    prevClickedImg.classList.remove("clicked-img");
  }
  
  // set source of fullImg to clicked image and add border
  fullImg.src = smallImg.src;
  smallImg.classList.add("clicked-img");
}