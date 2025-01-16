define(de[2227], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$grb = void 0);
			class t {
				constructor(w, E) {
					(this.a = w), (this.onMessage = E);
				}
				send(w) {
					try {
						this.a.send("vscode:message", w.buffer);
					} catch {}
				}
				disconnect() {
					this.a.send("vscode:disconnect", null);
				}
			}
			e.$grb = t;
		}),
		