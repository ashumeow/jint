/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-179-1.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is the length property of 'O', the [[Value]] field of 'desc' is greater than value of  the length property, test value of the length property is same as [[Value]] (15.4.5.1 step 3.l.iii.1)
 */


function testcase() {
        var arrObj = [0, 1, 2, 3];

        Object.defineProperty(arrObj, "1", {
            configurable: false
        });

        Object.defineProperty(arrObj, "length", {
            value: 3
        });          

        return arrObj.length === 3;
    }
runTestCase(testcase);
