import '../../../../../require.js';
import '../../../../../exports.js';
define(de[2959], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$2ed = C),
				(e.$3ed = d),
				(e.$4ed = r),
				(e.$5ed = u),
				(e.$6ed = a);
			function t(c, n) {
				let g = 0;
				for (; g < c.length && g < n.length && c[g] === n[g]; ) g++;
				return g;
			}
			const i = 6,
				w = 0.2;
			var E;
			(function (c) {
				(c.INIT = "init"),
					(c.NON_STREAMING = "non_streaming"),
					(c.MAYBE_LINE_MATCH = "maybe_line_match"),
					(c.DONE = "done");
			})(E || (E = {}));
			async function C(c, n, g) {
				let p = "",
					o = "",
					f = E.INIT;
				for (;;) {
					const b = await c.next();
					if (b.done) break;
					if (b.value.case !== "text")
						throw new Error(
							"nextValue.value is not a string in chunkedStreaming",
						);
					const s = b.value.text;
					if (((p += s), f !== E.NON_STREAMING))
						for (const l of s) {
							o += l;
							const y = h(f, n, g, o);
							if (((f = y.state), y.state === E.DONE))
								return [y.diffText, d(c).then(($) => p + $)];
							if (y.state === E.NON_STREAMING) break;
						}
				}
				return [p, void 0];
			}
			async function d(c) {
				let n = "";
				for (;;) {
					const g = await c.next();
					if (g.done) break;
					if (g.value.case !== "text")
						throw new Error(
							"nextValue.value is not a string in vanillaHandleStream",
						);
					n += g.value.text;
				}
				return n;
			}
			function m() {
				let c;
				const n = new Promise((g) => {
					c = g;
				});
				if (c === void 0) throw new Error("unreachable");
				return { resolve: c, promise: n };
			}
			function r(c) {
				const { resolve: n, promise: g } = m(),
					{ resolve: p, promise: o } = m();
				return (
					(async () => {
						let f = "";
						for (;;) {
							const b = await c.next();
							if (b.done) break;
							if (b.value.case === "text") f += b.value.text;
							else if (b.value.case === "fusedCursorPrediction")
								p(b.value.prediction);
							else if (b.value.case === "doneEdit") n(f);
							else if (b.value.case !== "rangeToReplaceOneIndexed") {
								const s = b.value;
							}
						}
						n(f), p(null);
					})(),
					{ text: g, fusedCursorPrediction: o }
				);
			}
			function u(c, n) {
				let g = 0,
					p = 0;
				for (; g < c.length && p < n.length; ) c[g] === n[p] && g++, p++;
				return g === c.length;
			}
			function a(c, n, g) {
				if (!n.startsWith(c)) return !1;
				const p = n.slice(c.length);
				return p.length > 6 && p === g;
			}
			function h(c, n, g, p) {
				switch (c) {
					case E.INIT: {
						if (n.startsWith(p)) return { state: E.INIT };
						if (
							p.split(`
`).length <= g
						)
							return { state: E.NON_STREAMING };
						c = E.MAYBE_LINE_MATCH;
					}
					case E.MAYBE_LINE_MATCH:
						if (
							p.endsWith(`
`)
						) {
							const o = p.split(`
`),
								f = n.split(`
`),
								b = o.length - 2,
								s = o[b].trim(),
								l = f[b].trim(),
								y = f
									.slice(b + 1)
									.map((S) => S.trim())
									.filter((S) => S !== "")[0];
							if (y !== void 0 && y === s) return { state: E.MAYBE_LINE_MATCH };
							if (!u(l, s)) return { state: E.NON_STREAMING };
							if (a(l, s, y)) return { state: E.NON_STREAMING };
							if (s.length - l.length < i) return { state: E.NON_STREAMING };
							const v = t(l, s);
							return l.length <= 2 || v / Math.min(l.length, s.length) > w
								? {
										state: E.DONE,
										diffText: [...o.slice(0, b + 1), ...f.slice(b + 1)].join(`
`),
									}
								: { state: E.NON_STREAMING };
						} else return { state: E.MAYBE_LINE_MATCH };
					case E.NON_STREAMING:
						return { state: E.NON_STREAMING };
					case E.DONE:
						throw new Error("Unexpected state: DONE");
				}
			}
		}),
		