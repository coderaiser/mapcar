(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports = mapcar;
    else
        global.mapcar = mapcar;
    
    function mapcar(fn) {
        check(arguments);
        
        var lists   = [].slice.call(arguments, 1),
            lengths = lists.map(function(list) {
                return list.length;
            }),
            length   = Math.min.apply(Math, lengths),
            result   = Array(length).join(',').split(',');
        
        return result.map(function(item, i) {
            return fn.call(null, lists.map(function(list) {
                return list[i];
            }));
        });
    }
    
    function check(args) {
        var lists = [].slice.call(args, 1);
        
        if (typeof args[0] !== 'function')
            throw Error('fn should be function!');
        
        if (!lists.length)
            checkList();
        
        lists.forEach(checkList);
    }
    
    function checkList(item) {
        if (!Array.isArray(item))
            throw Error('list should be an array!');
    }
    
})(this);
