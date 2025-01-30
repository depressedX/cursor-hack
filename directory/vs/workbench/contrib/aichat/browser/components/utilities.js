import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/uri.js';
define(de[1232], he([1, 0, 9]), function (ce /*require*/,
 e /*exports*/,
 t /*uri*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$vbc = i);
			function i() {
				let w = "abcdefghijklmnopqrstuvwxyz",
					E = "";
				for (let C = 0; C < 10; C++)
					E += w.charAt(Math.floor(Math.random() * w.length));
				return t.URI.parse(`aichat-code-block-anysphere://${E}`);
			}
		}),
		