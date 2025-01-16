define(de[2823], he([1, 0, 6, 3, 189]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$OHb = void 0);
			class E extends i.$1c {
				constructor() {
					super(...arguments),
						(this.type = w.TerminalCapability.CwdDetection),
						(this.a = ""),
						(this.b = new Map()),
						(this.c = this.D(new t.$re())),
						(this.onDidChangeCwd = this.c.event);
				}
				get cwds() {
					return Array.from(this.b.keys());
				}
				getCwd() {
					return this.a;
				}
				updateCwd(d) {
					const m = this.a !== d;
					this.a = d;
					const r = this.b.get(this.a) || 0;
					this.b.delete(this.a), this.b.set(this.a, r + 1), m && this.c.fire(d);
				}
			}
			e.$OHb = E;
		}),
		