var SoundPin=D27;
var pitches = {
    'a':220.00,
    'b':246.94,
    'c':261.63,
    'd':293.66,
    'e':329.63,
    'f':349.23,
    'g':392.00,
    'A':440.00,
    'B':493.88,
    'C':523.25,
    'D':587.33,
    'E':659.26,
    'F':698.46,
    'G':783.99
  };
  var tune = "c    c    c   d    e   e  d   e    f   g   C  C C   g  g g   e  e e   c  c c  g    f  e   d c";
  var pos = 0;

  function freq(f) { 
    if (f===0) digitalWrite(SoundPin,0);
    else analogWrite(SoundPin, 0.5, { freq: f } );
  }
  function step() {
    var ch = tune[pos];
    if (ch !== undefined) pos++;
    if (ch in pitches) freq(pitches[ch]);
    else freq(0); // off
  }

  setInterval(step, 100);
  setWatch("pos=0", D12, true);
