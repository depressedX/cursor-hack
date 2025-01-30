import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
import '../core/characterClassifier.js';
define(de[1535], he([1, 0, 120, 654]), function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*characterClassifier*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$1wb = e.$Zwb = e.State = void 0),
				(e.$2wb = c);
			var w;
			(function (n) {
				(n[(n.Invalid = 0)] = "Invalid"),
					(n[(n.Start = 1)] = "Start"),
					(n[(n.H = 2)] = "H"),
					(n[(n.HT = 3)] = "HT"),
					(n[(n.HTT = 4)] = "HTT"),
					(n[(n.HTTP = 5)] = "HTTP"),
					(n[(n.F = 6)] = "F"),
					(n[(n.FI = 7)] = "FI"),
					(n[(n.FIL = 8)] = "FIL"),
					(n[(n.BeforeColon = 9)] = "BeforeColon"),
					(n[(n.AfterColon = 10)] = "AfterColon"),
					(n[(n.AlmostThere = 11)] = "AlmostThere"),
					(n[(n.End = 12)] = "End"),
					(n[(n.Accept = 13)] = "Accept"),
					(n[(n.LastKnownState = 14)] = "LastKnownState");
			})(w || (e.State = w = {}));
			class E {
				constructor(g, p, o) {
					const f = new Uint8Array(g * p);
					for (let b = 0, s = g * p; b < s; b++) f[b] = o;
					(this.a = f), (this.rows = g), (this.cols = p);
				}
				get(g, p) {
					return this.a[g * this.cols + p];
				}
				set(g, p, o) {
					this.a[g * this.cols + p] = o;
				}
			}
			class C {
				constructor(g) {
					let p = 0,
						o = w.Invalid;
					for (let b = 0, s = g.length; b < s; b++) {
						const [l, y, $] = g[b];
						y > p && (p = y), l > o && (o = l), $ > o && (o = $);
					}
					p++, o++;
					const f = new E(o, p, w.Invalid);
					for (let b = 0, s = g.length; b < s; b++) {
						const [l, y, $] = g[b];
						f.set(l, y, $);
					}
					(this.a = f), (this.b = p);
				}
				nextState(g, p) {
					return p < 0 || p >= this.b ? w.Invalid : this.a.get(g, p);
				}
			}
			e.$Zwb = C;
			let d = null;
			function m() {
				return (
					d === null &&
						(d = new C([
							[w.Start, t.CharCode.h, w.H],
							[w.Start, t.CharCode.H, w.H],
							[w.Start, t.CharCode.f, w.F],
							[w.Start, t.CharCode.F, w.F],
							[w.H, t.CharCode.t, w.HT],
							[w.H, t.CharCode.T, w.HT],
							[w.HT, t.CharCode.t, w.HTT],
							[w.HT, t.CharCode.T, w.HTT],
							[w.HTT, t.CharCode.p, w.HTTP],
							[w.HTT, t.CharCode.P, w.HTTP],
							[w.HTTP, t.CharCode.s, w.BeforeColon],
							[w.HTTP, t.CharCode.S, w.BeforeColon],
							[w.HTTP, t.CharCode.Colon, w.AfterColon],
							[w.F, t.CharCode.i, w.FI],
							[w.F, t.CharCode.I, w.FI],
							[w.FI, t.CharCode.l, w.FIL],
							[w.FI, t.CharCode.L, w.FIL],
							[w.FIL, t.CharCode.e, w.BeforeColon],
							[w.FIL, t.CharCode.E, w.BeforeColon],
							[w.BeforeColon, t.CharCode.Colon, w.AfterColon],
							[w.AfterColon, t.CharCode.Slash, w.AlmostThere],
							[w.AlmostThere, t.CharCode.Slash, w.End],
						])),
					d
				);
			}
			var r;
			(function (n) {
				(n[(n.None = 0)] = "None"),
					(n[(n.ForceTermination = 1)] = "ForceTermination"),
					(n[(n.CannotEndIn = 2)] = "CannotEndIn");
			})(r || (r = {}));
			let u = null;
			function a() {
				if (u === null) {
					u = new i.$NL(r.None);
					const n = ` 	<>'"\u3001\u3002\uFF61\uFF64\uFF0C\uFF0E\uFF1A\uFF1B\u2018\u3008\u300C\u300E\u3014\uFF08\uFF3B\uFF5B\uFF62\uFF63\uFF5D\uFF3D\uFF09\u3015\u300F\u300D\u3009\u2019\uFF40\uFF5E\u2026`;
					for (let p = 0; p < n.length; p++)
						u.set(n.charCodeAt(p), r.ForceTermination);
					const g = ".,;:";
					for (let p = 0; p < g.length; p++)
						u.set(g.charCodeAt(p), r.CannotEndIn);
				}
				return u;
			}
			class h {
				static a(g, p, o, f, b) {
					let s = b - 1;
					do {
						const l = p.charCodeAt(s);
						if (g.get(l) !== r.CannotEndIn) break;
						s--;
					} while (s > f);
					if (f > 0) {
						const l = p.charCodeAt(f - 1),
							y = p.charCodeAt(s);
						((l === t.CharCode.OpenParen && y === t.CharCode.CloseParen) ||
							(l === t.CharCode.OpenSquareBracket &&
								y === t.CharCode.CloseSquareBracket) ||
							(l === t.CharCode.OpenCurlyBrace &&
								y === t.CharCode.CloseCurlyBrace)) &&
							s--;
					}
					return {
						range: {
							startLineNumber: o,
							startColumn: f + 1,
							endLineNumber: o,
							endColumn: s + 2,
						},
						url: p.substring(f, s + 1),
					};
				}
				static computeLinks(g, p = m()) {
					const o = a(),
						f = [];
					for (let b = 1, s = g.getLineCount(); b <= s; b++) {
						const l = g.getLineContent(b),
							y = l.length;
						let $ = 0,
							v = 0,
							S = 0,
							I = w.Start,
							T = !1,
							P = !1,
							k = !1,
							L = !1;
						for (; $ < y; ) {
							let D = !1;
							const M = l.charCodeAt($);
							if (I === w.Accept) {
								let N;
								switch (M) {
									case t.CharCode.OpenParen:
										(T = !0), (N = r.None);
										break;
									case t.CharCode.CloseParen:
										N = T ? r.None : r.ForceTermination;
										break;
									case t.CharCode.OpenSquareBracket:
										(k = !0), (P = !0), (N = r.None);
										break;
									case t.CharCode.CloseSquareBracket:
										(k = !1), (N = P ? r.None : r.ForceTermination);
										break;
									case t.CharCode.OpenCurlyBrace:
										(L = !0), (N = r.None);
										break;
									case t.CharCode.CloseCurlyBrace:
										N = L ? r.None : r.ForceTermination;
										break;
									case t.CharCode.SingleQuote:
									case t.CharCode.DoubleQuote:
									case t.CharCode.BackTick:
										S === M
											? (N = r.ForceTermination)
											: S === t.CharCode.SingleQuote ||
													S === t.CharCode.DoubleQuote ||
													S === t.CharCode.BackTick
												? (N = r.None)
												: (N = r.ForceTermination);
										break;
									case t.CharCode.Asterisk:
										N = S === t.CharCode.Asterisk ? r.ForceTermination : r.None;
										break;
									case t.CharCode.Pipe:
										N = S === t.CharCode.Pipe ? r.ForceTermination : r.None;
										break;
									case t.CharCode.Space:
										N = k ? r.None : r.ForceTermination;
										break;
									default:
										N = o.get(M);
								}
								N === r.ForceTermination &&
									(f.push(h.a(o, l, b, v, $)), (D = !0));
							} else if (I === w.End) {
								let N;
								M === t.CharCode.OpenSquareBracket
									? ((P = !0), (N = r.None))
									: (N = o.get(M)),
									N === r.ForceTermination ? (D = !0) : (I = w.Accept);
							} else (I = p.nextState(I, M)), I === w.Invalid && (D = !0);
							D &&
								((I = w.Start),
								(T = !1),
								(P = !1),
								(L = !1),
								(v = $ + 1),
								(S = M)),
								$++;
						}
						I === w.Accept && f.push(h.a(o, l, b, v, y));
					}
					return f;
				}
			}
			e.$1wb = h;
			function c(n) {
				return !n ||
					typeof n.getLineCount != "function" ||
					typeof n.getLineContent != "function"
					? []
					: h.computeLinks(n);
			}
		}),
		