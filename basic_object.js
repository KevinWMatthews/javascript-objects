// Create a javascript object on the fly
function create_object() {
    var anObject = new Object();    // Create a javascript object

    // You can add a property to an object at runtime
    anObject.property1 = 'value1';
    anObject['property2'] = 'value2';   // Alternate syntax

    // Properties can be functions; javascript doesn't care.
    // They are still properties but are commonly called methods.
    anObject.method3 = named_function;    // Named function
    anObject.method4 = function named_function2() {
        console.log('This is a local function with a name.');
    }
    anObject.method5 = function() {
        console.log('This is an anonymous function.');
    }

    console.log(anObject);
    console.log(anObject.property1);
    console.log(anObject['property2']); // Alternate syntax
    console.log(anObject.property3);    // Will return 'undefined', not 'null'
    anObject.method3();                 // Calls the function
    anObject.method4();
    anObject.method5();
}

function named_function() {
    console.log('This is a function with a name.');
}
