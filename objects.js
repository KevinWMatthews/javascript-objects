function create_object() {
    var myObject = new Object();        // Create a javascript object
    myObject.property1 = 'value1';      // You can just define a new property.
    myObject['property2'] = 'value2';   // You can also define a property like this.
    // You can add functions to an object.
    myObject.function1 = named_function;
    myObject.function2 = function() {
        console.log('I am an anonymous function!');
    }

    console.log(myObject);
    console.log(myObject.property1);
    console.log(myObject['property2']);
    console.log(myObject.property3);    // Will return 'undefined', not 'null'
    myObject.function1();
    myObject.function2();
}

function named_function() {
    console.log('I am a function with a name.');
}

function object_initializers() {
    var myObject = {                // The Object consists of everything within braces.
        property1: 'value1',        // Separate properties and values with a colon.
        property2: 'value2',        // Separate different propertis with a comma.
        function1: named_function,
        function2: function() {
            console.log('I too am an anonymous function');
        }
    }

    console.log(myObject);
    console.log(myObject.property1);
    console.log(myObject['property2']);
    console.log(myObject.property3);
    myObject.function1();
    myObject.function2();
}
