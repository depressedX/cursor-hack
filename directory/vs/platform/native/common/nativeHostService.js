define(de[2744], he([1, 0, 305, 371]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Y8c = void 0);
			let w = class {
				constructor(C, d) {
					return (
						(this.windowId = C),
						t.ProxyChannel.toService(d.getChannel("nativeHost"), {
							context: C,
							properties: (() => {
								const m = new Map();
								return m.set("windowId", C), m;
							})(),
						})
					);
				}
			};
			(e.$Y8c = w), (e.$Y8c = w = Ne([j(1, i.$V8c)], w));
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	