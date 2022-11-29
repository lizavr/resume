function myFunction() {
  var secondBlock = document.getElementById("secondBlockId");
  var arrow = document.getElementById("myBtn");

  if (secondBlock.style.display === "none") {
    secondBlock.style.display = "inline";
    arrow.style.transform = "rotate(-45deg)";
  } else {
    secondBlock.style.display = "none";
    arrow.style.transform = "rotate(135deg)";
  }
}
