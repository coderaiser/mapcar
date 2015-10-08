(function() {
    'use strict';
    
    let mapcar  = require('..'),
        test    = require('tape');
    
    let sum = array => 
        array.reduce((value, item) => 
            value + item,
        0);
        
    test('applies function fn to elements of lists with same index', t => {
        var result = mapcar(sum, [1,2,3,4], [1,2]);
        
        t.deepEqual(result, [2,4]);
        t.end();
    });
    
    test('arguments: no fn', t => {
        t.throws(mapcar, /fn should be function!/, 'should throw when no fn');
        t.end();
    });
    
    test('arguments: no lists', t => {
        let fn  = () => mapcar(sum);
       
        t.throws(fn, /list should be an array!/, 'should throw when no lists');
        t.end();
    });
})();
