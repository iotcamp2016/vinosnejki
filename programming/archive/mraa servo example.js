var mraa = require('mraa');
var servoModule = require("jsupm_servo");

var servo = new servoModule.ES08A(3);
var angle = 0;
var step = 20;

periodicActivity();

function periodicActivity(){
servo.setAngle(angle);
angle = angle + step;
if(angle>step*2)
step = -20;
if(angle < 10)
step = 20;
setTimeout(periodicActivity,1000);
}