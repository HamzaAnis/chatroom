$(document).ready(function () {
  // alert('hello')
})
function redirect() {
  sessionStorage.SessionName = document.getElementById("name").value;
  location.href = "chat.html";
}
