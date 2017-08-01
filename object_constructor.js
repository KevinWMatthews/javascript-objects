// An object contructor is a function that creates/returns an object
// Use a capital letter for the function name
function AnObject(property1, property2, method1, method2, method3) {
    this.property1 = property1;
    this.property2 = property2;
    this.method1 = method1;
    this.method2 = method2;
    this.method3 = method3;
}

function object_constructor() {
    // I don't believe that javascript supports named parameters.
    // You have to use the correct order.
    var anObject = new AnObject(
        'value1',
        'value2',
        named_function,
        function local_named_function() {
            console.log('This is a local named function.');
        },
        function () {
            console.log('This is an anonymous function.');
        }
    );

    console.log(anObject);
    console.log(anObject.property1);
    console.log(anObject['property2']);     // Alternate syntax
    anObject.method1();
    anObject.method2();
    anObject.method3();
}

function named_function() {
    console.log('This is a function with a name.');
}
