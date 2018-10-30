console.log("[*] FRIDA started");
console.log("[*] Hook WebView.loadUrl()");

setImmediate(function() {
    Java.perform(function() {
    var webview = Java.use("android.webkit.WebView");
        webview.loadUrl.overload('java.lang.String').implementation = function(url){
            console.log("[WebView] url: " + url);
            this.loadUrl(url);
            return
        }
    });  

});