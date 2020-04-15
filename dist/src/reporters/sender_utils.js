'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
// Copyright (c) 2018 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
// in compliance with the License. You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License
// is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
// or implied. See the License for the specific language governing permissions and limitations under
// the License.

var _thriftrw = require('thriftrw');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var SenderUtils = (function() {
  function SenderUtils() {
    _classCallCheck(this, SenderUtils);
  }

  _createClass(SenderUtils, null, [
    {
      key: 'invokeCallback',
      value: function invokeCallback(callback, numSpans, error) {
        if (callback) {
          callback(numSpans, error);
        }
      },
    },
    {
      key: 'convertProcessToThrift',
      value: function convertProcessToThrift(t, process) {
        var tagMessages = [];
        for (var j = 0; j < process.tags.length; j++) {
          var tag = process.tags[j];
          tagMessages.push(new t.Tag(tag));
        }

        return new t.Process({
          serviceName: process.serviceName,
          tags: tagMessages,
        });
      },
    },
  ]);

  return SenderUtils;
})();

exports.default = SenderUtils;
//# sourceMappingURL=sender_utils.js.map