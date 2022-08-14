import asyncjs

# All the javascript related functions shall be written below
# in the emit block.
{.emit: """
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// From https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return "";
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
var em;
function getValue(){
    var div = document.getElementById("divforvalcheck");
    div.style.height = '1em';
    return ( em = div.offsetHeight );
}
""".}

proc sleep*(ms: cint) {.importjs:"sleep(@)",async,discardable.}
proc getCookie*(name: cstring): cstring {.importjs:"getCookie(@)".}
proc setCookie*(name: cstring, value: cstring, days: cint) {.importjs:"setCookie(@)".}
proc eraseCookie*(name: cstring) {.importjs:"eraseCookie(@)".}
proc getEmValue*(): cint {.importjs:"getValue(@)".}