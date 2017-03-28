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

Object APIs                                | explan                                                              | return type
------------------------------------------ | ------------------------------------------------------------------- | -------------------
format.deepMerge(obj1, obj2)               | Combine two nested object                                           | object
format.deepEuqal(obj1, obj2)               | Compared two nested object(use deep-equal module)                   | boolean

Array APIs                                 | explan                                                              | return type
------------------------------------------ | ------------------------------------------------------------------- | ------------------
format.arrayMerge(array1, array2)          | Merge two nested array with non duplicate value. (array2 to array1) | array
format.arrayDuplicateValue(array1, array2) | Compare two nested array, and get duplicate value                   | array
format.arrayRemoveValue(array1, array2)    | Remove children value that array2 has from array1                   | array
format.arrayNonrepeatValue(array1, array2) | Compare two nested array, and get non duplicate value               | array

Value APIs                                 | explan                                                              | return type
------------------------------------------ | --------------------------------------------------------------------|-------------------
format.leading(value, length, letter)      | value: the data you want to format. length the result string length. letter: fill leading character | string
format.tailing(value, length, letter)      | value: the data you want to format. length the result string length. letter: fill tailing character | string
format.sequence(value, letter, number)     |  value: the data you want to format. letter: the character want to insert. number: loop number. | string
format.insert(value, letter, start)        | value: the data you want to format. letter: the character want to insert. start: insert index. | string
format.replace(value, letter, replaceLetter) | value: the data you want to format. letter: the character want to be replaced. replaceLetter: the replace character. | string
format.replaceWithRange(value, replaceLetter, start, end) | value: the data you want to format. replaceLetter: the replace character. start: replace start index. end: replace end index. | string

File APIs                     | explan        | return type
------------------------------ | -------------|------------
format.file(selector) | Get input file info, selector is className / id / etc selector | array
format.size(value) | Compute file size, minimal unit is Bytes | string
format.duration(millisecond) | Convert Time to HH:MM:SS | string
format.videoInfo(selector) | Get input file info with formatted size, type and duration. Selector is className / id / etc selector | object
format.imageInfo(selector) | Get input file info with formatted size and type. Selector is className / id / etc selector | object

Url APIs                     | explan        | return type
------------------------------ | -------------|------------
format.getHash(url) | Get url hash value, if url variable is empty, it will get location.href. | object
format.getParamByName(name, url) | Get url param value with indicate name. If url variable is empty, it will get location.href. | string
format.getParams(url) | Get all url params value. If url variable is empty, it will get location.href. | object
