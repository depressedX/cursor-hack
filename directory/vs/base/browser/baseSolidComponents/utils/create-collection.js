import '../../../../../require.js';
import '../../../../../exports.js';
import './utils.js';
import './solid-primitives/utils/utils.js';
import '../../../../../external/solid/solid.js';
define(de[2614], he([1, 0, 369, 302, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*utils*/,
 i /*utils*/,
 w /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$zkb = C),
				(e.$Akb = d),
				(e.$Bkb = m);
			const E = new WeakMap();
			function C(r) {
				let u = E.get(r);
				if (u != null) return u;
				u = 0;
				for (const a of r) a.type === "item" && u++;
				return E.set(r, u), u;
			}
			function d(r, u = []) {
				const a = m({
						dataSource: (0, i.$_jb)(r.dataSource),
						getKey: (0, i.$_jb)(r.getKey),
						getTextValue: (0, i.$_jb)(r.getTextValue),
						getDisabled: (0, i.$_jb)(r.getDisabled),
						getSectionChildren: (0, i.$_jb)(r.getSectionChildren),
					}),
					[h, c] = (0, w.createSignal)(r.factory(a));
				return (
					(0, w.createEffect)(
						(0, w.on)(
							[
								() => (0, i.$_jb)(r.dataSource),
								() => (0, i.$_jb)(r.getKey),
								() => (0, i.$_jb)(r.getTextValue),
								() => (0, i.$_jb)(r.getDisabled),
								() => (0, i.$_jb)(r.getSectionChildren),
								() => r.factory,
								...u,
							],
							([n, g, p, o, f, b]) => {
								const s = m({
									dataSource: n,
									getKey: g,
									getTextValue: p,
									getDisabled: o,
									getSectionChildren: f,
								});
								c(() => b(s));
							},
							{ defer: !0 },
						),
					),
					h
				);
			}
			function m(r) {
				let u = r.startIndex ?? 0;
				const a = r.startLevel ?? 0,
					h = [],
					c = (o) => {
						const f = r.getKey ?? "key",
							b = (0, t.$zjb)(f) ? o[f] : f(o);
						return b != null ? String(b) : "";
					},
					n = (o) => {
						const f = r.getTextValue ?? "textValue",
							b = (0, t.$zjb)(f) ? o[f] : f(o);
						return b != null ? String(b) : "";
					},
					g = (o) => {
						const f = r.getDisabled ?? "disabled";
						return ((0, t.$zjb)(f) ? o[f] : f(o)) ?? !1;
					},
					p = (o) =>
						(0, t.$zjb)(r.getSectionChildren)
							? o[r.getSectionChildren]
							: r.getSectionChildren?.(o);
				for (const o of r.dataSource) {
					if ((0, t.$zjb)(o) || (0, t.$xjb)(o)) {
						h.push({
							type: "item",
							rawValue: o,
							key: String(o),
							textValue: String(o),
							disabled: g(o),
							level: a,
							index: u,
						}),
							u++;
						continue;
					}
					if (p(o) != null) {
						h.push({
							type: "section",
							rawValue: o,
							key: "",
							textValue: "",
							disabled: !1,
							level: a,
							index: u,
						}),
							u++;
						const f = p(o) ?? [];
						if (f.length > 0) {
							const b = m({
								dataSource: f,
								getKey: r.getKey,
								getTextValue: r.getTextValue,
								getDisabled: r.getDisabled,
								getSectionChildren: r.getSectionChildren,
								startIndex: u,
								startLevel: a + 1,
							});
							h.push(...b), (u += b.length);
						}
					} else
						h.push({
							type: "item",
							rawValue: o,
							key: c(o),
							textValue: n(o),
							disabled: g(o),
							level: a,
							index: u,
						}),
							u++;
				}
				return h;
			}
		})
