console.log("[*] FRIDA started")
console.log("[*] Hook StringBuilder")

setImmediate(function() {
    Java.perform(function() {
        const StringBuilder = Java.use('java.lang.StringBuilder');
      
        StringBuilder.toString.implementation = function () {
            var result = this.toString();
            var partial = "";
            if (result !== null) {
                partial = result.toString().replace('\n', '');
            }
            console.log('\t[*] ' + partial)     
            return result;
        }
        console.log('[+] StringBuilder.toString() hooked');
    });  
});
