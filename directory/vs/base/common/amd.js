import '../../../require.js';
import '../../../exports.js';
define(de[455], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$X = e.LoaderEventType = e.$W = e.$V = void 0),
				(e.$V = !1),
				(e.$W = !0);
			var t;
			(function (w) {
				(w[(w.LoaderAvailable = 1)] = "LoaderAvailable"),
					(w[(w.BeginLoadingScript = 10)] = "BeginLoadingScript"),
					(w[(w.EndLoadingScriptOK = 11)] = "EndLoadingScriptOK"),
					(w[(w.EndLoadingScriptError = 12)] = "EndLoadingScriptError"),
					(w[(w.BeginInvokeFactory = 21)] = "BeginInvokeFactory"),
					(w[(w.EndInvokeFactory = 22)] = "EndInvokeFactory"),
					(w[(w.NodeBeginEvaluatingScript = 31)] = "NodeBeginEvaluatingScript"),
					(w[(w.NodeEndEvaluatingScript = 32)] = "NodeEndEvaluatingScript"),
					(w[(w.NodeBeginNativeRequire = 33)] = "NodeBeginNativeRequire"),
					(w[(w.NodeEndNativeRequire = 34)] = "NodeEndNativeRequire"),
					(w[(w.CachedDataFound = 60)] = "CachedDataFound"),
					(w[(w.CachedDataMissed = 61)] = "CachedDataMissed"),
					(w[(w.CachedDataRejected = 62)] = "CachedDataRejected"),
					(w[(w.CachedDataCreated = 63)] = "CachedDataCreated");
			})(t || (e.LoaderEventType = t = {}));
			class i {
				static get() {
					const E = new Map(),
						C = new Map(),
						d = new Map(),
						m = new Map();
					function r(n, g) {
						n.has(g.detail) || n.set(g.detail, -g.timestamp);
					}
					function u(n, g) {
						const p = n.get(g.detail);
						p && (p >= 0 || n.set(g.detail, p + g.timestamp));
					}
					let a = [];
					typeof ce == "function" &&
						typeof ce.getStats == "function" &&
						(a = ce
							.getStats()
							.slice(0)
							.sort((n, g) => n.timestamp - g.timestamp));
					for (const n of a)
						switch (n.type) {
							case t.BeginLoadingScript:
								r(E, n);
								break;
							case t.EndLoadingScriptOK:
							case t.EndLoadingScriptError:
								u(E, n);
								break;
							case t.BeginInvokeFactory:
								r(C, n);
								break;
							case t.EndInvokeFactory:
								u(C, n);
								break;
							case t.NodeBeginNativeRequire:
								r(d, n);
								break;
							case t.NodeEndNativeRequire:
								u(d, n);
								break;
							case t.NodeBeginEvaluatingScript:
								r(m, n);
								break;
							case t.NodeEndEvaluatingScript:
								u(m, n);
								break;
						}
					let h = 0;
					d.forEach((n) => (h += n));
					function c(n) {
						const g = [];
						return n.forEach((p, o) => g.push([o, p])), g;
					}
					return {
						amdLoad: c(E),
						amdInvoke: c(C),
						nodeRequire: c(d),
						nodeEval: c(m),
						nodeRequireTotal: h,
					};
				}
				static toMarkdownTable(E, C) {
					let d = "";
					const m = [];
					return (
						E.forEach((r, u) => {
							m[u] = r.length;
						}),
						C.forEach((r) => {
							r.forEach((u, a) => {
								typeof u > "u" && (u = r[a] = "-");
								const h = u.toString().length;
								m[a] = Math.max(h, m[a]);
							});
						}),
						E.forEach((r, u) => {
							d += `| ${r + " ".repeat(m[u] - r.toString().length)} `;
						}),
						(d += `|
`),
						E.forEach((r, u) => {
							d += `| ${"-".repeat(m[u])} `;
						}),
						(d += `|
`),
						C.forEach((r) => {
							r.forEach((u, a) => {
								typeof u < "u" &&
									(d += `| ${u + " ".repeat(m[a] - u.toString().length)} `);
							}),
								(d += `|
`);
						}),
						d
					);
				}
			}
			e.$X = i;
		}),
		