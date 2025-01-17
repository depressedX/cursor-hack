import '../../../../require.js';
import '../../../../exports.js';
import '../../common/viewEventHandler.js';
define(de[303], he([1, 0, 750]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$zub = e.PartFingerprint = e.$yub = void 0);
			class i extends t.$Xsb {
				constructor(d) {
					super(), (this._context = d), this._context.addEventHandler(this);
				}
				dispose() {
					this._context.removeEventHandler(this), super.dispose();
				}
			}
			e.$yub = i;
			var w;
			(function (C) {
				(C[(C.None = 0)] = "None"),
					(C[(C.ContentWidgets = 1)] = "ContentWidgets"),
					(C[(C.OverflowingContentWidgets = 2)] = "OverflowingContentWidgets"),
					(C[(C.OverflowGuard = 3)] = "OverflowGuard"),
					(C[(C.OverlayWidgets = 4)] = "OverlayWidgets"),
					(C[(C.OverflowingOverlayWidgets = 5)] = "OverflowingOverlayWidgets"),
					(C[(C.ScrollableElement = 6)] = "ScrollableElement"),
					(C[(C.TextArea = 7)] = "TextArea"),
					(C[(C.ViewLines = 8)] = "ViewLines"),
					(C[(C.Minimap = 9)] = "Minimap");
			})(w || (e.PartFingerprint = w = {}));
			class E {
				static write(d, m) {
					d.setAttribute("data-mprt", String(m));
				}
				static read(d) {
					const m = d.getAttribute("data-mprt");
					return m === null ? w.None : parseInt(m, 10);
				}
				static collect(d, m) {
					const r = [];
					let u = 0;
					for (; d && d !== d.ownerDocument.body && d !== m; )
						d.nodeType === d.ELEMENT_NODE && (r[u++] = this.read(d)),
							(d = d.parentElement);
					const a = new Uint8Array(u);
					for (let h = 0; h < u; h++) a[h] = r[u - h - 1];
					return a;
				}
			}
			e.$zub = E;
		}),
		