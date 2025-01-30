import '../../../../require.js';
import '../../../../exports.js';
define(de[1541], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$6wb = void 0);
			class t {
				static {
					this.CHANNEL_NAME = "editorWorkerHost";
				}
				static getChannel(w) {
					return w.getChannel(t.CHANNEL_NAME);
				}
				static setChannel(w, E) {
					w.setChannel(t.CHANNEL_NAME, E);
				}
			}
			e.$6wb = t;
		}),
		