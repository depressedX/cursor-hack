import '../../../../../require.js';
import '../../../../../exports.js';
define(de[3092], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$QKb = w);
			class t {
				constructor() {
					(this.a = 0), this.b();
				}
				b() {}
				debug(...C) {
					const d = new Date();
					console.log(
						`${d.getSeconds()}:${d.getMilliseconds().toString().padStart(3, "0")}`,
						`frame #${this.a}: `,
						...C,
					);
				}
			}
			const i = new t();
			function w(...E) {
				i.debug(...E);
			}
		}),
		