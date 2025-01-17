import '../../../../../require.js';
import '../../../../../exports.js';
define(de[3398], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$pyc = void 0);
			class t {
				static {
					this.CHANNEL_NAME = "languageDetectionWorkerHost";
				}
				static getChannel(w) {
					return w.getChannel(t.CHANNEL_NAME);
				}
				static setChannel(w, E) {
					w.setChannel(t.CHANNEL_NAME, E);
				}
			}
			e.$pyc = t;
		}),
		