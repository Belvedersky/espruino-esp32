require("Font8x12").add(Graphics);

let img = Graphics.createImage(`
X         X
 X       X
  X     X
   X   X
    X X
     X
    X X
   X   X
  X     X
 X       X
X         X
`);

function drawMatrix(height,width){
   let col = 0;
  for(i=0; i<8;i++){
    g.drawRect(col,height,14+col,width);
    col=col+16;
  }
}
function drawText(text){
  g.drawString(
    `SSD1306 Display \nsize: x: ${g.getWidth()} y: ${g.getHeight()}\n${text ||'Hello world!'}`,0,20);
}
function ChageSound(number,tick){
  g.clear();
  drawMatrix(0,14);
  g.drawImage(img,number+2,2);
  g.drawRect(tick+4,4,10+tick,10);
  g.flip();
}

function start(text){
  g.clear();
  drawMatrix(0,14);
  g.setFont8x12();
  drawText("press button to Start");
  g.flip();
}

// I2C Draw
I2C1.setup({scl:D22,sda:D21});
let g = require("SSD1306").connect(I2C1, start);


pinMode(D12,'input_pulldown');

let presses = 0;
let click = 0;

setWatch(function(e) {
  presses+=16;
  if(presses>112){
    //console.log("reset button");
    presses=0;
  }
  ChageSound(presses,click);
}, D12, { repeat: true, edge: 'rising', debounce: 50 });



function toggle() {
  click+=16;
   if(click>112){
    click=0;
  }
  ChageSound(presses,click);
}

let playGroundInterval = setInterval(toggle, 1000);

