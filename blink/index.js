Pin.prototype.startFlashing = function(period) { 
  var on = false;
  var pin = this;
  setInterval(function() {
    on = !on;
    digitalWrite(pin, on);
  }, period);
}

D2.startFlashing(500);