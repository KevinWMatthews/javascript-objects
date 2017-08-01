// Create an object using an initializer.
// All of the properties are defined within braces
function object_initializer() {
    var anObject = {            // The Object consists of everything within braces.
        property1: 'value1',
        property2: 'value2'
    };

    var anObjectWithFunctions = {
        method1: named_function,
        method2: function local_named_function() {
            console.log('This is a local named function.');
        },
        method3: function() {
            console.log('This is an anonymous function.');
        },
        method4() {
            console.log('Object initializers do not need the property name or the function keyword.');
        }
    }

    console.log(anObject);
    console.log(anObject.property1);
    console.log(anObject['property2']);     // Alternate syntax

    anObjectWithFunctions.method1();
    anObjectWithFunctions.method2();
    anObjectWithFunctions.method3();
    anObjectWithFunctions.method4();
}

function named_function() {
    console.log('This is a function with a name.');
}
