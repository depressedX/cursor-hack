define(de[3661], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ayc = void 0);
			class t {
				static {
					this.CHANNEL_NAME = "textMateWorkerHost";
				}
				static getChannel(w) {
					return w.getChannel(t.CHANNEL_NAME);
				}
				static setChannel(w, E) {
					w.setChannel(t.CHANNEL_NAME, E);
				}
			}
			e.$Ayc = t;
		}),
		