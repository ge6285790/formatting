'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = object;

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function object(that) {

  // 深層合併
  that.deepMerge = function (obj1, obj2) {
    var mergeObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    // mergeObj = {};
    var obj1Key = Object.keys(obj1);
    var obj2Key = Object.keys(obj2);
    var newKey = that.arrayMerge(obj1Key, obj2Key); // 合併兩個 array，重複的值只留下一個
    var sameKey = that.arraySameValue(obj1Key, obj2Key); // 取出兩個 array 重複的值
    var uniqueKey = that.arrayNonrepeatValue(obj1Key, obj2Key); // 取出兩個 array 不重複的值
    var key = that.arrayRemoveValue(newKey, sameKey); // 在 array1 內找出 array2 的值，並移除

    uniqueKey.map(function (item) {
      if (obj1[item]) {
        mergeObj = _extends({}, mergeObj, _defineProperty({}, item, obj1[item]));
        return item;
      }
      mergeObj = _extends({}, mergeObj, _defineProperty({}, item, obj2[item]));
      return item;
    });

    sameKey.map(function (item) {
      if (_typeof(obj1[item]) === 'object' && _typeof(obj2[item]) === 'object') {
        mergeObj = _extends({}, mergeObj, _defineProperty({}, item, {}));
        mergeObj[item] = that.deepMerge(obj1[item], obj2[item], mergeObj[item]);
        return item;
      }
      mergeObj = _extends({}, mergeObj, _defineProperty({}, item, obj2[item]));
      return item;
    });
    return mergeObj;
  };

  that.deepEuqal = function (obj1, obj2) {
    return (0, _deepEqual2.default)(obj1, obj2);
  };
}