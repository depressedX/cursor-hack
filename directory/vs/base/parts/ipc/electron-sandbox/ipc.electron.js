define(
			de[2688],
			he([1, 0, 76, 6, 305, 2227, 320]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$krb = void 0);
				class d extends w.$ri {
					static f() {
						const r = i.Event.fromNodeEventEmitter(
							C.$P,
							"vscode:message",
							(u, a) => t.$Te.wrap(a),
						);
						return C.$P.send("vscode:hello"), new E.$grb(C.$P, r);
					}
					constructor(r) {
						const u = d.f();
						super(u, r), (this.b = u);
					}
					dispose() {
						this.b.disconnect(), super.dispose();
					}
				}
				e.$krb = d;
			},
		),
		