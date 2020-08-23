class Form{
    constructor(){
        this.input=createInput("Name");    
        this.button=createButton("Play");
        this.greeting=createElement("h3");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
    var title=createElement("h2");
    title.html("Car Racing Game");
    title.position(displayWidth/2-50,0);
    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

      player.name=this.input.value();
      playerCount++;
      player.index = playerCount;
      player.update();
      
      player.updateCount(playerCount);  

      this.greeting.html("Hello " +player.name);
      this.greeting.position(displayWidth/2-70,displayHeight/4);
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