let wave = atob("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");


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

let w = new Waveform(wave.length);
w.buffer.set(wave);
analogWrite(D26, 0.1, {freq:200});
require("Font8x12").add(Graphics);
w.startOutput(D26, 4000,{repeat:true});

function kick(time){
  w.startOutput(D26, 4000,{repeat:true});
  setTimeout(function() { w.stop(); }, time);
}

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
  //w.stop();
}, D12, { repeat: true, edge: 'rising', debounce: 30 });

function toggle() {
  setTimeout(function() { w.stop(); }, 400);
  click+=16;
  if(click>112){
    click=0;
  }
  ChageSound(presses,click);
  if(presses==click){
    // w.startOutput(D26,4000);
      // console.log("kick!");
    // kick(100);
  }
}


let playGroundInterval = setInterval(toggle, 200);
function init(){
    require("SSD1306").connect(I2C1, function(e){
        g.drawString(
            `SSD1306 Display \nsize: x: ${g.getWidth()} y: ${g.getHeight()}\n${text ||'Hello world!'}`,0,15);
    }); //hmm
}
init()
