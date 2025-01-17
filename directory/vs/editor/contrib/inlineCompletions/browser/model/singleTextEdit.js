import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/diff/diff.js';
import '../../../../../base/common/strings.js';
import '../../../../common/core/range.js';
import '../../../../common/core/textLength.js';
import '../../../../common/core/textEdit.js';
import '../../../../common/model.js';
import './ghostText.js';
define(
			de[1196],
			he([1, 0, 745, 37, 17, 458, 490, 64, 917]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LCb = r),
					(e.$MCb = u),
					(e.$NCb = a);
				function r(o, f, b) {
					const s = b ? o.range.intersectRanges(b) : o.range;
					if (!s) return o;
					const l = f.getValueInRange(s, d.EndOfLinePreference.LF),
						y = (0, i.$Of)(l, o.text),
						$ = E.$tL
							.ofText(l.substring(0, y))
							.addToPosition(o.range.getStartPosition()),
						v = o.text.substring(y),
						S = w.$iL.fromPositions($, o.range.getEndPosition());
					return new C.$wL(S, v);
				}
				function u(o, f) {
					return o.text.startsWith(f.text) && h(o.range, f.range);
				}
				function a(o, f, b, s, l = 0) {
					let y = r(o, f);
					if (y.range.endLineNumber !== y.range.startLineNumber) return;
					const $ = f.getLineContent(y.range.startLineNumber),
						v = (0, i.$Cf)($).length;
					if (y.range.startColumn - 1 <= v) {
						const D = (0, i.$Cf)(y.text).length,
							M = $.substring(y.range.startColumn - 1, v),
							[N, A] = [y.range.getStartPosition(), y.range.getEndPosition()],
							R = N.column + M.length <= A.column ? N.delta(0, M.length) : A,
							O = w.$iL.fromPositions(R, A),
							B = y.text.startsWith(M)
								? y.text.substring(M.length)
								: y.text.substring(D);
						y = new C.$wL(O, B);
					}
					const I = f.getValueInRange(y.range),
						T = n(I, y.text);
					if (!T) return;
					const P = y.range.startLineNumber,
						k = new Array();
					if (b === "prefix") {
						const D = T.filter((M) => M.originalLength === 0);
						if (
							D.length > 1 ||
							(D.length === 1 && D[0].originalStart !== I.length)
						)
							return;
					}
					const L = y.text.length - l;
					for (const D of T) {
						const M = y.range.startColumn + D.originalStart + D.originalLength;
						if (
							(b === "subwordSmart" &&
								s &&
								s.lineNumber === y.range.startLineNumber &&
								M < s.column) ||
							D.originalLength > 0
						)
							return;
						if (D.modifiedLength === 0) continue;
						const N = D.modifiedStart + D.modifiedLength,
							A = Math.max(D.modifiedStart, Math.min(N, L)),
							R = y.text.substring(D.modifiedStart, A),
							O = y.text.substring(A, Math.max(D.modifiedStart, N));
						R.length > 0 && k.push(new m.$CCb(M, R, !1)),
							O.length > 0 && k.push(new m.$CCb(M, O, !0));
					}
					return new m.$BCb(P, k);
				}
				function h(o, f) {
					return (
						f.getStartPosition().equals(o.getStartPosition()) &&
						f.getEndPosition().isBeforeOrEqual(o.getEndPosition())
					);
				}
				let c;
				function n(o, f) {
					if (c?.originalValue === o && c?.newValue === f) return c?.changes;
					{
						const b = performance.now();
						let s = p(o, f, !0);
						if (s) {
							const l = g(s);
							if (l > 0) {
								const y = p(o, f, !1);
								y && g(y) < l && (s = y);
							}
						}
						return (c = { originalValue: o, newValue: f, changes: s }), s;
					}
				}
				function g(o) {
					let f = 0;
					for (const b of o) f += b.originalLength;
					return f;
				}
				function p(o, f, b) {
					if (o.length > 5e3 || f.length > 5e3) return;
					function s(I) {
						let T = 0;
						for (let P = 0, k = I.length; P < k; P++) {
							const L = I.charCodeAt(P);
							L > T && (T = L);
						}
						return T;
					}
					const l = Math.max(s(o), s(f));
					function y(I) {
						if (I < 0) throw new Error("unexpected");
						return l + I + 1;
					}
					function $(I) {
						let T = 0,
							P = 0;
						const k = new Int32Array(I.length);
						for (let L = 0, D = I.length; L < D; L++)
							if (b && I[L] === "(") {
								const M = P * 100 + T;
								(k[L] = y(2 * M)), T++;
							} else if (b && I[L] === ")") {
								T = Math.max(T - 1, 0);
								const M = P * 100 + T;
								(k[L] = y(2 * M + 1)), T === 0 && P++;
							} else k[L] = I.charCodeAt(L);
						return k;
					}
					const v = $(o),
						S = $(f);
					return new t.$oL(
						{ getElements: () => v },
						{ getElements: () => S },
					).ComputeDiff(!1).changes;
				}
			},
		),
		