console.log("[*] FRIDA started");
console.log("[*] Hook SmsManager.SendTextMessage()");

setImmediate(function() {
    Java.perform(function() {
    var sms = Java.use("android.telephony.SmsManager");
        sms.sendTextMessage.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'android.app.PendingIntent', 'android.app.PendingIntent').implementation = function(destinationAddress, scAddress, text, sentIntent, deliveryIntent){
            console.log("[SMS] destinationAddress: " + destinationAddress);
            console.log("[SMS] scAddress: " + scAddress);
            console.log("[SMS] text: " + text);
            //this.sendTextMessage(destinationAddress, scAddress, text, sentIntent, deliveryIntent);
            return
        }
    });  
});