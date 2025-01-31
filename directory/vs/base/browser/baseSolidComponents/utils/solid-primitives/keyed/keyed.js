import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../../external/solid/web.js';
define(de[2185], he([1, 0, 13, 2]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*web*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$olb = C),
				(e.Key = d),
				(e.$qlb = m),
				(e.$rlb = r);
			const w = Symbol("fallback");
			function E(u) {
				for (const a of u) a.dispose();
			}
			function C(u, a, h, c = {}) {
				if (i.isServer) {
					const p = u();
					let o = [];
					if (p && p.length)
						for (let f = 0, b = p.length; f < b; f++)
							o.push(
								h(
									() => p[f],
									() => f,
								),
							);
					else c.fallback && (o = [c.fallback()]);
					return () => o;
				}
				const n = new Map();
				return (
					(0, t.onCleanup)(() => E(n.values())),
					() => {
						const p = u() || [];
						return (
							p[t.$TRACK],
							(0, t.untrack)(() => {
								if (!p.length)
									return (
										E(n.values()),
										n.clear(),
										c.fallback
											? [
													(0, t.createRoot)(
														(l) => (n.set(w, { dispose: l }), c.fallback()),
													),
												]
											: []
									);
								const o = new Array(p.length),
									f = n.get(w);
								if (!n.size || f) {
									f?.dispose(), n.delete(w);
									for (let s = 0; s < p.length; s++) {
										const l = p[s],
											y = a(l, s);
										g(o, l, s, y);
									}
									return o;
								}
								const b = new Set(n.keys());
								for (let s = 0; s < p.length; s++) {
									const l = p[s],
										y = a(l, s);
									b.delete(y);
									const $ = n.get(y);
									$
										? ((o[s] = $.mapped), $.setIndex?.(s), $.setItem(() => l))
										: g(o, l, s, y);
								}
								for (const s of b) n.get(s)?.dispose(), n.delete(s);
								return o;
							})
						);
					}
				);
				function g(p, o, f, b) {
					(0, t.createRoot)((s) => {
						const [l, y] = (0, t.createSignal)(o),
							$ = { setItem: y, dispose: s };
						if (h.length > 1) {
							const [v, S] = (0, t.createSignal)(f);
							($.setIndex = S), ($.mapped = h(l, v));
						} else $.mapped = h(l);
						n.set(b, $), (p[f] = $.mapped);
					});
				}
			}
			function d(u) {
				const { by: a } = u;
				return (0, t.createMemo)(
					C(
						() => u.each,
						typeof a == "function" ? a : (h) => h[a],
						u.children,
						"fallback" in u ? { fallback: () => u.fallback } : void 0,
					),
				);
			}
			function m(u) {
				const a = u.children;
				return (0, t.createMemo)(
					(0, t.mapArray)(
						() => u.of && Object.keys(u.of),
						a.length < 3
							? (h) => a(h, () => u.of[h])
							: (h, c) => a(h, () => u.of[h], c),
						"fallback" in u ? { fallback: () => u.fallback } : void 0,
					),
				);
			}
			function r(u) {
				const a =
					typeof u.on == "function" || Array.isArray(u.on) ? u.on : () => u.on;
				return (0, t.createMemo)(
					(0, t.on)(a, (h, c) => {
						const n = u.children;
						return typeof n == "function" && n.length > 0 ? n(h, c) : n;
					}),
				);
			}
		})
