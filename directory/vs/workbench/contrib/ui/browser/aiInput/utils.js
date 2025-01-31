import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
define(de[1777], he([1, 0, 2, 2, 2, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$dbc = e.$cbc = void 0);
			const C = (0, t.template)("<span><span>"),
				d = (0, t.template)("<span> "),
				m = (0, t.template)("<span>");
			e.$cbc = 30;
			const r = (a) => {
				const h = ["file", "code"],
					c = (0, E.createMemo)(() => a.filter((o) => h.includes(o.type))),
					n = (0, E.createMemo)(() => c().map((o) => o.extraString || "")),
					g = (0, E.createMemo)(() => {
						if (!n().length) return "";
						let o = n()[0];
						for (let f = 1; f < n().length; f++)
							for (; !n()[f].startsWith(o); )
								if (((o = o.slice(0, -1)), !o)) return "";
						return o.endsWith("/") ? o : "";
					}),
					p = (0, E.createMemo)(() => {
						const o = new Map();
						return (
							n().forEach((f) => {
								(f.match(/\/[^\/]+\.[^\/]+$|\.[^\/]+$/g) || []).forEach((s) => {
									o.set(s, (o.get(s) || 0) + 1);
								});
							}),
							new Set(
								Array.from(o)
									.filter(([f, b]) => b > 1)
									.map(([f]) => f)
									.sort((f, b) => b.length - f.length),
							)
						);
					});
				return (0, E.createMemo)(() =>
					a.map((o) => {
						if (!h.includes(o.type) || !o.extraString) return o;
						const f = o.extraStringCutoff ?? e.$cbc;
						let b = o.extraString,
							s;
						if (o.type === "code") {
							const [T, P] = b.split(/(\([^)]+\))/).filter(Boolean);
							(b = T.trim()), (s = P?.trim());
						}
						if (b.startsWith(g())) {
							const T = b.slice(g().length),
								P = Array.from(p()).find((A) => T.endsWith(A)),
								k = P ? T.slice(0, -P.length) : T,
								D = g().length + k.length + (P?.length ?? 0) - f;
							let M = g(),
								N = P;
							return {
								...o,
								extraString: (() => {
									const A = C(),
										R = A.firstChild;
									return (
										(0, i.insert)(
											A,
											(0, w.createComponent)(u, { children: M }),
											R,
										),
										(0, i.insert)(R, k),
										(0, i.insert)(
											A,
											N && (0, w.createComponent)(u, { children: N }),
											null,
										),
										(0, i.insert)(
											A,
											s &&
												(() => {
													const O = d(),
														B = O.firstChild;
													return (0, i.insert)(O, s, null), O;
												})(),
											null,
										),
										A
									);
								})(),
							};
						}
						const l = Array.from(p()).find((T) => b.endsWith(T)),
							y = l ? b.slice(0, -l.length) : b,
							v = y.length + (l?.length ?? 0) - f,
							S = y,
							I = l;
						return {
							...o,
							extraString: (() => {
								const T = C(),
									P = T.firstChild;
								return (
									(0, i.insert)(P, S),
									(0, i.insert)(
										T,
										I && (0, w.createComponent)(u, { children: I }),
										null,
									),
									(0, i.insert)(
										T,
										s &&
											(() => {
												const k = d(),
													L = k.firstChild;
												return (0, i.insert)(k, s, null), k;
											})(),
										null,
									),
									T
								);
							})(),
						};
					}),
				)();
			};
			e.$dbc = r;
			const u = (a) =>
				(() => {
					const h = m();
					return (
						h.style.setProperty("color", "var(--vscode-descriptionForeground)"),
						(0, i.insert)(h, () => a.children),
						h
					);
				})();
		})
