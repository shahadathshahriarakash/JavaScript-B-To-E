# Basics of JavaScript

```javascript
    // Variables

    let updatable; // Updatable Variables

    variable = 'String';

    const constant = 'String'; // Constant Variables

    // Primitive Types

    let name = 'Shahadath'; // String Literal
    let age = 18; // Number Literal
    let isAdult = true; // Boolean Literal
    let address = undefined; // Undefined Literal
    let favColor = null; // Object Litreral

    // Objects

    let person = {
        name: 'Shahadath',
        age: 18,
    };

    person.name = 'Michel'; // Dot Notation
    person['age'] = 19; // Bracket Notation

    // Arrays

    let details = ['Shahadath', 18, 'Dhaka, Bangladesh'];

    details[1] = 19; // Indexing Starts with 0

    // Functions

    function greet(Name, Age) {
        let person = {
            name: Name,
            age: Age
        };

        let details = [Name, Age];
    }

    greet('Shahadath', 18); // Calling Function
```