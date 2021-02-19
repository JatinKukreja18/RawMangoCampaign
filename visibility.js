var browserPrefixes = ['moz', 'ms', 'o', 'webkit'];

// get the correct attribute name
function getHiddenPropertyName(prefix) {
    return (prefix ? prefix + 'Hidden' : 'hidden');
}

// get the correct event name
function getVisibilityEvent(prefix) {
    return (prefix ? prefix : '') + 'visibilitychange';
}

// get current browser vendor prefix
function getBrowserPrefix() {
    for (var i = 0; i < browserPrefixes.length; i++) {
        if (getHiddenPropertyName(browserPrefixes[i]) in document) {
            // return vendor prefix
            return browserPrefixes[i];
        }
    }

    // no vendor prefix needed
    return null;
}

// bind and handle events
var browserPrefix = getBrowserPrefix();
