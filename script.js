
let element = document.getElementsByClassName("removenav");
function clickbar() {
  for (let i = 0; i < 4; i++)
    element[i].style.display = "block"
  document.getElementById("item").style.height = 'auto';
  document.getElementById('crossbar').style.display = "block";
  document.getElementById('bar').style.display = "none";
}
function clickcross() {
  for (let i = 0; i < 4; i++)
    element[i].style.display = "none";
  document.getElementById("item").style.height = '4rem';
  document.getElementById('crossbar').style.display = "none";
  document.getElementById('bar').style.display = "block";
}
