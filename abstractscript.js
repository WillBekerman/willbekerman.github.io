// Abstract button handling 
function showAbstract(abstractId) {
  var paragraph = document.getElementById(abstractId);
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
  } else {
    paragraph.style.display = "none";
  }
}