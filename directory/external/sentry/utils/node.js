define(de[1423], he([1, 0, 1421]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.isNodeEnv = i),
				(e.dynamicRequire = w),
				(e.loadModule = E);
			function i() {
				return (
					!(0, t.isBrowserBundle)() &&
					Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
						"[object process]"
				);
			}
			function w(C, d) {
				return C.require(d);
			}
			function E(C) {
				let d;
				try {
					d = w(module, C);
				} catch {}
				try {
					const { cwd: m } = w(module, "process");
					d = w(module, `${m()}/node_modules/${C}`);
				} catch {}
				return d;
			}
		}),
		