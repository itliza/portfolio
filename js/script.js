function toggleMenu() {
  var menuInfo = document.getElementById('info');    
  if(menuInfo.style.display == "none") { // if is menuInfo displayed, hide it
    menuInfo.style.display = "block";
  }
  else { // if is menuInfo hidden, display it
    menuInfo.style.display = "none";
  }
}