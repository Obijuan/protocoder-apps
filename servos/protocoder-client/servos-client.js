/*
   Client for the Zum Servo Server
   
   Control servos with Sliders
   
   (c) Juan Gonzalez Gomez (Obijuan). Feb-2015
   GPL v2 license
   
*/

//-- Setup the bluetooth connection
network.connectBluetoothSerialByUi(
function(m, data) {
      console.log(data);
});

//-- Current position and old position. For checking updates
var pos = 0;
var oldpos = 0;

//-- Slider for controlling the servo "a"
var slider1 = ui.addSlider(20, 20, ui.sw - 20, -1, 0, 180,
function(progress){
    
    //-- Slider is in the range 0 - 180. Converto to -90, 90
    pos = Math.round(progress)-90;
    
    //-- Only update the servo if there is a change
    if (pos != oldpos) {
        network.sendBluetoothSerial("a" + pos + "\r");
        console.log(pos)
    }  
    oldpos = pos;
});


