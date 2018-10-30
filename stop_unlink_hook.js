console.log("[*] FRIDA started");
console.log("[*] skip native unlink function");

var unlinkPtr = Module.findExportByName(null, 'unlink');

Interceptor.replace(unlinkPtr, new NativeCallback(function (){   
    console.log("[*] unlink() encountered,skipping it.");
}, 'int', [])); 
