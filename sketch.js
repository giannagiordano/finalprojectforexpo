//creating variable scribble
let scribble = new Scribble( );

//creating variable mgr ("manager")
let mgr;

//creating variables for images
let costarica;
let people;
let passport;
let costaricaflag;
let classpic;
let blueheart;
let year1;
let year2;
let year3;
let year4;
let peru;
let familytree;
let freedom;
let peruflag;
let spain;
let january;
let march;
let april;
let june;
let spainflag;
let starrynight;
let img;
let img1;

//creating variables for interaction in Animation1
let isOverCircle;
let isOverCircle2;
let isOverCircle3;

//creating variables for interaction in Animation2 
let isOverHeart1;
let isOverHeart2;
let isOverHeart3;
let isOverHeart4;

//creating variables for interaction in Animation3
let isOverCircle4;
let isOverCircle5;
let isOverCircle6;

//creating variables for interaction in Animation4
let isOverStar;
let isOverStar2;
let isOverStar3;
let isOverStar4;

//preload images
function preload(){
    costarica = loadImage('images/costarica.png');
    people = loadImage('images/people.png');
    passport = loadImage('images/passport.png');
    costaricaflag = loadImage('images/costaricaflag.png');
    classpic = loadImage('images/2019.png');
    blueheart = loadImage('images/blueheart.png');
    year1 = loadImage('images/year1.png');
    year2 = loadImage('images/year2.png');
    year3 = loadImage('images/year3.png');
    year4 = loadImage('images/year4.png');
    peru = loadImage('images/peru.png');
    familytree = loadImage('images/familytree.png');
    freedom = loadImage('images/freedom.png');
    peruflag = loadImage('images/peruflag.png');
    spain = loadImage('images/spain.png');
    january = loadImage('images/january.png');
    march = loadImage('images/march.png');
    april = loadImage('images/april.png');
    june = loadImage('images/june.png');
    star = loadImage('images/spainflag.png');
    starrynight = loadImage('images/starry-night.png');
    shiningstar = loadImage('images/shining-star.png');
    img = loadImage('images/mlk.png');
    img1 = loadImage('images/MG.png');
}

//base function set-up
function setup (){
    //create full screen canvas
    createCanvas(windowWidth, windowHeight);

    //referencing the SceneManager class
    mgr = new SceneManager();

    //adding five scenes to sketch
    //five different functions will be created for these scenes 
    mgr.addScene ( Animation1 );
    mgr.addScene ( Animation2 );
    mgr.addScene ( Animation3 );
    mgr.addScene ( Animation4 );
    mgr.addScene ( Animation5 );

    //calling the showNextScene function
    mgr.showNextScene();
}

//base draw function
function draw()
{
    mgr.draw();
}

//base mousePressed function
function mousePressed()
{
    mgr.mousePressed();
}

//you can press BACKSPACE to go back to the first scene at any time
function keyPressed()
{
    if (keyCode === BACKSPACE) {
        mgr.showScene( Animation1 );
    }

    //keyPressed function in SceneManager
    mgr.handleEvent("keyPressed");
}

// =============================================================
// =                         BEGIN SCENES                      = 
// =============================================================

//first scene
function Animation1()
{

    this.draw = function()
    {
        //putting an image in the background
        background(costarica);
        //putting a filter on the image in the background
        filter(POSTERIZE, 3);

        //creating a variable for distance 1
        let distance = dist(mouseX, mouseY, width/4, 550);

        //creating a variable for distance 2
        let distance2 = dist(mouseX, mouseY, width/2, 550);

        //creating a variable for distance 3
        let distance3 = dist(mouseX, mouseY, width/2 + width/4, 550);

        //creating an if statement for isOverCircle interaction
        if (distance < 50)
        {
            isOverCircle = true;
        } else {
            isOverCircle = false;
        }

        //creating an if statement for isOverCircle2 interaction
        if(distance2 < 50)
        {
            isOverCircle2 = true;
        } else {
            isOverCircle2 = false;
        }

        //creating an if statement for isOverCircle3 interaction
        if(distance3 < 50)
        {
            isOverCircle3 = true;
        } else {
            isOverCircle3 = false;
        }
    
        //creating first circle with interaction
        if(isOverCircle == true)
        {
            image(people, width/2 - 200, height/2 - 40, people.width/3, people.height/3);
        } 
        fill(0, 99, 3);
        scribble.scribbleEllipse(width/4, 550, 60, 60);

        //creating second circle with interaction
        if(isOverCircle2 == true)
        {
            image(passport, width/2 - 50, height/2, passport.width/2, passport.height/2);
        }
        fill(0, 99, 3);
        scribble.scribbleEllipse(width/2, 550, 60, 60);

        //creating third circle with interaction
        if(isOverCircle3 == true)
        {
            image(costaricaflag, width/2 - 160, height/2 - 40, costaricaflag.width/2, costaricaflag.height/2);
        }
        fill(0, 99, 3);
        scribble.scribbleEllipse(width/2 + width/4, 550, 60, 60);
        
        //putting text into variables
        let c = '"Never doubt that a small group of thoughtful, committed citizens can change the world. Indeed, it is the only thing that ever has."'
        let e = '-Margaret Mead'
        
        //displaying quote
        textAlign(LEFT, TOP);
        textFont('Raleway');
        fill("black");
        textSize(20);
        text(c, width/2, height/2 - 365, 300, 300);
        text(e, width/2 + 85, height/2 - 235, 300, 300);

        //displaying date
        textAlign(LEFT);
        textFont('Raleway');
        fill("white");
        textSize(20);
        text("July 2013", 50, 600, 300, 300);

    }

    this.mousePressed = function()
    {
        //you can click to the next scene
        this.sceneManager.showNextScene();
    }
}

//second scene
function Animation2()
{
    this.draw = function()
    {
        //putting an image in the background
        background(classpic);
        //putting a filter on the image in the background
        filter(POSTERIZE, 3);

        //creating a line for the timeline
        strokeWeight(10);
        stroke("white");
        line(windowWidth/4 + 20, height/2, windowWidth/4 + 920, height/2);

        //creating a variable for distance 4
        let distance4 = dist(mouseX, mouseY, windowWidth/4, height/2 - 60);

        //creating a variable for distance 5
        let distance5 = dist(mouseX, mouseY, windowWidth/4 + 300, height/2 - 60);

        //creating a variable for distance 6
        let distance6 = dist(mouseX, mouseY, windowWidth/4 + 600, height/2 - 60);

        //creating a variable for distance 7
        let distance7 = dist(mouseX, mouseY, windowWidth/4 + 900, height/2 - 60);

        //creating an if statement for isOverHeart interaction
        if (distance4 < 100)
        {
            isOverHeart = true;
        } else {
            isOverHeart = false;
        }

        //creating an if statement for isOverHeart2 interaction
        if(distance5 < 100)
        {
            isOverHeart2 = true;
        } else {
            isOverHeart2 = false;
        }

        //creating an if statement for isOverHeart3 interaction
        if(distance6 < 100)
        {
            isOverHeart3 = true;
        } else {
            isOverHeart3 = false;
        }

        //creating an if statement for isOverHeart4 interaction
        if(distance7 < 100)
        {
            isOverHeart4 = true;
        } else {
            isOverHeart4 = false;
        }
    
        //creating first heart with interaction on timeline
        if(isOverHeart == true)
        {
            image(year1, windowWidth/4, height/2 - 250, year1.width/6, year1.height/6);
            strokeWeight(1);
            text("Year 1", windowWidth/4, height/2 - 85, 300, 300);
        } 
        image(blueheart, windowWidth/4, height/2 - 60, blueheart.width/6, blueheart.height/6);

        //creating second heart with interaction on timeline
        if(isOverHeart2 == true)
        {
            image(year2, windowWidth/4 + 300, height/2 - 260, year2.width/20, year2.height/20);
            strokeWeight(1);
            text("Year 2", windowWidth/4 + 300, height/2 - 85, 300, 300);
        }
        image(blueheart, windowWidth/4 + 300, height/2 - 60, blueheart.width/6, blueheart.height/6); 

        //creating third heart with interaction on timeline
        if(isOverHeart3 == true)
        {
            image(year3, windowWidth/4 + 600, height/2 - 250, year3.width/8, year3.height/8);
            strokeWeight(1);
            text("Year 3", windowWidth/4 + 600, height/2 - 90, 300, 300);
        }
        image(blueheart, windowWidth/4 + 600, height/2 - 60, blueheart.width/6, blueheart.height/6);

        //creating fourth heart with interaction on timeline
        if(isOverHeart4 == true)
        {
            image(year4, windowWidth/4 + 900, height/2 - 250, year4.width/20, year4.height/20);
            strokeWeight(1);
            text("Year 4", windowWidth/4 + 900, height/2 - 90, 300, 300);
        }
        image(blueheart, windowWidth/4 + 900, height/2 - 60, blueheart.width/6, blueheart.height/6);

        //putting text into variables
        let f = '"Be fearless in the pursuit of what sets your soul on fire."'
        let g = '-Unkown'

        //displaying quote
        textAlign(CENTER, TOP);
        textFont('Raleway');
        fill("black");
        strokeWeight(1);
        textSize(20);
        text(f, width/2 - 350, height/2 - 600, 1000, 1000);
        text(g, width/2 + 200, height/2 - 550, 300, 300);

        //displaying date
        textAlign(LEFT);
        textFont('Raleway');
        fill("white");
        textSize(20);
        text("August 2015", 50, 600, 300, 300);

    }

    //you can click to the next scene
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }

}

//third scene
function Animation3()
{
    this.draw = function()
    {

        //putting an image in the background
        background(peru);
        //putting a filter on the image in the background
        filter(POSTERIZE, 3);

        //creating a variable for distance 8
        let distance8 = dist(mouseX, mouseY, width/4, 550);

        //creating a variable for distance 9
        let distance9 = dist(mouseX, mouseY, width/2, 550);

        //creating a variable for distance 10
        let distance10 = dist(mouseX, mouseY, width/2 + width/4, 550);

        //creating an if statement for isOverCircle4 interaction
        if (distance8 < 50)
            {
            isOverCircle4 = true;
        } else {
            isOverCircle4 = false;
        }

        //creating an if statement for isOverCircle5 interaction
        if(distance9 < 50)
        {
            isOverCircle5 = true;
        } else {
            isOverCircle5 = false;
        }

        //creating an if statement for isOverCircle6 interaction
        if(distance10 < 50)
        {
            isOverCircle6 = true;
        } else {
            isOverCircle6 = false;
        }
    
        //creating first circle with interaction
        if(isOverCircle4 == true)
        {
            image(familytree, width/2 - 100, height/2 - 100, familytree.width/2, familytree.height/2);
        } 
        fill(102, 122, 255);
        scribble.scribbleEllipse(width/4, 550, 60, 60);

        //creating second circle with interaction
        if(isOverCircle5 == true)
        {
            image(freedom, width/2 - 50, height/2 - 50, freedom.width/6, freedom.height/6);
        }
        fill(102, 122, 255);
        scribble.scribbleEllipse(width/2, 550, 60, 60);

        //creating third circle with interaction
        if(isOverCircle6 == true)
        {
            image(peruflag, width/2 - 160, height/2 - 100, peruflag.width/2, peruflag.height/2);
        }
        fill(102, 122, 255);
        scribble.scribbleEllipse(width/2 + width/4, 550, 60, 60);

        //putting text into variables
        let h = '"I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love."'
        let i = '-Mother Teresa'    

        //displaying quote
        textAlign(CENTER, TOP);
        textFont('Raleway');
        fill("black");
        strokeWeight(1);
        textSize(20);
        text(h, width/2 - 500, height/2 - 390, 1000, 1000);
        text(i, width/2 + 200, height/2 - 350, 300, 300);

        //displaying date
        textAlign(LEFT);
        textFont('Raleway');
        fill("white");
        textSize(20);
        text("July 2016", 50, 600, 300, 300);

    }
    //you can click to the next scene
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }

}

//fourth scene
function Animation4()
{
    this.draw = function()
    {
        //creating a background
        background(spain);
        //putting a filter on the image in the background
        filter(POSTERIZE, 3);

        //creating a line for the timeline
        strokeWeight(10);
        stroke("white");
        line(windowWidth/4 + 20, height/2, windowWidth/4 + 920, height/2);

        //creating a variable for distance 11
        let distance11 = dist(mouseX, mouseY, windowWidth/4, height/2 - 60);

        //creating a variable for distance 12
        let distance12 = dist(mouseX, mouseY, windowWidth/4 + 300, height/2 - 60);

        //creating a variable for distance 13
        let distance13 = dist(mouseX, mouseY, windowWidth/4 + 600, height/2 - 60);

        //creating a variable for distance 14
        let distance14 = dist(mouseX, mouseY, windowWidth/4 + 900, height/2 - 60);

        //creating an if statement for isOverStar interaction
        if (distance11 < 100)
        {
            isOverStar = true;
        } else {
            isOverStar = false;
        }

        //creating an if statement for isOverStar2 interaction
        if(distance12 < 100)
        {
            isOverStar2 = true;
        } else {
            isOverStar2 = false;
        }

        //creating an if statement for isOverStar3 interaction
        if(distance13 < 100)
        {
            isOverStar3 = true;
        } else {
            isOverStar3 = false;
        }

        //creating an if statement for isOverStar4 interaction
        if(distance14 < 100)
        {
            isOverStar4 = true;
        } else {
            isOverStar4 = false;
        }
    
        //creating first star with interaction on timeline
        if(isOverStar == true)
        {
            image(january, windowWidth/4, height/2 + 55, january.width/20, january.height/20);
            strokeWeight(1);
            fill("black");
            text("January", windowWidth/4, height/2 + 25, 300, 300);
        } 
        image(star, windowWidth/4, height/2 - 60, star.width/5, star.height/5);

        //creating second star with interaction on timeline
        if(isOverStar2 == true)
        {
            image(march, windowWidth/4 + 300, height/2 + 55, march.width/20, march.height/20);
            strokeWeight(1);
            fill("black");
            text("March", windowWidth/4 + 300, height/2 + 25, 300, 300);
        }
        image(star, windowWidth/4 + 300, height/2 - 60, star.width/6, star.height/6); 

        //creating third star with interaction on timeline
        if(isOverStar3 == true)
        {
            image(april, windowWidth/4 + 600, height/2 + 55, april.width/20, april.height/20);
            strokeWeight(1);
            fill("black");
            text("April", windowWidth/4 + 600, height/2 + 25, 300, 300);
        }
        image(star, windowWidth/4 + 600, height/2 - 60, star.width/6, star.height/6);

        //creating fourth star with interaction on timeline
        if(isOverStar4 == true)
        {
            image(june, windowWidth/4 + 900, height/2 + 55, june.width/20, june.height/20);
            strokeWeight(1);
            fill("black");
            text("June", windowWidth/4 + 900, height/2 + 25, 300, 300);
        }
        image(star, windowWidth/4 + 900, height/2 - 60, star.width/6, star.height/6);

        //putting text into variables
        let j = '"Wherever you go, go with all your heart."'
        let k = '-Confucius'

        //displaying quote
        textAlign(CENTER, TOP);
        textFont('Raleway');
        fill("black");
        strokeWeight(1);
        textSize(20);
        text(j, width/2 - 525, height/2 - 300, 1000, 1000);
        text(k, width/2 - 175, height/2 - 250, 300, 300);

        //displaying date
        textAlign(LEFT);
        textFont('Raleway');
        fill("black");
        textSize(20);
        text("Spring 2018", 50, 750, 300, 300);

    }

    //you can click to the next scene
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }

}

//fifth scene
function Animation5()
{
    this.draw = function()
    {
        //creating a black background
        //Interaction with background
        if (mouseIsPressed){
            background(starrynight);
            for (var i=0; i < 50; i++){
                image(shiningstar, i*100, 10, img.width/7, img.height/5);
            }
        }else{
            background(0);
        }

        //Interaction with MLK and MG
        if (mouseX > width/2){
            image(img1, 600, 375, img.width/5, img.height/2.5);
            let a = '"Optimism for me is not a passive expectation that things will get better; it is a conviction that we can make things better."'
            fill(255, 255, 255);
            textSize(30);
            text (a, 300, 200, 400, 400);
            let b = '-Melinda Gates'
            textSize(30);
            text (b, 300, 400, 400, 400);
        }else{
            image(img, 470, 400, img.width/3, img.height/3);
            let s = '"Injustice anywhere is a threat to justice everywhere."';
            fill(255, 255, 255);
            textSize(30);
            text(s, 350, 220, 300, 250);
            let t = '-Martin Luther King Jr.'
            textSize(30);
            text (t, 350, 350, 400, 400);
            }

        //shining star
        image(shiningstar,mouseX, mouseY, img.width/7, img.height/5);
        
        //displaying date
        textAlign(LEFT);
        textFont('Raleway');
        fill("white");
        textSize(20);
        text("May 2019", 50, 600, 300, 300);
    }
}
