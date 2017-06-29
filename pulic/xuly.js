var socket = io("http://localhost:3703");

$(document).ready(function(){

   $("#btnTaoRoom").click(function(){
       alert("aaaaaaa");
        socket.emit("tao-room", $("#txtRoom").val());
   });


});