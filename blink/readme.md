https://www.espruino.com/Flashing+Lights


setInterval
changeInterval
clearInterval

D2 = LED1
# Try 1

var l;setInterval("digitalWrite(D2,l=!l);",500);

# Try 2

var on;
function toggle() {
  on = !on;
  digitalWrite(D2, on);
}
setInterval(toggle, 500);

# Try 3

reset()
function startFlashing(pin, period) {
  var on = false;
  setInterval(function() {
    on = !on;
    digitalWrite(pin, on);
  }, period);
}
startFlashing(D2, 500);

# Try 4 

Pin.prototype.startFlashing = function(period) { 
  var on = false;
  var pin = this;
  setInterval(function() {
    on = !on;
    digitalWrite(pin, on);
  }, period);
}
D2.startFlashing(500);

# Try 5
setInterval(function() {
  digitalWrite(D2, Math.random()>0.5);
}, 20);