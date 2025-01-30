import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cppUtils/diff/character.js';
import './utils.js';
define(de[2958], he([1, 0, 1498, 1228]), function (ce /*require*/,
 e /*exports*/,
 t /*character*/,
 i /*utils*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ied = w),
				(e.$Jed = r),
				(e.$Ked = u);
			function w(o, f, b) {
				if (f.length <= o.length) return !1;
				const s = f.length - o.length;
				let [l, y] = [0, 0];
				for (; l < o.length && y < f.length; )
					if (o[l] === f[y]) l++, y++;
					else {
						const $ = f.slice(y, y + s);
						return !(
							!b.includes(o.slice(0, y)) ||
							b.indexOf(o.slice(0, y)) !== b.indexOf(o.slice(0, y) + $) ||
							f.slice(y + s) !== o.slice(l)
						);
					}
				return !1;
			}
			function E(o, f) {
				return o.getDecorationRange(f.decorationId);
			}
			function C(o, f) {
				return o.map((b) => f.getValueInRange(b));
			}
			function d(o) {
				return (
					o.text.split(`
`).length -
					1 -
					(o.range.endLineNumber - o.range.startLineNumber)
				);
			}
			function m(o) {
				const f = o.event.changes.at(0);
				if (!f) return !1;
				const b = o.proposedSuggestion.diffText,
					s = {
						startColumn:
							o.proposedSuggestion.startingSuggestionRange.startColumn,
						startLineNumber:
							o.proposedSuggestion.startingSuggestionRange.startLineNumber,
						endColumn: f.range.startColumn,
						endLineNumber: f.range.startLineNumber,
					},
					l = o.previousModelValue.getValueInRange(s);
				return !!(
					b.startsWith(l) &&
					b.slice(l.length).startsWith(o.event.changes[0].text)
				);
			}
			function r(o) {
				const f = o.at(0);
				return f
					? o.length === 1 &&
							f.text.startsWith(`
`) &&
							f.text.split(`
`).length === 2 &&
							f.text.trim().length === 0 &&
							f.range.startLineNumber === f.range.endLineNumber &&
							f.range.startColumn === f.range.endColumn
					: !1;
			}
			function u({
				event: o,
				model: f,
				proposedSuggestion: b,
				previousModelValue: s,
			}) {
				let l;
				if (r(o.changes))
					return m({
						event: o,
						model: f,
						proposedSuggestion: b,
						previousModelValue: s,
					});
				if (
					(o.changes.length !== 1
						? (l = (0, i.$Ged)(o.changes, s))
						: (l = o.changes[0]),
					l.range.endLineNumber - l.range.startLineNumber > 0 || d(l) !== 0)
				)
					return !1;
				const $ = E(f, b);
				if ($ === null) return !1;
				const v = $,
					S = {
						startColumn: v.startColumn,
						startLineNumber: v.startLineNumber,
						endColumn: l.range.startColumn,
						endLineNumber: l.range.startLineNumber,
					},
					I = {
						startColumn: l.range.endColumn,
						startLineNumber: l.range.endLineNumber,
						endColumn: v.endColumn,
						endLineNumber: v.endLineNumber,
					},
					T = C([l.range, S, I], s);
				if (T === void 0) return !1;
				const [P, k, L] = T,
					D = L.replace(/\n+$/, "");
				if (!l.text.startsWith(P)) return !1;
				const M = l.text,
					N = b.replaceText,
					A = k + M + D,
					R = a(M, N, k);
				if (R === !0) return !0;
				if (R === !1 || N === A) return !1;
				function O(F) {
					return "`/" + F.replaceAll(" ", "`/").replaceAll("	", ",/");
				}
				const B = (0, t.$Tqb)(O(k + D), O(N), {}),
					U = (0, t.$Tqb)(O(A), O(N), {});
				return h(B, U);
			}
			function a(o, f, b) {
				if (o === "()") {
					const s = f.indexOf(b + "(");
					return s !== -1 && f.indexOf(")", s + (b.length + 1)) !== -1
						? s === f.indexOf(b)
						: !1;
				}
				if (o === "{}") {
					const s = f.indexOf(b + "{");
					return s !== -1 && f.indexOf("}", s + (b.length + 1)) !== -1
						? s === f.indexOf(b)
						: !1;
				}
				if (o === "[]") {
					const s = f.indexOf(b + "[");
					return s !== -1 && f.indexOf("]", s + (b.length + 1)) !== -1
						? s === f.indexOf(b)
						: !1;
				}
				if (o === '""') {
					const s = f.indexOf(b + '"');
					return s !== -1 && f.indexOf('"', s + (b.length + 1)) !== -1
						? s === f.indexOf(b)
						: !1;
				}
				if (o === "''") {
					const s = f.indexOf(b + "'");
					return s !== -1 && f.indexOf("'", s + (b.length + 1)) !== -1
						? s === f.indexOf(b)
						: !1;
				}
			}
			function h(o, f) {
				if (o.length !== f.length) return g(o, f);
				for (let b = 0; b < o.length; b++)
					if (o[b].added) {
						if (!f[b].added || !o[b].value.includes(f[b].value)) return !1;
					} else if (o[b].removed) {
						if (!f[b].removed || o[b].value !== f[b].value) return !1;
					} else if (
						f[b].added ||
						f[b].removed ||
						!f[b].value.includes(o[b].value)
					)
						return !1;
				return !0;
			}
			function c(o, f) {
				return (
					o.added === f.added && o.removed === f.removed && o.value === f.value
				);
			}
			function n(o) {
				return !o.added && !o.removed;
			}
			function g(o, f) {
				if (!(f.length < o.length)) return !1;
				for (let b = 0; b < o.length; b++) {
					if (b >= f.length) return !1;
					if (!c(o[b], f[b]))
						return !n(o[b]) || !n(f[b])
							? !1
							: p(f[b].value, o.slice(b), f.slice(b + 1));
				}
				return !0;
			}
			function p(o, f, b) {
				let s = f.length;
				for (const [y, $] of f.entries()) {
					if ($.removed) return !1;
					if (!o.startsWith($.value)) return !1;
					if (((o = o.slice($.value.length)), o.length === 0)) {
						s = y + 1;
						break;
					}
				}
				if (o.length !== 0) return !1;
				const l = f.slice(s);
				return b.length === l.length;
			}
		}),
		