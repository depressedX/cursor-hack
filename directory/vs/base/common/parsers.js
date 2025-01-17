import '../../../require.js';
import '../../../exports.js';
define(de[1500], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$23 = e.$13 = e.ValidationState = void 0);
			var t;
			(function (E) {
				(E[(E.OK = 0)] = "OK"),
					(E[(E.Info = 1)] = "Info"),
					(E[(E.Warning = 2)] = "Warning"),
					(E[(E.Error = 3)] = "Error"),
					(E[(E.Fatal = 4)] = "Fatal");
			})(t || (e.ValidationState = t = {}));
			class i {
				constructor() {
					this.a = t.OK;
				}
				get state() {
					return this.a;
				}
				set state(C) {
					C > this.a && (this.a = C);
				}
				isOK() {
					return this.a === t.OK;
				}
				isFatal() {
					return this.a === t.Fatal;
				}
			}
			e.$13 = i;
			class w {
				constructor(C) {
					this.a = C;
				}
				reset() {
					this.a.status.state = t.OK;
				}
				get problemReporter() {
					return this.a;
				}
				info(C) {
					this.a.info(C);
				}
				warn(C) {
					this.a.warn(C);
				}
				error(C) {
					this.a.error(C);
				}
				fatal(C) {
					this.a.fatal(C);
				}
			}
			e.$23 = w;
		}),
		(function () {
			function ce(w) {
				const E = [];
				typeof w == "number" && E.push("code/timeOrigin", w);
				function C(m) {
					E.push(m, Date.now());
				}
				function d() {
					const m = [];
					for (let r = 0; r < E.length; r += 2)
						m.push({ name: E[r], startTime: E[r + 1] });
					return m;
				}
				return { mark: C, getMarks: d };
			}
			function e() {
				if (
					typeof performance == "object" &&
					typeof performance.mark == "function" &&
					!performance.nodeTiming
				)
					return typeof performance.timeOrigin != "number" &&
						!performance.timing
						? ce()
						: {
								mark(w) {
									performance.mark(w);
								},
								getMarks() {
									let w = performance.timeOrigin;
									typeof w != "number" &&
										(w =
											performance.timing.navigationStart ||
											performance.timing.redirectStart ||
											performance.timing.fetchStart);
									const E = [
										{ name: "code/timeOrigin", startTime: Math.round(w) },
									];
									for (const C of performance.getEntriesByType("mark"))
										E.push({
											name: C.name,
											startTime: Math.round(w + C.startTime),
										});
									return E;
								},
							};
				if (typeof process == "object") {
					const w = performance?.timeOrigin;
					return ce(w);
				} else
					return console.trace("perf-util loaded in UNKNOWN environment"), ce();
			}
			function t(w) {
				return (
					w.MonacoPerformanceMarks || (w.MonacoPerformanceMarks = e()),
					w.MonacoPerformanceMarks
				);
			}
			var i;
			typeof global == "object"
				? (i = global)
				: typeof self == "object"
					? (i = self)
					: (i = {}),
				typeof define == "function"
					? define("vs/base/common/performance", [], function () {
							return t(i);
						})
					: typeof module == "object" && typeof module.exports == "object"
						? (module.exports = t(i))
						: (console.trace(
								"perf-util defined in UNKNOWN context (neither requirejs or commonjs)",
							),
							(i.perf = t(i)));
		})(),
		