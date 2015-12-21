(function(){
    'use strict';
    var form = document.forms[0],
        opt = JSON.parse(localStorage.getItem('options')) || {
            blacklist: [],
            whitelist: [],
            uselist: 'blacklist'
        },
        filter = function(string){
            return string.replace(/[ 　]+/g, '').split('\n').filter(String);
        };

    form.onsubmit = function(){
        opt = {
            blacklist: filter(this.blacklist.value),
            whitelist: filter(this.whitelist.value),
            uselist: (this.uselist.value === '1') ? 'whitelist' : 'blacklist'
        };
        localStorage.setItem('options', JSON.stringify(opt));
        return false;
    };

    form.blacklist.value = opt.blacklist.join('\n');
    form.whitelist.value = opt.whitelist.join('\n');

    if (opt.uselist === 'blacklist') {
        form.uselist[0].checked = true;
    } else {
        form.uselist[1].checked = true;
    }
}());