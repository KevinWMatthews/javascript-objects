// Use getter and setter methods
// This allows for custom actions (say, data filtering) instead of directly setting a property.
var GetAndSet = {
    // This is a property of an object. Access it using '.'
    actual_property: 'default value',

    // This getter function is accessed as if it were a property:
    //      using '.'
    // This is more powerful than directly acessing a property.
    // We use a function that we create so we can format output, restrict things, etc.
    // This can not have the same name as the actual property.
    // The function can not have an argument.
    // It can have the same name as the setter.
    get property() {
        console.log('You are getting the property.');
        return this.actual_property;
    },
    // This setter function is accessed as if it were a property:
    //      '.<property> = <value>'
    // This is more powerful than directly acessing a property.
    // We use a custom function that to we can verify data, format data, restrict things, etc.
    // This can not have the same name as the actual property.
    // The function must have a single argument.
    // It can have the same name as the getter.
    set property(value) {
        console.log('You are setting the property to ' + value);
        return this.actual_property = value;
    }
};

function get_and_set() {
    var getAndSet = Object.create(GetAndSet);

    console.log(getAndSet.actual_property);     // You can still access the property directly
    console.log(getAndSet.property);            // Use the getter

    getAndSet.actual_property = 66;             // You can still set the property directly
    console.log(getAndSet.actual_property);

    getAndSet.property = 42;
    console.log(getAndSet.property);
};
