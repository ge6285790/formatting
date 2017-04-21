'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = url;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function url(that) {
  that.getHash = function (url) {
    var string = url ? url : location.href;
    string = string.split('/')[string.split('/').length - 1];
    var hashArray = string.split('#');
    hashArray.shift();
    var hash = hashArray.reduce(function (prev, next) {
      return prev + '#' + next;
    });
    return {
      hash: hash,
      hashArray: hashArray
    };
  };

  that.getParamByName = function (url, name) {
    var locationUrl = url ? url : location.href;
    var string = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + string + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(locationUrl);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

  that.getParams = function (url) {
    var string = url ? url : location.href;
    string = string.split('?')[string.split('?').length - 1];
    var params = string.split('&');
    params = params.map(function (item) {
      var keyValuePair = item.split('=');
      return _defineProperty({}, keyValuePair[0], keyValuePair[1] || '');
    });
    return params.reduce(function (prev, next) {
      return _extends({}, prev, next);
    });
  };
}