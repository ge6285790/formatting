# Formatting

Process data like value, file, url, array and object.

## Installation

1. node
```
npm install formatting --save
```

2. browser
```
<script src=""></script>
```

## Usage

1. node
```js
import Formatting from 'formatting';

const valueFormat = new Formatting('value');
valueFormat.leading(1, 3, 0);
```

2. browser
```js
<script>
import Formatting from 'formatting';

const valueFormat = new Formatting('value');
valueFormat.leading(1, 3, 0);
</script>
```

## API

Create a Constructor like `const format = new Formatting(type)`,and type is the mode which your data is. If you want to use all methods, type can be empty.

const format = new Formatting()

Object APIs                    | explan   
------------------------------ | -------------
format.deepMerge(obj1, obj2) | Combine two nested object
format.deepEuqal(obj1, obj2) | Compared two nested object(use deep-equal module)
Array APIs                     explan  
------------------------------ | -------------
format.arrayMerge(array1, array2) | Merge two nested array with non duplicate value.
format.arrayDuplicateValue(array1, array2) | Compare two nested array, and get duplicate value
format.arrayRemoveValue(array1, array2) | Remove children value that array2 has from array1
format.arrayNonrepeatValue(array1, array2) | Compare two nested array, and get non duplicate value
