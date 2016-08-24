/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */

var mraa = require("mraa");
var servoModule = require("jsupm_servo");
var servo = new servoModule.Servo(3);
var angle=0;

loopActivity();

function loopActivity(){
    servo.setAngle(angle);
    angle+=10;
    if (angle>160) angle=0;
    
    setTimeout(loopActivity,1000);
}