'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = value;
function value(that) {
  that.leading = function (value, length, letter) {
    var valueLength = value.toString().length;
    var dif = length - valueLength;
    var mend = '';
    if (dif > 0) {
      for (var i = 0; i <= dif - 1; i += 1) {
        mend += letter;
      }
    }
    return mend + value;
  };

  that.tailing = function (value, length, letter) {
    var valueLength = value.toString().length;
    var dif = length - valueLength;
    var mend = '';
    if (dif > 0) {
      for (var i = 0; i <= dif - 1; i += 1) {
        mend += letter;
      }
    }
    return value + mend;
  };

  that.sequence = function (value, letter, number) {
    var newValue = value.slice(0, number);
    var loopCount = Math.floor(value.toString().length / number);
    if (value.toString().length % number === 0) {
      loopCount = loopCount - 1;
    }
    for (var i = 1; i <= loopCount; i += 1) {
      newValue += '' + letter + value.slice(number * i, number * (i + 1));
    }
    return newValue;
  };

  that.insert = function (value, letter, start) {
    var text = value.toString();
    return '' + text.slice(0, start) + letter + text.slice(start, text.length);
  };

  that.replace = function (value, letter, replaceLetter) {
    var reg = new RegExp(letter, "g");
    if (value.indexOf(letter) < 0) {
      return value;
    }
    return value.replace(reg, replaceLetter);
  };

  that.replaceWithRange = function (value, replaceLetter, start, end) {
    var text = value.toString();
    return '' + text.slice(0, start) + replaceLetter + text.slice(end, text.length);
  };
}