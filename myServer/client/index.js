var socket = io();
var userId = "user";


$('form').submit(function() {
    socket.emit('print', {value: $('#m').val(), userId: userId});
    $('#m').val('');
    return false;
});

$("#led-link").on('click', function(e){
    socket.emit('erase', {value: true, userId: userId});
});

socket.on('toogle led', function(msg) {
    if(msg.value === false) {
        $("#led-container").removeClass("on");
        $("#led-container").addClass("off");
    }
    else {
        $("#led-container").removeClass("off");
        $("#led-container").addClass("on");
    }
});

socket.on('message', function(msg) {
    $('#messages').prepend($('<li>'+msg.value+'<span> - '+msg.userId+'</span></li>'));
});

socket.on('connected users', function(msg) {
    $('#user-container').html("");
    for(var i = 0; i < msg.length; i++) {
        //console.log(msg[i]+" )msg[i] == userId( "+userId);
        if(msg[i] == userId)
            $('#user-container').append($("<div id='" + msg[i] + "' class='my-circle'><span>"+msg[i]+"</span></div>"));
        else
            $('#user-container').append($("<div id='" + msg[i] + "' class='user-circle'><span>"+msg[i]+"</span></div>"));
    }
});

socket.on('user connect', function(msg) {
    if(userId === "user"){
        console.log("Client side userId: "+msg);
        userId = msg;
    }
});

socket.on('user disconnect', function(msg) {
    console.log("user disconnect: " + msg);
    var element = '#'+msg;
    console.log(element)
    $(element).remove();
});

window.onunload = function(e) {
    socket.emit("user disconnect", userId);
}