define(de[3392], he([1, 0, 343, 2736]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$y4c = void 0);
			class w {
				constructor(C, d) {
					(this.a = C), (this.b = d);
				}
				dumpDebugInfo() {
					return "FallbackKeyboardMapper dispatching on keyCode";
				}
				resolveKeyboardEvent(C) {
					const d = C.ctrlKey || (this.a && C.altGraphKey),
						m = C.altKey || (this.a && C.altGraphKey),
						r = new t.$ts(d, C.shiftKey, m, C.metaKey, C.keyCode);
					return this.resolveKeybinding(new t.$vs([r]))[0];
				}
				resolveKeybinding(C) {
					return i.$x4c.resolveKeybinding(C, this.b);
				}
			}
			e.$y4c = w;
		}),
		