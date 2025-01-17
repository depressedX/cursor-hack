import '../../../require.js';
import '../../../exports.js';
import './node.js';
import './worldwide.js';
define(de[2076], he([1, 0, 1423, 365]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.isBrowser = w);
			function w() {
				return typeof window < "u" && (!(0, t.isNodeEnv)() || E());
			}
			function E() {
				return (
					i.GLOBAL_OBJ.process !== void 0 &&
					i.GLOBAL_OBJ.process.type === "renderer"
				);
			}
		}),
		