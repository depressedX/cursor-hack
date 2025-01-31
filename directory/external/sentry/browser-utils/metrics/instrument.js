import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../debug-build.js';
import './web-vitals/getCLS.js';
import './web-vitals/getFID.js';
import './web-vitals/getINP.js';
import './web-vitals/getLCP.js';
import './web-vitals/lib/observe.js';
import './web-vitals/onTTFB.js';
define(
			de[885],
			he([1, 0, 80, 878, 2098, 2094, 2095, 2096, 576, 2099]),
			function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*debug-build*/,
 w /*getCLS*/,
 E /*getFID*/,
 C /*getINP*/,
 d /*getLCP*/,
 m /*observe*/,
 r /*onTTFB*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.addClsInstrumentationHandler = o),
					(e.addLcpInstrumentationHandler = f),
					(e.addFidInstrumentationHandler = b),
					(e.addTtfbInstrumentationHandler = s),
					(e.addInpInstrumentationHandler = l),
					(e.addPerformanceInstrumentationHandler = y),
					(e.isPerformanceEventTiming = N);
				const u = {},
					a = {};
				let h, c, n, g, p;
				function o(A, R = !1) {
					return k("cls", A, v, h, R);
				}
				function f(A, R = !1) {
					return k("lcp", A, I, n, R);
				}
				function b(A) {
					return k("fid", A, S, c);
				}
				function s(A) {
					return k("ttfb", A, T, g);
				}
				function l(A) {
					return k("inp", A, P, p);
				}
				function y(A, R) {
					return D(A, R), a[A] || (L(A), (a[A] = !0)), M(A, R);
				}
				function $(A, R) {
					const O = u[A];
					if (!(!O || !O.length))
						for (const B of O)
							try {
								B(R);
							} catch (U) {
								i.DEBUG_BUILD &&
									t.logger.error(
										`Error while triggering instrumentation handler.
Type: ${A}
Name: ${(0, t.getFunctionName)(B)}
Error:`,
										U,
									);
							}
				}
				function v() {
					return (0, w.onCLS)(
						(A) => {
							$("cls", { metric: A }), (h = A);
						},
						{ reportAllChanges: !0 },
					);
				}
				function S() {
					return (0, E.onFID)((A) => {
						$("fid", { metric: A }), (c = A);
					});
				}
				function I() {
					return (0, d.onLCP)(
						(A) => {
							$("lcp", { metric: A }), (n = A);
						},
						{ reportAllChanges: !0 },
					);
				}
				function T() {
					return (0, r.onTTFB)((A) => {
						$("ttfb", { metric: A }), (g = A);
					});
				}
				function P() {
					return (0, C.onINP)((A) => {
						$("inp", { metric: A }), (p = A);
					});
				}
				function k(A, R, O, B, U = !1) {
					D(A, R);
					let z;
					return (
						a[A] || ((z = O()), (a[A] = !0)),
						B && R({ metric: B }),
						M(A, R, U ? z : void 0)
					);
				}
				function L(A) {
					const R = {};
					A === "event" && (R.durationThreshold = 0),
						(0, m.observe)(
							A,
							(O) => {
								$(A, { entries: O });
							},
							R,
						);
				}
				function D(A, R) {
					(u[A] = u[A] || []), u[A].push(R);
				}
				function M(A, R, O) {
					return () => {
						O && O();
						const B = u[A];
						if (!B) return;
						const U = B.indexOf(R);
						U !== -1 && B.splice(U, 1);
					};
				}
				function N(A) {
					return "duration" in A;
				}
			},
		)
