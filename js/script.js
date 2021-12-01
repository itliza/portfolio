function toggleMenu() {
  let menuInfo = document.getElementById('info');  
  let wrapperShrink = document.getElementById('wrapper');

  if(menuInfo.style.display == "none") { // if is menuInfo displayed, hide it
    menuInfo.style.display = "block";
    wrapperShrink.classList.add('wrapper-shrink');
  }
  else { // if is menuInfo hidden, display it
    menuInfo.style.display = "none";
    wrapperShrink.classList.remove('wrapper-shrink');
  }
}