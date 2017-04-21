'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = value;
function value(that) {

  that.file = function (ele) {
    return document.querySelector(ele).files;
  };

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

  that.size = function (size) {
    var unitArray = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    var mathLog = Math.floor(Math.log10(size));
    var unit = mathLog < 3 ? 'Bytes' : unitArray[Math.floor(mathLog / 3)];
    var divisor = Math.pow(10, Math.floor(mathLog / 3) * 3);
    return Math.round(size / divisor * 100) / 100 + ' ' + unit;
  };

  that.duration = function (duration) {
    var fileLong = duration;
    var second = Math.floor(fileLong % 60);
    var min = Math.floor(fileLong / 60) % 60;
    var hour = Math.floor(fileLong / 60 / 60);
    second = that.leading(second, 2, 0);
    min = that.leading(min, 2, 0);
    hour = that.leading(hour, 2, 0);
    return hour + ':' + min + ':' + second;
  };

  that.videoInfo = function (ele) {
    var files = that.file(ele);
    var promiseArray = [];
    var index = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var file = _step.value;

        var i = index;
        var fileSize = that.size(file.size);
        var fileTitle = file.name;
        var fileType = file.type.split('/');
        fileType.shift();
        if (file.type.indexOf('video') < 0) {
          promiseArray.push(new Promise(function (resolve, reject) {
            resolve({
              name: fileTitle,
              size: fileSize,
              error: 'not video file',
              type: fileType[0],
              lastModified: file.lastModified,
              lastModifiedDate: file.lastModifiedDate
            });
          }));
          return 'continue';
        }

        promiseArray.push(new Promise(function (resolve, reject) {
          var video = document.createElement('video');
          video.preload = 'metadata';
          video.onloadedmetadata = function () {
            window.URL.revokeObjectURL(this.src);
            var fileLong = that.duration(video.duration);
            document.querySelector('#tempVideo' + i).remove();
            resolve({
              name: fileTitle,
              size: fileSize,
              type: fileType[0],
              duration: fileLong,
              lastModified: file.lastModified,
              lastModifiedDate: file.lastModifiedDate
            });
          };
          video.src = URL.createObjectURL(file);
          video.style.display = 'none';
          video.id = 'tempVideo' + i;
          index++;
          document.querySelector('body').appendChild(video);
        }));
      };

      for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ret = _loop();

        if (_ret === 'continue') continue;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return Promise.all(promiseArray);
  };

  that.imageInfo = function (ele) {
    var files = that.file(ele);
    var promiseArray = [];
    var index = 0;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      var _loop2 = function _loop2() {
        var file = _step2.value;

        console.log(file);
        var i = index;
        var fileSize = that.size(file.size);
        var fileTitle = file.name;
        var fileType = file.type.split('/');
        fileType.shift();
        if (file.type.indexOf('image') < 0) {
          promiseArray.push(new Promise(function (resolve, reject) {
            resolve({
              name: fileTitle,
              size: fileSize,
              error: 'not image file',
              type: fileType[0],
              lastModified: file.lastModified,
              lastModifiedDate: file.lastModifiedDate
            });
          }));
          return 'continue';
        }

        promiseArray.push(new Promise(function (resolve, reject) {
          resolve({
            name: fileTitle,
            size: fileSize,
            type: fileType[0],
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate
          });
        }));
      };

      for (var _iterator2 = files[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _ret2 = _loop2();

        if (_ret2 === 'continue') continue;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return Promise.all(promiseArray);
  };
}