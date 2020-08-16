class Form{
    constructor(){

    }

    display(){
    var title=createElement("h2");
    title.html("Car Racing Game");
    title.position(130,0);
    
    var input=createInput("Name");
    input.position(130, 160);
    
    var button=createButton("play");
    button.position(250,200);

    var greet=createElement("h3");
    button.mousePressed(function(){
        input.hide();
        button.hide();

      var name=input.value();
      playercount++;
      player.update(name);
      player.updateCount(playercount);  

      greet.html("Hello " +name);
      greet.position(130,160);
    })
    }
}

/*
HTML - modify web pages
-Elements - define the straucture of a page

Simple html page contains:
-Head
-Body 
    Can contain several elements of its own
    -Headings of different sizes : h1, h2, h3
    -input: to collect datat from user
    -button: displays a button

DOM - Document Object Model
    - p5 Dom library

Things that we will be doing:
-Title : "Car Racing Game"
-h2 element
-change the html content inside the element
-positioning the title on the canvas
*/