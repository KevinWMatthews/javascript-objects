function create_object() {
    var myObject = new Object();        // Create a javascript object
    myObject.property1 = 'value1';      // You can just define a new property.
    myObject['property2'] = 'value2';   // You can also define a property like this.
    // You can add functions to an object.
    myObject.method1 = named_function;
    myObject.method2 = function() {
        console.log('I am an anonymous function!');
    }
    myObject.method3 = function function3() {
        console.log('I am a local function that is not anonymous.');
    }

    console.log(myObject);
    console.log(myObject.property1);
    console.log(myObject['property2']);
    console.log(myObject.property3);    // Will return 'undefined', not 'null'
    myObject.method1();
    myObject.method2();
    myObject.method3();
}

function named_function() {
    console.log('I am a function with a name.');
}

function object_initializers() {
    var myObject = {                // The Object consists of everything within braces.
        property1: 'value1',        // Separate properties and values with a colon.
        property2: 'value2',        // Separate different propertis with a comma.
        method1: named_function,
        method2: function() {
            console.log('I too am an anonymous function');
        },
        method3() {
            console.log("In some contexts you don't need to give a property name or the function keyword.");
        }
    }

    console.log(myObject);
    console.log(myObject.property1);
    console.log(myObject['property2']);
    console.log(myObject.property3);
    myObject.method1();
    myObject.method2();
    myObject.method3();
}

// This is an object constructor
// Use a capital letter.
function MyObject(property1, property2, function1, function2, function3) {
    this.property1 = property1;
    this.property2 = property2;
    this.method1 = function1;
    this.method2 = function2;
    this.method3 = function3;
}

function object_constructor() {
    var myObject = new MyObject(
        'value1',
        'value2',
        named_function,
        function() {
            console.log('Yet another anonymous function');
        },
        function function3() {
            console.log("In some contexts you DO need the function keyword.");
        }
    );
    console.log(myObject);
    console.log(myObject.property1);
    console.log(myObject.property2);
    console.log(myObject.property3);
    myObject.method1();
    myObject.method2();
    myObject.method3();
}

// Object.create()
// This allows you to create a prototype for an object without creating a constructor.
var AnObject = {
    property1: 'default_value1',
    property2: 'default_value2',
    method1: named_function,
    method2: function() {
        console.log('So many anonymous functions');
    },
    method3() {
        console.log('No function keyword or property name');
    }
};

function object_create() {
    var anObject = Object.create(AnObject);

    console.log(anObject);
    console.log(anObject.property1);
    console.log(anObject['property2']);
    console.log(anObject.property3);
    anObject.method1();
    anObject.method2();
    anObject.method3();
}

var GetAndSet = {
    // This is a property of an object. Access it using '.'
    the_property1: 'default',
    // This getter function is accessed as if it were a property: using '.' instead of ().
    // This is more powerful than directly acessing a property.
    // We use a function that we create so we can format output, restrict things, etc.
    // This can not have the same name as the property.
    // It can not have an argument.
    // It can have the same name as the setter.
    get property1() {
        return this.the_property1;
    },
    // This setter function is accessed as if it were a property: using '.<property> = <value>' instead of '<property>(<value)'.
    // This is more powerful than directly acessing a property.
    // We use a custom function that to we can verify data, format data, restrict things, etc.
    // This can not have the same name as the property.
    // It must have a single argument.
    // It can have the same name as the getter.
    set property1(value) {
        return this.the_property1 = value;
    }
};

function get_and_set() {
    var getAndSet = Object.create(GetAndSet);
    console.log(getAndSet.the_property1);
    console.log(getAndSet.property1 = 7);
    console.log(getAndSet.property1);
    console.log(getAndSet.the_property1);
};
