(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports = mapcar;
    else
        global.mapcar = mapcar;
    
    function mapcar(fn) {
        var lengths, length, result,
        
        lists   = [].slice.call(arguments, 1);
        
        check(fn, lists);
        
        lengths = lists.map(function(list) {
            return list.length;
        });
        
        length   = Math.min.apply(Math, lengths);
        result   = Array(length).join(',').split(',');
        
        return result.map(function() {
            var result  = fn(headList(lists));
            lists       = tailList(lists);
            
            return result;
        });
    }
    
    function head(list) {
        return list[0];
    }
    
    function tail(list) {
        return list.slice(1);
    }
    
    function headList(lists) {
        return lists.map(head);
    }
    
    function tailList(lists) {
        return lists.map(tail);
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
