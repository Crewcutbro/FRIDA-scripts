console.log("[*] FRIDA started")


setImmediate(function() {
    Java.performNow(function() {
        var app = Java.use("android.content.res.AssetManager");
        app.openNonAssetFd.overload('java.lang.String').implementation = function (string) {
            console.log("[*] opnNonAssetFd() got called!");
            console.log(string);
            this.onCreate();
    };
    });  
});

