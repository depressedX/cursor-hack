import '../../../../require.js';
import '../../../../exports.js';
import './extHost.protocol.js';
define(Pe[541], Ne([1, 0, 6]), function (we, t, e) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$jhd = void 0);
			class r {
				constructor(N) {
					const P = N.getProxy(e.$lbb.MainThreadClipboard);
					this.value = Object.freeze({
						readText() {
							return P.$readText();
						},
						writeText(I) {
							return P.$writeText(I);
						},
					});
				}
			}
			t.$jhd = r;
		}),
		