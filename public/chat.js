$(document).ready(function () {
  // alert(sessionStorage.SessionName);
  document.getElementById('name').innerText = sessionStorage.SessionName;
  document.getElementById('time').innerText = "Online for --:-- minutes";

  $.getJSON("http://localhost:8080/api/rooms", function (data) {
    var div = document.getElementById('rooms');

    $.each(data, function (key, val) {
      div.innerHTML += '<a class=' + '"roomname"' + ' id=' + val.id + ' href="#" value=' + val.id + ' onclick="getRoomDetals(' + val.id + ')"' + '> ' + val.name + '</a > ';
      console.log("<li id='" + key + "'>" + val.name + "</li>");
    });
  });

  $('.roomname').on('click', function () {
    alert(this.href);
  });
})

function getRoomDetals(roomid) {
  $.getJSON('http://localhost:8080/api/rooms/' + roomid, function (data) {
    // var div = document.getElementById('rooms');
    $.each(data, function (key, val) {
      // div.innerHTML += '<a class=' + '"roomname"' + ' id=' + val.id + ' href="#" value=' + val.id + ' onclick="getRoomDetals(' + val.id + ')"' > '+val.name+'</a > ';
      console.log("Key= " + key + " Value = " + val);
      if (key == 'users') {
        // console.log("The desired is come.");
        var i = 0;
        $.each(val, function (key1, val1) {
          console.log(i + " " + val1);
          i++;
        });
      }
      else if (key == 'name') {
        document.getElementById('roomname').innerHTML = val;

      }
    });
  });
}