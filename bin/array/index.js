'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = array;

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function array(that) {

  // 合併兩個 array
  that.arrayMerge = function (array1, array2) {
    var allArray = [].concat(_toConsumableArray(array1), _toConsumableArray(array2));
    var mergeArray = [];
    allArray.map(function (item) {
      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
        var append = false;
        mergeArray.map(function (arrayItem) {
          if (!(0, _deepEqual2.default)(arrayItem, item)) {
            // console.log(item);
            append = true;
          }
          return arrayItem;
        });
        if (append) {
          mergeArray.push(item);
        }
      }
      if (mergeArray.indexOf(item) < 0) {
        mergeArray.push(item);
      }
      return item;
    });
    return mergeArray;
  };

  // 取出兩個 array 內重複的數值
  that.arraySameValue = function (array1, array2) {
    var allArray = [].concat(_toConsumableArray(array1), _toConsumableArray(array2));
    var sameArray = [];
    var mergeArray = [];
    allArray.map(function (item) {
      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
        var append = false;
        mergeArray.map(function (arrayItem) {
          if ((0, _deepEqual2.default)(arrayItem, item)) {
            append = true;
          }
          return arrayItem;
        });
        if (append) {
          sameArray.push(item);
        }
      }
      if (mergeArray.indexOf(item) < 0) {
        mergeArray.push(item);
      } else {
        sameArray.push(item);
      }
      return item;
    });
    return sameArray;
  };

  // 將 mainArray 內與 removeArray 內相同的數值移除
  that.arrayRemoveValue = function (mainArray, removeArray) {
    return mainArray.filter(function (item) {
      var result = true;
      removeArray.map(function (removeItem) {
        if ((0, _deepEqual2.default)(removeItem, item)) {
          result = false;
          return removeItem;
        }
        return removeItem;
      });
      return result;
    });
  };

  // 取出兩個 array 內不重複的數值
  that.arrayNonrepeatValue = function (array1, array2) {
    var newKey = that.arrayMerge(array1, array2);
    var sameKey = that.arraySameValue(array1, array2);
    return that.arrayRemoveValue(newKey, sameKey);
  };
}