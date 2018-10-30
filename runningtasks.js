console.log("[*] FRIDA started")
console.log("[*] Hook activity manager")

setImmediate(function() {
    Java.perform(function() {
        const AM = Java.use('android.app.ActivityManager');
        AM.getRunningTasks.overload('int').implementation = function (maxn) {
            res = this.getRunningTasks(maxn);
            console.log(res)
            return res;
        }
    });  
});
