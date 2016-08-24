/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */

var mraa = require("mraa");
var pwm3 = new mraa.Pwm(3);
pwm3.enable(true);
pwm3.period_us(2000);
var value = 0.0;

setInterval(function () {
    if (value >= 1.0) {
        value = 0.0;
    }
    
    value = value + 0.03;
    pwm3.write(value); //Write duty cycle value. 

    console.log(pwm3.read());//read current value that is set before.
}, 3000);
