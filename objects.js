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

// This is an object constructor
// Use a capital letter.
function MyObject(property1, property2, function1, function2) {
    this.property1 = property1;
    this.property2 = property2;
    this.function1 = function1;
    this.function2 = function2;
}

function object_constructor() {
    var myObject = new MyObject(
        'value1',
        'value2',
        named_function,
        function() {
            console.log('Yet another anonymous function');
        }
    );
    console.log(myObject);
}

// Object.create()
// This allows you to create a prototype for an object without creating a constructor.
var AnObject = {
    property1: 'default_value1',
    property2: 'default_value2',
    function1: named_function,
    function2: function() {
        console.log('So many anonymous functions');
    }
};

function object_create() {
    var anObject = Object.create(AnObject);

    console.log(anObject);
    console.log(anObject.property1);
    console.log(anObject['property2']);
    console.log(anObject.property3);
    anObject.function1();
    anObject.function2();
}
