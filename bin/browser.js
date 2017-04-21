'use strict';

var _value = require('./value');

var _value2 = _interopRequireDefault(_value);

var _file = require('./file');

var _file2 = _interopRequireDefault(_file);

var _url = require('./url');

var _url2 = _interopRequireDefault(_url);

var _object = require('./object');

var _object2 = _interopRequireDefault(_object);

var _array = require('./array');

var _array2 = _interopRequireDefault(_array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Formatting(type) {

  // type = file, value, text, number
  switch (type) {
    case 'file':
      {
        (0, _file2.default)(this);
      }
    case 'url':
      {
        (0, _url2.default)(this);
      }
    case 'object':
      {
        (0, _array2.default)(this);
        (0, _object2.default)(this);
      }
    case 'array':
      {
        (0, _array2.default)(this);
      }
    case 'value':
      {
        (0, _value2.default)(this);
      }
    case 'text':
      {}
    case 'number':
      {}
    default:
      {
        (0, _value2.default)(this);
        (0, _file2.default)(this);
        (0, _url2.default)(this);
        (0, _array2.default)(this);
        (0, _object2.default)(this);
      }
  }
}

window.Formatting = Formatting;