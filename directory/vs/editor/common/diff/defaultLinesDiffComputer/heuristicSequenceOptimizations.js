import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../core/offsetRange.js';
import './algorithms/diffAlgorithm.js';
define(de[1530], he([1, 0, 24, 289, 656]), function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*offsetRange*/,
 w /*diffAlgorithm*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$hxb = E),
				(e.$ixb = r),
				(e.$jxb = u),
				(e.$kxb = h),
				(e.$lxb = c);
			function E(n, g, p) {
				let o = p;
				return (o = C(n, g, o)), (o = C(n, g, o)), (o = d(n, g, o)), o;
			}
			function C(n, g, p) {
				if (p.length === 0) return p;
				const o = [];
				o.push(p[0]);
				for (let b = 1; b < p.length; b++) {
					const s = o[o.length - 1];
					let l = p[b];
					if (l.seq1Range.isEmpty || l.seq2Range.isEmpty) {
						const y = l.seq1Range.start - s.seq1Range.endExclusive;
						let $;
						for (
							$ = 1;
							$ <= y &&
							!(
								n.getElement(l.seq1Range.start - $) !==
									n.getElement(l.seq1Range.endExclusive - $) ||
								g.getElement(l.seq2Range.start - $) !==
									g.getElement(l.seq2Range.endExclusive - $)
							);
							$++
						);
						if (($--, $ === y)) {
							o[o.length - 1] = new w.$8wb(
								new i.$pL(s.seq1Range.start, l.seq1Range.endExclusive - y),
								new i.$pL(s.seq2Range.start, l.seq2Range.endExclusive - y),
							);
							continue;
						}
						l = l.delta(-$);
					}
					o.push(l);
				}
				const f = [];
				for (let b = 0; b < o.length - 1; b++) {
					const s = o[b + 1];
					let l = o[b];
					if (l.seq1Range.isEmpty || l.seq2Range.isEmpty) {
						const y = s.seq1Range.start - l.seq1Range.endExclusive;
						let $;
						for (
							$ = 0;
							$ < y &&
							!(
								!n.isStronglyEqual(
									l.seq1Range.start + $,
									l.seq1Range.endExclusive + $,
								) ||
								!g.isStronglyEqual(
									l.seq2Range.start + $,
									l.seq2Range.endExclusive + $,
								)
							);
							$++
						);
						if ($ === y) {
							o[b + 1] = new w.$8wb(
								new i.$pL(l.seq1Range.start + y, s.seq1Range.endExclusive),
								new i.$pL(l.seq2Range.start + y, s.seq2Range.endExclusive),
							);
							continue;
						}
						$ > 0 && (l = l.delta($));
					}
					f.push(l);
				}
				return o.length > 0 && f.push(o[o.length - 1]), f;
			}
			function d(n, g, p) {
				if (!n.getBoundaryScore || !g.getBoundaryScore) return p;
				for (let o = 0; o < p.length; o++) {
					const f = o > 0 ? p[o - 1] : void 0,
						b = p[o],
						s = o + 1 < p.length ? p[o + 1] : void 0,
						l = new i.$pL(
							f ? f.seq1Range.endExclusive + 1 : 0,
							s ? s.seq1Range.start - 1 : n.length,
						),
						y = new i.$pL(
							f ? f.seq2Range.endExclusive + 1 : 0,
							s ? s.seq2Range.start - 1 : g.length,
						);
					b.seq1Range.isEmpty
						? (p[o] = m(b, n, g, l, y))
						: b.seq2Range.isEmpty && (p[o] = m(b.swap(), g, n, y, l).swap());
				}
				return p;
			}
			function m(n, g, p, o, f) {
				let s = 1;
				for (
					;
					n.seq1Range.start - s >= o.start &&
					n.seq2Range.start - s >= f.start &&
					p.isStronglyEqual(
						n.seq2Range.start - s,
						n.seq2Range.endExclusive - s,
					) &&
					s < 100;
				)
					s++;
				s--;
				let l = 0;
				for (
					;
					n.seq1Range.start + l < o.endExclusive &&
					n.seq2Range.endExclusive + l < f.endExclusive &&
					p.isStronglyEqual(
						n.seq2Range.start + l,
						n.seq2Range.endExclusive + l,
					) &&
					l < 100;
				)
					l++;
				if (s === 0 && l === 0) return n;
				let y = 0,
					$ = -1;
				for (let v = -s; v <= l; v++) {
					const S = n.seq2Range.start + v,
						I = n.seq2Range.endExclusive + v,
						T = n.seq1Range.start + v,
						P =
							g.getBoundaryScore(T) +
							p.getBoundaryScore(S) +
							p.getBoundaryScore(I);
					P > $ && (($ = P), (y = v));
				}
				return n.delta(y);
			}
			function r(n, g, p) {
				const o = [];
				for (const f of p) {
					const b = o[o.length - 1];
					if (!b) {
						o.push(f);
						continue;
					}
					f.seq1Range.start - b.seq1Range.endExclusive <= 2 ||
					f.seq2Range.start - b.seq2Range.endExclusive <= 2
						? (o[o.length - 1] = new w.$8wb(
								b.seq1Range.join(f.seq1Range),
								b.seq2Range.join(f.seq2Range),
							))
						: o.push(f);
				}
				return o;
			}
			function u(n, g, p) {
				const o = w.$8wb.invert(p, n.length),
					f = [];
				let b = new w.$9wb(0, 0);
				function s(y, $) {
					if (y.offset1 < b.offset1 || y.offset2 < b.offset2) return;
					const v = n.findWordContaining(y.offset1),
						S = g.findWordContaining(y.offset2);
					if (!v || !S) return;
					let I = new w.$8wb(v, S);
					const T = I.intersect($);
					let P = T.seq1Range.length,
						k = T.seq2Range.length;
					for (; o.length > 0; ) {
						const L = o[0];
						if (
							!(
								L.seq1Range.intersects(I.seq1Range) ||
								L.seq2Range.intersects(I.seq2Range)
							)
						)
							break;
						const M = n.findWordContaining(L.seq1Range.start),
							N = g.findWordContaining(L.seq2Range.start),
							A = new w.$8wb(M, N),
							R = A.intersect(L);
						if (
							((P += R.seq1Range.length),
							(k += R.seq2Range.length),
							(I = I.join(A)),
							I.seq1Range.endExclusive >= L.seq1Range.endExclusive)
						)
							o.shift();
						else break;
					}
					P + k < ((I.seq1Range.length + I.seq2Range.length) * 2) / 3 &&
						f.push(I),
						(b = I.getEndExclusives());
				}
				for (; o.length > 0; ) {
					const y = o.shift();
					y.seq1Range.isEmpty ||
						(s(y.getStarts(), y), s(y.getEndExclusives().delta(-1), y));
				}
				return a(p, f);
			}
			function a(n, g) {
				const p = [];
				for (; n.length > 0 || g.length > 0; ) {
					const o = n[0],
						f = g[0];
					let b;
					o && (!f || o.seq1Range.start < f.seq1Range.start)
						? (b = n.shift())
						: (b = g.shift()),
						p.length > 0 &&
						p[p.length - 1].seq1Range.endExclusive >= b.seq1Range.start
							? (p[p.length - 1] = p[p.length - 1].join(b))
							: p.push(b);
				}
				return p;
			}
			function h(n, g, p) {
				let o = p;
				if (o.length === 0) return o;
				let f = 0,
					b;
				do {
					b = !1;
					const s = [o[0]];
					for (let l = 1; l < o.length; l++) {
						let v = function (I, T) {
							const P = new i.$pL($.seq1Range.endExclusive, y.seq1Range.start);
							return (
								n.getText(P).replace(/\s/g, "").length <= 4 &&
								(I.seq1Range.length + I.seq2Range.length > 5 ||
									T.seq1Range.length + T.seq2Range.length > 5)
							);
						};
						const y = o[l],
							$ = s[s.length - 1];
						v($, y)
							? ((b = !0), (s[s.length - 1] = s[s.length - 1].join(y)))
							: s.push(y);
					}
					o = s;
				} while (f++ < 10 && b);
				return o;
			}
			function c(n, g, p) {
				let o = p;
				if (o.length === 0) return o;
				let f = 0,
					b;
				do {
					b = !1;
					const l = [o[0]];
					for (let y = 1; y < o.length; y++) {
						let S = function (T, P) {
							const k = new i.$pL(v.seq1Range.endExclusive, $.seq1Range.start);
							if (n.countLinesIn(k) > 5 || k.length > 500) return !1;
							const D = n.getText(k).trim();
							if (D.length > 20 || D.split(/\r\n|\r|\n/).length > 1) return !1;
							const M = n.countLinesIn(T.seq1Range),
								N = T.seq1Range.length,
								A = g.countLinesIn(T.seq2Range),
								R = T.seq2Range.length,
								O = n.countLinesIn(P.seq1Range),
								B = P.seq1Range.length,
								U = g.countLinesIn(P.seq2Range),
								z = P.seq2Range.length,
								F = 2 * 40 + 50;
							function x(H) {
								return Math.min(H, F);
							}
							return (
								Math.pow(
									Math.pow(x(M * 40 + N), 1.5) + Math.pow(x(A * 40 + R), 1.5),
									1.5,
								) +
									Math.pow(
										Math.pow(x(O * 40 + B), 1.5) + Math.pow(x(U * 40 + z), 1.5),
										1.5,
									) >
								(F ** 1.5) ** 1.5 * 1.3
							);
						};
						const $ = o[y],
							v = l[l.length - 1];
						S(v, $)
							? ((b = !0), (l[l.length - 1] = l[l.length - 1].join($)))
							: l.push($);
					}
					o = l;
				} while (f++ < 10 && b);
				const s = [];
				return (
					(0, t.$Gb)(o, (l, y, $) => {
						let v = y;
						function S(D) {
							return (
								D.length > 0 &&
								D.trim().length <= 3 &&
								y.seq1Range.length + y.seq2Range.length > 100
							);
						}
						const I = n.extendToFullLines(y.seq1Range),
							T = n.getText(new i.$pL(I.start, y.seq1Range.start));
						S(T) && (v = v.deltaStart(-T.length));
						const P = n.getText(
							new i.$pL(y.seq1Range.endExclusive, I.endExclusive),
						);
						S(P) && (v = v.deltaEnd(P.length));
						const k = w.$8wb.fromOffsetPairs(
								l ? l.getEndExclusives() : w.$9wb.zero,
								$ ? $.getStarts() : w.$9wb.max,
							),
							L = v.intersect(k);
						s.length > 0 &&
						L.getStarts().equals(s[s.length - 1].getEndExclusives())
							? (s[s.length - 1] = s[s.length - 1].join(L))
							: s.push(L);
					}),
					s
				);
			}
		})
