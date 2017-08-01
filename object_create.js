// Use Object.create()
// This allows you to create a prototype (typical) object without
// creating a constructor function.

// Use a capital letter
var AnObject = {
    property1: 'default_value1',
    property2: 'default_value2',
    method1: named_function,
    method2: function local_named_function() {
        console.log('This is a local named function.');
    },
    method3: function() {
        console.log('This is an anonymous function.');
    },
    method4() {
        console.log('Object.create does not require the property name or function keyword.');
    }
}

function object_create() {
    var anObject = Object.create(AnObject);     // Pass your object to Object.create()

    console.log(anObject);
    console.log(anObject.property1);
    console.log(anObject['property2']);     // Alternate syntax
    anObject.method1();
    anObject.method2();
    anObject.method3();
    anObject.method4();
}

function named_function() {
    console.log('This is a function with a name.');
}
