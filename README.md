# Formatting
<br/>
Process data like value, file, url, array and object.

## Installation
<br/>
1. node
```
npm install formatting --save
```
<br/>
2. browser
```
<script src=""></script>
```

## Usage
<br/>
1. node
```js
import Formatting from 'formatting';

const valueFormat = new Formatting('value');
valueFormat.leading(1, 3, 0);
```
<br/>
2. browser
```js
<script>
import Formatting from 'formatting';

const valueFormat = new Formatting('value');
valueFormat.leading(1, 3, 0);
</script>
```

## API
<br/>
Create a Constructor like `js const format = new Formatting(type)`,and type is the mode which your data is. If you want to use all methods, type can be empty.
<br/>
const format = new Formatting()
<br/>
Object APIs                        
------------------------------ | -------------
format.deepMerge(obj1, obj2) | Merge two nested object
format.deepEuqal(obj1, obj2) | Compared two nested object(use deep-equal module)

Array APIs                        
------------------------------ | -------------
format.arrayMerge(array1, array2) | Merge two nested array and if they have same children value, just keep one of them
format.arraySameValue(array1, array2) | Compare two nested array, and get same value
format.arrayRemoveValue(array1, array2) | Remove children value that array2 has from array1
format.arrayNonrepeatValue(array1, array2) | Compare two nested array, and get no-repeat children value
