class PLAY{
    constructor(){
       this.input = createInput('Name');
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.instruction = createButton('instruction');
       this.face = createButton('Face control');
       this.simple = createButton('Simple control');
       this.default = createButton("Default controls = simple controls")
       this.image = loadImage("instruction.png");
       this.imag = loadImage("arrowkeys.png");
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.instruction.hide();
        this.face.hide();
        this.simple.hide();
        this.default.hide();
        
    }
    display() {
        
        this.default.position(520,200);
        this.default.style('width', '200px');
        this.default.style('height', '40px');
        this.default.style('background', 'lightpink');
        this.title.html("ARCADE GAME");
        this.title.position(400, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.face.position(350,280);
        this.face.style('width', '200px');
        this.face.style('height', '40px');
        this.face.style('background', 'lightpink');
        this.simple.position(700,280);
        this.simple.style('width', '200px');
        this.simple.style('height', '40px');
        this.simple.style('background', 'lightpink');
        this.instruction.position(1300,20);
        this.instruction.style('width', '200px');
        this.instruction.style('height', '40px');
        this.instruction.style('background', 'lavender');

        this.button.mousePressed(() => {
            gameState = "play"
            this.greeting.hide();
            this.input.hide()
            this.button.hide()
            this.title.hide();
            this.default.hide();
            
        });

        this.instruction.mousePressed(() => {
            fill("red")
            textSize(30)
            text("Face control", 1100,90);
            fill("red")
            textSize(30)
            text("Simple control" ,1100 , 550 )
            image(this.image ,900,100,600,400 );
            image(this.imag , 1100,550,200,200);
            this.image.visible = true
            this.instruction.hide();
          
        
        
            
        });
        this.face.mousePressed(() => {
            gameplay = "facecontrol"
          
        });
        this.simple.mousePressed(() => {
            gameplay = "simple"
            
              
        });
        
       
      }
}