define(de[2229], he([1, 0, 2226, 320]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$crb = E);
			let w = 0;
			function E(d, m, r) {
				const u = [],
					a = w++,
					h = `vscode:onContextMenu${a}`,
					c = (n, g, p) => {
						u[g].click?.(p);
					};
				i.$P.once(h, c),
					i.$P.once(t.$_qb, (n, g) => {
						g === a && (i.$P.removeListener(h, c), r?.());
					}),
					i.$P.send(
						t.$$qb,
						a,
						d.map((n) => C(n, u)),
						h,
						m,
					);
			}
			function C(d, m) {
				const r = {
					id: m.length,
					label: d.label,
					type: d.type,
					accelerator: d.accelerator,
					checked: d.checked,
					enabled: typeof d.enabled == "boolean" ? d.enabled : !0,
					visible: typeof d.visible == "boolean" ? d.visible : !0,
				};
				return (
					m.push(d),
					Array.isArray(d.submenu) &&
						(r.submenu = d.submenu.map((u) => C(u, m))),
					r
				);
			}
		}),
		