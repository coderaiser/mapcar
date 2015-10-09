(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports = mapcar;
    else
        global.mapcar = mapcar;
    
    function mapcar(fn) {
        var lengths, length,
        
        monad   = getMonad(),
        lists   = [].slice.call(arguments, 1);
        
        check(fn, lists);
        
        lengths = lists.map(count);
        length  = Math.min.apply(Math, lengths);
        
        heads(monad, length, lists);
        
        return monad().map(fn);
    }
    
    function heads(fn, n, lists) {
        var list;
        
        while(n--) {
            fn(lists.map(head));
            lists = lists.map(tail);
        }
        
        return list;
    }
    
    function getMonad() {
        var array = [];
        
        return function(value) {
            var result;
            
            if (arguments.length)
                array.push(value);
            else
                result = array.slice(0);
            
            return result;
        };
    }
    
    function count(list) {
        return list.length;
    }
    
    function head(list) {
        return list[0];
    }
    
    function tail(list) {
        return list.slice(1);
    }
    
    function check(fn, lists) {
        if (typeof fn !== 'function')
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
