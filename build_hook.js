console.log("[*] FRIDA started");
console.log("[*] Hook Build Information");

setImmediate(function() {
    Java.perform(function() {
         var myClass = Java.use("android.os.Build");
        myClass.HARDWARE.value = "TestHardware";
        myClass.FINGERPRINT.value = "TestFingerprint";
        myClass.DEVICE.value = "TestDevice";
        myClass.BOARD.value = "TestBoard";
        myClass.MODEL.value = "TestModel";
        myClass.ID.value = "TestID";
  });  
});
