$(document).ready(function () {
  // alert(sessionStorage.SessionName);  
  document.getElementById('name').innerText = sessionStorage.SessionName;
  document.getElementById('time').innerText = "Online for --:-- minutes";

  $.getJSON("http://localhost:8080/api/rooms", function (data) {
    var div = document.getElementById('rooms');

    $.each(data, function (key, val) {
      div.innerHTML += '<a class=' + '"roomname"' + ' id=' + val.id + ' href="#" value=' + val.id + ' onclick="getRoomDetals(' + val.id + ')"'+'> '+val.name+'</a > ';
      console.log("<li id='" + key + "'>" + val.name + "</li>");
    });
  });

  $('.roomname').on('click', function () {
    alert(this.href);
  });
})

function getRoomDetals(roomid) {
  $.getJSON('http://localhost:8080/api/rooms/'+roomid, function (data) {
    // var div = document.getElementById('rooms');

    $.each(data, function (key, val) {
      // div.innerHTML += '<a class=' + '"roomname"' + ' id=' + val.id + ' href="#" value=' + val.id + ' onclick="getRoomDetals(' + val.id + ')"' > '+val.name+'</a > ';
      console.log("Key= "+ key+ "Value = "+val);
    });
  });
}