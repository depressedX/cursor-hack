define(de[3144], he([1, 0, 6, 3]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$xVc = w);
			function w(E, C, d, m, r) {
				const u = new i.$Zc(),
					a = u.add(new t.$xe()),
					h = u.add(new i.$0c());
				function c(p, o) {
					const f = a.add(t.Event.map(r(o), (b) => ({ instance: p, data: b })));
					h.set(o, f);
				}
				for (const p of E) {
					const o = p.capabilities.get(m);
					o && c(p, o);
				}
				const n = u.add(
					new t.$ye(E, C, d, (p) =>
						t.Event.map(p.capabilities.onDidAddCapability, (o) => ({
							instance: p,
							changeEvent: o,
						})),
					),
				);
				u.add(
					n.event((p) => {
						p.changeEvent.id === m && c(p.instance, p.changeEvent.capability);
					}),
				);
				const g = u.add(
					new t.$ye(E, C, d, (p) => p.capabilities.onDidRemoveCapability),
				);
				return (
					u.add(
						g.event((p) => {
							p.id === m && h.deleteAndDispose(p.capability);
						}),
					),
					{ dispose: () => u.dispose(), event: a.event }
				);
			}
		}),
		