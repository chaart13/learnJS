"use strict";

// strings.1
function ucFirst(str) {
    return str[0].toUpperCase() + str.substring(1);
}

// strings.2
function checkSpam(str) {
    if (~str.indexOf('XXX') || ~str.indexOf('viagra')) {
        return true;
    }
    return false
}

// strings.3
