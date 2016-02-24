/*******************************/
/*           Set-up            */
/*******************************/
var whatIsThis = function whatIsThis(a, b) {
    console.log('This is...', this);
    console.log('a = ', a);
    console.log('b = ', b);
};

var inAnObject = {
    name: 'inAnObject',
    test: whatIsThis,
    inner: {
        name: 'inner',
        test2: whatIsThis
    }
};

var inAFunction = function inAFunction(a, b) {
    this.name = 'Sally';
    whatIsThis(a, b);
};

// inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
};

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
};

/*******************************/
/*          Problems           */
/*******************************/

// * Problem 1

whatIsThis('hello', 'world'); 

// * "this" is ... global object 
// * because ... 'this' is in the global object, in this problem you are calling the function
// * whatIsThis and passing 'hello', and 'world' as params. a = hello, b = world

// * Problem 2

window.whatIsThis('hello', 'world');

// * "this" is ... still a = hello and b = world like the first one,
// * because ... for the same reasons as above. the only differce is it's
// using the global object for the browser. aaaaaand apparently window is
// undefined.




// * Problem 3

inAnObject.test('face', 'book');

// * "this" is ... inAnObject,  a = face b = book
// * because ... inAnObject is the calling object, but .test
// references the whatIsThis function and is passing face and
// book as the params.




// * Problem 4

inAnObject.inner.test('twitter', 'book');

// * "this" is ... undefined
// * because ... there is no .inner.test, only test2
// never mind its 'not a function'. but for the same reason




// * Problem 5

inAnObject.inner.test2('twitter', 'book');

// * "this" is ...the inner child object of the object
// * because ... its refering to the value of inner which is an object itsel




// * Problem 6

whatIsThis.call();

// * "this" is ... the first argument 
// * because ... because that's how call works
// now i ran it and since there are no params being passed 
//into call(), a and b are undefined, making 'this' undefined




// * Problem 7

whatIsThis.call(trickyTricky);

// * "this" is ... the object trickyTricky, a and b are undefined
// * because ... because trickyTricky is the calling object, 
// a and b are undefined




// * Problem 8

whatIsThis.call(trickyTricky, 'nice', 'job');

// * "this" is ... the object trickyTricky  and  a = nice and b = job 
// * because ... when using call this refers to the first argument passed
// which is trickyTricky




// * Problem 9

whatIsThis.call(confusing);

// * "this" is ... the object confusing, a and b are undefined
// * because ... when using call this referes to the first argument
// which is the object confusing. and a and b are undefined because they
// are declared in the function but not used in the function call




// * Problem 10

whatIsThis.call(confusing, 'hello');

// * "this" is ... the object confusing, a = hello b is undefined
// * because ... using call the first arg is confusing, and params
// are assigned in the order they are declared in the argumnets in 
// the function, so a = hello




// * Problem 11

whatIsThis.apply(trickyTricky);

// * "this" is ... this problem will throw an error
// * because ... when you use apply your params have to be in an array.
// okay i guess not. when i ran it, this was the object trickyTricky
// and a and b were undefined. because this is still getting assigned 
// the the first argument.




// * Problem 12

whatIsThis.apply(confusing, ['nice', 'job']);

// * "this" is ... the object confusing, and a = nice b = job
// * because ... because this always gets assigned to the first 
// argument, the first calling object. and using the apply method
// the arguments are in and array. 




// * Problem 13

whatIsThis.apply(confusing, 'nice', 'job');

// * "this" is ... it will throw an error
// * because ... because the params are not in an array




// * Problem 14

inAFunction('what will', 'happen?');

// * "this" is ... the global object a = what will b = happen
// * because ... inAFunction calls the whatIsThis function in
// which this is the global object 




// * Problem 15

// inAFunction.test3('A', 'B');

// * "this" is ...
// * because ...




// * Problem 16

var newObject = new inAFunction('what will', 'happen?');

// * "this" is ... the global object
// * because ... because at first this is newObject, but because it's assigned
//  the inAFunction that calls whatIsthis where this is the global object




// * Problem 17

// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');

// * "this" is ...
// * because ...




// * Problem 18

inAnObject.test.call(trickyTricky, 'face', 'book');

// * "this" is ... trickyTricky
// * because ... because its the first calling object, 



// * Problem 19

inAnObject.inner.test2.apply(confusing, ['foo', 'bar']);

// * "this" is ... the object confusing 
// * because ... inAnObject.inner.test2. refers you back to the 
// function whatIsThis, and it gets bound to the first calling 
// object which is confusing! also a = foo and b = bar




