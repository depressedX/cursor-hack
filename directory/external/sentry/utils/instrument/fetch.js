import '../../../../require.js';
import '../../../../exports.js';
import '../is.js';
import '../object.js';
import '../supports.js';
import '../time.js';
import '../worldwide.js';
import './handlers.js';
define(
			de[2087],
			he([1, 0, 430, 528, 1433, 1093, 365, 726]),
			function (ce /*require*/,
 e /*exports*/,
 t /*is*/,
 i /*object*/,
 w /*supports*/,
 E /*time*/,
 C /*worldwide*/,
 d /*handlers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.addFetchInstrumentationHandler = m),
					(e.addFetchEndInstrumentationHandler = r),
					(e.parseFetchArgs = g);
				function m(p, o) {
					const f = "fetch";
					(0, d.addHandler)(f, p),
						(0, d.maybeInstrument)(f, () => u(void 0, o));
				}
				function r(p) {
					const o = "fetch-body-resolved";
					(0, d.addHandler)(o, p), (0, d.maybeInstrument)(o, () => u(h));
				}
				function u(p, o = !1) {
					(o && !(0, w.supportsNativeFetch)()) ||
						(0, i.fill)(C.GLOBAL_OBJ, "fetch", function (f) {
							return function (...b) {
								const { method: s, url: l } = g(b),
									y = {
										args: b,
										fetchData: { method: s, url: l },
										startTimestamp: (0, E.timestampInSeconds)() * 1e3,
									};
								p || (0, d.triggerHandlers)("fetch", { ...y });
								const $ = new Error().stack;
								return f.apply(C.GLOBAL_OBJ, b).then(
									async (v) => (
										p
											? p(v)
											: (0, d.triggerHandlers)("fetch", {
													...y,
													endTimestamp: (0, E.timestampInSeconds)() * 1e3,
													response: v,
												}),
										v
									),
									(v) => {
										throw (
											((0, d.triggerHandlers)("fetch", {
												...y,
												endTimestamp: (0, E.timestampInSeconds)() * 1e3,
												error: v,
											}),
											(0, t.isError)(v) &&
												v.stack === void 0 &&
												((v.stack = $),
												(0, i.addNonEnumerableProperty)(v, "framesToPop", 1)),
											v)
										);
									},
								);
							};
						});
				}
				async function a(p, o) {
					if (p && p.body) {
						const f = p.body,
							b = f.getReader(),
							s = setTimeout(() => {
								f.cancel().then(null, () => {});
							}, 90 * 1e3);
						let l = !0;
						for (; l; ) {
							let y;
							try {
								y = setTimeout(() => {
									f.cancel().then(null, () => {});
								}, 5e3);
								const { done: $ } = await b.read();
								clearTimeout(y), $ && (o(), (l = !1));
							} catch {
								l = !1;
							} finally {
								clearTimeout(y);
							}
						}
						clearTimeout(s), b.releaseLock(), f.cancel().then(null, () => {});
					}
				}
				function h(p) {
					let o;
					try {
						o = p.clone();
					} catch {
						return;
					}
					a(o, () => {
						(0, d.triggerHandlers)("fetch-body-resolved", {
							endTimestamp: (0, E.timestampInSeconds)() * 1e3,
							response: p,
						});
					});
				}
				function c(p, o) {
					return !!p && typeof p == "object" && !!p[o];
				}
				function n(p) {
					return typeof p == "string"
						? p
						: p
							? c(p, "url")
								? p.url
								: p.toString
									? p.toString()
									: ""
							: "";
				}
				function g(p) {
					if (p.length === 0) return { method: "GET", url: "" };
					if (p.length === 2) {
						const [f, b] = p;
						return {
							url: n(f),
							method: c(b, "method") ? String(b.method).toUpperCase() : "GET",
						};
					}
					const o = p[0];
					return {
						url: n(o),
						method: c(o, "method") ? String(o.method).toUpperCase() : "GET",
					};
				}
			},
		)
