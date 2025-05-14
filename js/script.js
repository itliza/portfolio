function toggleMenu() {
  let menuInfo = document.getElementById("info");
  let wrapperShrink = document.getElementById("wrapper");

  if (menuInfo.style.display == "none") {
    menuInfo.style.display = "block";
    wrapperShrink.classList.add("wrapper-shrink");
  } else {
    menuInfo.style.display = "none";
    wrapperShrink.classList.remove("wrapper-shrink");
  }
}
