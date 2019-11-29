var ssid = 'YOUR_SSID';
var password = 'YOUR_SSID_PASSWORD';


var wifi = require('Wifi');
wifi.connect(ssid, {password: password}, function() {
    console.log('Connected to Wifi.  IP address is:', wifi.getIP().ip);
    wifi.save(); // Next reboot will auto-connect
});
