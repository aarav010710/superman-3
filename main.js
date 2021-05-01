var canvas = new fabric.Canvas('myCanvas');

var super_y = 10;
var super_x = 10;

var block_image_width = 30;
var block_image_height = 30;

var super_object = "";
var block_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        super_object = Img;
        super_object.scaleToWidth(150);
        super_object.scaleToHeight(140);
        super_object.set({
            top:super_y,
            left:super_x
        });
canvas.add(super_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_object = Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:super_y,
            left:super_x
        });
canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    if(e.shiftKey == true && keyPressed == '80' )
    {
console.log("Shift and p pressed");

block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
    }


    if(e.shiftKey == true && keyPressed == '77' )
    {
console.log("Shift and m pressed");

block_image_width = block_image_width - 10;
block_image_height = block_image_height - 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
    }



if (keyPressed == '70')
    {
     new_image('ironman_face.png');
     console.log("f");
    }

if (keyPressed == '66')
{
 new_image('spiderman_body.png');
 console.log("b");
}
if (keyPressed == '76')
    {
     new_image('hulk_legs.png');
     console.log("l");
    }
    if (keyPressed == '82')
    {
     new_image('thor_right_hand.png');
     console.log("r");
    }
    if (keyPressed == '72')
    {
     new_image('captain_america_left_hand.png');
     console.log("h");
    }

    if (keyPressed == '37')
    {
     left();
     console.log("left");
    }

    if (keyPressed == '38')
    {
     up();
     console.log("up");
    }
    if (keyPressed == '39')
    {
     right();
     console.log("right");
    }
    if (keyPressed == '40')
    {
     down();
     console.log("down");
    }
}

function up()
{
    if(super_y >= 0){
        super_y = super_y - block_image_height;
        canvas.remove(super_object);
        player_update();
    }
}
function down()
{
    if(super_y <= 500){
        super_y = super_y + block_image_height;
        canvas.remove(super_object);
        player_update();
    }
}
function left()
{
    if(super_x >= 0){
        super_x = super_x - block_image_height;
        canvas.remove(super_object);
        player_update();
    }
}
function right()
{
    if(super_x <= 850){
        super_x = super_x + block_image_height;
        canvas.remove(super_object);
        player_update();
    }
}