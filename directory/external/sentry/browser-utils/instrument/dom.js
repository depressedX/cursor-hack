import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../types.js';
define(de[2091], he([1, 0, 80, 366]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.addClickKeypressInstrumentationHandler = m),
				(e.instrumentDOM = r);
			const w = 1e3;
			let E, C, d;
			function m(n) {
				const g = "dom";
				(0, t.addHandler)(g, n), (0, t.maybeInstrument)(g, r);
			}
			function r() {
				if (!i.WINDOW.document) return;
				const n = t.triggerHandlers.bind(null, "dom"),
					g = h(n, !0);
				i.WINDOW.document.addEventListener("click", g, !1),
					i.WINDOW.document.addEventListener("keypress", g, !1),
					["EventTarget", "Node"].forEach((p) => {
						const o = i.WINDOW[p] && i.WINDOW[p].prototype;
						!o ||
							!o.hasOwnProperty ||
							!o.hasOwnProperty("addEventListener") ||
							((0, t.fill)(o, "addEventListener", function (f) {
								return function (b, s, l) {
									if (b === "click" || b == "keypress")
										try {
											const y = this,
												$ = (y.__sentry_instrumentation_handlers__ =
													y.__sentry_instrumentation_handlers__ || {}),
												v = ($[b] = $[b] || { refCount: 0 });
											if (!v.handler) {
												const S = h(n);
												(v.handler = S), f.call(this, b, S, l);
											}
											v.refCount++;
										} catch {}
									return f.call(this, b, s, l);
								};
							}),
							(0, t.fill)(o, "removeEventListener", function (f) {
								return function (b, s, l) {
									if (b === "click" || b == "keypress")
										try {
											const y = this,
												$ = y.__sentry_instrumentation_handlers__ || {},
												v = $[b];
											v &&
												(v.refCount--,
												v.refCount <= 0 &&
													(f.call(this, b, v.handler, l),
													(v.handler = void 0),
													delete $[b]),
												Object.keys($).length === 0 &&
													delete y.__sentry_instrumentation_handlers__);
										} catch {}
									return f.call(this, b, s, l);
								};
							}));
					});
			}
			function u(n) {
				if (n.type !== C) return !1;
				try {
					if (!n.target || n.target._sentryId !== d) return !1;
				} catch {}
				return !0;
			}
			function a(n, g) {
				return n !== "keypress"
					? !1
					: !g || !g.tagName
						? !0
						: !(
								g.tagName === "INPUT" ||
								g.tagName === "TEXTAREA" ||
								g.isContentEditable
							);
			}
			function h(n, g = !1) {
				return (p) => {
					if (!p || p._sentryCaptured) return;
					const o = c(p);
					if (a(p.type, o)) return;
					(0, t.addNonEnumerableProperty)(p, "_sentryCaptured", !0),
						o &&
							!o._sentryId &&
							(0, t.addNonEnumerableProperty)(o, "_sentryId", (0, t.uuid4)());
					const f = p.type === "keypress" ? "input" : p.type;
					u(p) ||
						(n({ event: p, name: f, global: g }),
						(C = p.type),
						(d = o ? o._sentryId : void 0)),
						clearTimeout(E),
						(E = i.WINDOW.setTimeout(() => {
							(d = void 0), (C = void 0);
						}, w));
				};
			}
			function c(n) {
				try {
					return n.target;
				} catch {
					return null;
				}
			}
		}),
		