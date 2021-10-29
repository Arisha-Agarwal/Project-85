canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

car_image="car2.png";
car_height=100;
car_width=100;
car_x=700;
car_y=500;

function add(){

    car_tag=new Image();
    car_tag.onload=uploadcar;
    car_tag.src=car_image;
}

function uploadcar(){
    ctx.drawImage(car_tag, car_x, car_y, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=='38'){
        up();
        console.log("up");
    }
        if(keypress=='40'){
            down();
            console.log("down");
    }
    if(keypress=='37'){
        left();
        console.log("left");
}
if(keypress=='39'){
    right();
    console.log("right");
}
}
function up(){
    if(car_y>=0){
        car_y=car_y-10;
        uploadcar();
    }
}
function down(){
    if(car_y<=500){
        car_y=car_y+10;
        uploadcar();
    }
}
function left(){
    if(car_x>=0){
        car_x=car_x-10;
        uploadcar();
    }
}
function right(){
    if(car_x<=700){
        car_x=car_x+10;
        uploadcar();
    }
}
