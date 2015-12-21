chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request){
        var style = 'img.chrome-twemoji { \n    display: -webkit-inline-box;\n    width: 1.2em;\n    min-width: 1.2em;\n    max-width: 1.2em;\n    height: 1.2em;\n    min-height: 1.2em;\n    max-height: 1.2em;\n    margin: 0 0.2em;\n    vertical-align: -3px;\n    border: 0;\n    outline: 0;\n}\n';
        var options = JSON.parse(localStorage.getItem('options')) || {
            blacklist: [],
            whitelist: [],
            uselist: 'blacklist',
        };
        options.style = style;
        sendResponse(options);
    }
});