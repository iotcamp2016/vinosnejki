/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
// Leave the above lines for propper jshinting
//Type Node.js Here :)
var mraa = require('mraa');
var servoModule = require("jsupm_servo");

var servo3 = new servoModule.ES08A(3);
var servo5 = new servoModule.ES08A(5);
var servo6 = new servoModule.ES08A(6);
var angle3 = 0;
var angle5 = 0;
var angle6 = 0;
var stopAngle3 = 0;
var stopAngle5 = 0;
var stopAngle6 = 0;
var step3 = 1;
var step5 = 1;
var step6 = 1;
var time = new Date();


function down(){
    move6(20, 85, 1);
}

function up(){
    move6(85, 20, -1);
}

function periodicActivity(){    
    for (var i = 0; i < 2; i++){
        angle3 = 95;
        angle5 = 155;
        angleStop3 = 5;
        angleStop5 = 65;
        step = -1;
        while(angle3>angleStop3){
            servo3.setAngle(angle3);
            servo5.setAngle(angle5);
            angle3 = angle3 + step;
            angle5 = angle5 + step;
            time = new Date();
            while(new Date()-time<10){}
        }

        angle3 = 5;
        angle5 = 65;
        angleStop3 = 95;
        angleStop5 = 155;
        step = 1;
        while(angle3<angleStop3){
            servo3.setAngle(angle3);
            servo5.setAngle(angle5);
            angle3 = angle3 + step;
            angle5 = angle5 + step;
            time = new Date();
            while(new Date()-time<10){}
        }
    }
}

function calibrate(){
    servo3.setAngle(90);
    servo5.setAngle(180);
    servo6.setAngle(90);
}


function move3(start, stop, step){
    var angle = start;
    while(angle!=stop){
        servo3.setAngle(angle);
        angle = angle + step;
        time = new Date();
        while(new Date()-time<10){}
    }
}
function move5(start, stop, step){
    var angle = start;
    while(angle!=stop){
        servo5.setAngle(angle);
        angle = angle + step;
        time = new Date();
        while(new Date()-time<10){}
    }
}
function move6(start, stop, step){
    var angle = start;
    while(angle!=stop){
        servo6.setAngle(angle);
        angle = angle + step;
        time = new Date();
        while(new Date()-time<10){}
    }
}

function erase(){
    servo3.setAngle(95);
    servo5.setAngle(155);
    servo6.setAngle(20);
    down();
    periodicActivity();
    up();
}








var L1= 5.5;
var L2= 3.55;
var L3= 1.35;
var L4= 4.4;
var L5= 4.4;
var L6= 3.55;
var a1=0.0, a2=0.0, x1=0.0, y1=0.0, x2=0.0, y2=0.0, x3=0.0, y3=0.0, x4=0.0, y4=0.0, x6=0.0, y6=0.0, d=0.0, a=0.0, h=0.0;
x2 = 4.73;
y2 = -4.2;
x6 = 2.27;
y6 = -4.2;
var i;

calibrate();
/*servo6.setAngle(20);
i = 1;
j = 1;
move();
down();
i = 1;
j = 3;
move();
i = 4;
j = 3;
move();
i = 4;
j = 1;
move();
i = 1;
j = 1;
move();
up();*/

/*
servo6.setAngle(20);
for(i = 0; i<= 6;i++){
    for(var j = 1; j<= 3;j++){
        x1 = i+(j-1)*0.5;
        y1 = j+i*0.2+(5-i)*0.1*(j-1);
        move();
        down();
        up();
    }
}*/

/*
time = new Date();
while(new Date()-time<2000){}
erase();*/

servo6.setAngle(20);
print_letter(2, -0.5);
print_letter(5, 1.5);

function print_letter(choice, kk){
    switch(choice){
        case 1:
        i=2+kk;
        j=2;
        move();
        down();
        move_line(2+kk,2,3+kk,3,8);
        move_line(3+kk,3,3+kk,1,8);
        up();
        break;

        case 2:
        i=1.5+kk;
        j=3;
        move();
        down();
        move_line(1.5+kk,3,3+kk,3,8);
        move_line(3+kk,3,3+kk,2,8);
        move_line(3+kk,2,1.5+kk,2,8);
        move_line(1.5+kk,2,1.5+kk,1,8);
        move_line(1.5+kk,1,3+kk,1,8);
        up();
        break;

        case 3:
        i=1.5+kk;
        j=3;
        move();
        down();
        move_line(1.5+kk,3,3+kk,3,8);
        move_line(3+kk,3,3+kk,2,8);
        move_line(3+kk,2,1.5+kk,2,8);
        up();
        i=3+kk;
        j=2;
        move();
        down();
        move_line(3+kk,2,3+kk,1,8);
        move_line(3+kk,1,1.5+kk,1,8);
        up();
        break;

        case 4:
        i=1.5+kk;
        j=3;
        move();
        down();
        move_line(1.5+kk,3,1.5+kk,2,8);
        move_line(1.5+kk,2,3+kk,2,8);
        up();
        i=3+kk;
        j=3;
        move();
        down();
        move_line(3+kk,3,3+kk,1,8);
        up();
        break;

        case 5:
        i=3+kk;
        j=3;
        move();
        down();
        move_line(3+kk,3,1.5+kk,3,8);
        move_line(1.5+kk,3,1.5+kk,2,8);
        move_line(1.5+kk,2,3+kk,2,8);
        move_line(3+kk,2,3+kk,1,8);
        move_line(3+kk,1,1.5+kk,1,8);
        up();
        break;

        case 6:
        i=3+kk;
        j=3;
        move();
        down();
        move_line(3+kk,3,1.5+kk,2,8);
        move_line(1.5+kk,2,3+kk,2,8);
        move_line(3+kk,2,3+kk,1,8);
        move_line(3+kk,1,1.5+kk,1,8);
        move_line(1.5+kk,1,1.5+kk,2,8);
        up();
        break;

        case 7:
        i=1.5+kk;
        j=3;
        move();
        down();
        move_line(1.5+kk,3,3+kk,3,8);
        move_line(3+kk,3,1.5+kk,1,8);
        up();
        i=1.5+kk;
        j=2;
        move();
        down();
        move_line(1.5+kk,2,2+kk,2,8);
        up();
        break;

        case 8:
        i=1.5+kk;
        j=3;
        move();
        down();
        move_line(1.5+kk,3,3+kk,3,8);
        move_line(3+kk,3,3+kk,1,8);
        move_line(3+kk,1,1.5+kk,1,8);
        move_line(1.5+kk,1,1.5+kk,3,8);
        up();
        i=1.5+kk;
        j=2;
        move();
        down();
        move_line(1.5+kk,2,3+kk,2,8);
        up();
        break;

        case 9:
        i=3+kk;
        j=2;
        move();
        down();
        move_line(3+kk,2,1.5+kk,2,8);
        move_line(1.5+kk,2,1.5+kk,3,8);
        move_line(1.5+kk,3,3+kk,3,8);
        move_line(3+kk,3,3+kk,2,8);
        move_line(3+kk,2,1.5+kk,1,8);
        up();
        break;

        case 0:
        i=1.5+kk;
        j=3;
        move();
        down();
        move_line(1.5+kk,3,3+kk,3,8);
        move_line(3+kk,3,3+kk,1,8);
        move_line(3+kk,1,1.5+kk,1,8);
        move_line(1.5+kk,1,1.5+kk,3,8);
        up();
        break;
    }
}

function move_line(x0,y0,xn,yn,n){
    if(xn-x0==0){
        var st = (yn-y0)/n;
        if(y0<yn){
            for(q = y0; q<=yn; q=q+st){
                i=x0;
                j=q;
                move();
                //console.log(i + "    " + j);
            }
        }else{
            for(q = y0; q>=yn; q=q+st){
                i=x0;
                j=q;
                move();
                //console.log(i + "    " + j);
            }
        }
    }
    else{
        var k = (yn-y0)/(xn-x0);
        var st = (xn-x0)/n;
        if(x0<xn){
            for(q = x0; q<=xn; q=q+st){
                i=q;
                j=(q-x0)*k+y0;
                move();
                //console.log(i + "    " + j);
            }
        }else{
            for(q = x0; q>=xn; q=q+st){
                i=q;
                j=(q-x0)*k+y0;
                move();
                //console.log(i + "    " + j);
            }
        }
    }
    time = new Date();
    while(new Date()-time<500){}
}

function move(){
    x1 = i+(j-1)*0.5;
    y1 = j+i*0.2+(5-i)*0.1*(j-1);
    d = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
    a = (L1*L1-L2*L2+d*d)/(2*d);
    h = Math.sqrt(L1*L1-a*a);
    x3 = x1 + a*(x2-x1)/d - h*(y2-y1)/d;
    y3 = y1 + a*(y2-y1)/d + h*(x2-x1)/d;
    a1 = Math.acos(Math.abs(x3-x2)/L2)/3.1415926*180;

    //console.log("x3=" + x3 + "  y3=" + y3 + "  a1=" + a1);

    d = Math.sqrt((x3-x1)*(x3-x1)+(y3-y1)*(y3-y1));
    a = (L3*L3-L4*L4+d*d)/(2*d);
    h = Math.sqrt(L3*L3-a*a);
    x4 = x1 + a*(x3-x1)/d + h*(y3-y1)/d;
    y4 = y1 + a*(y3-y1)/d - h*(x3-x1)/d;

    //console.log("x4=" + x4 + "  y4=" + y4);

    d = Math.sqrt((x6-x4)*(x6-x4)+(y6-y4)*(y6-y4));
    a = (L5*L5-L6*L6+d*d)/(2*d);
    h = Math.sqrt(L5*L5-a*a);
    x5 = x4 + a*(x6-x4)/d + h*(y6-y4)/d;
    y5 = y4 + a*(y6-y4)/d - h*(x6-x4)/d;
    a2 = Math.acos(Math.abs(x5-x6)/L2)/3.1415926*180;

    //console.log("x5=" + x5 + "  y5=" + y5 + "  a2=" + a2);
    
    servo3.setAngle(a1);
    servo5.setAngle(180-a2);
    time = new Date();
    while(new Date()-time<10){}
}