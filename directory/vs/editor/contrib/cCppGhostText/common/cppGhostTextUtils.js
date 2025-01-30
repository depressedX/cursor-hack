import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cppUtils/diff/character.js';
import '../../../../base/common/cppUtils/diff/word.js';
import '../../../common/viewLayout/lineDecorations.js';
import '../../../common/viewModel.js';
define(
			de[1153],
			he([1, 0, 1498, 1130, 533, 290]),
			function (ce /*require*/,
 e /*exports*/,
 t /*character*/,
 i /*word*/,
 w /*lineDecorations*/,
 E /*viewModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tlc = C),
					(e.$ulc = m),
					(e.$vlc = r),
					(e.$wlc = u),
					(e.$xlc = a),
					(e.$ylc = h);
				function C(o) {
					let f = "",
						b = "",
						s = "",
						l = 0;
					const y = [],
						$ = [],
						v = (S) => {
							let I = s.split(`
`),
								T =
									f.split(`
`).length - 1;
							if (
								S !== "" &&
								!S.startsWith(`
`) &&
								I.length > 0
							) {
								const P = I.pop();
								let k;
								I.length > 0
									? (k = 1)
									: (k =
											(f
												.split(`
`)
												.at(-1)?.length ?? 0) + 1),
									P !== void 0 &&
										P !== "" &&
										y.push({ lineNumber: T, column: k, value: P }),
									(T -= 1);
							} else {
								const P = I.shift();
								if (P !== void 0 && P !== "") {
									const L =
										f
											.split(`
`)
											.at(-1)?.length ?? 0;
									y.push({ lineNumber: T, column: L + 1, value: P });
								}
							}
							if (I.length > 0)
								for (const P of I)
									$.push({
										beforeLineNumber: T,
										indexInMultilineAddition: l++,
										value: P,
									});
						};
					for (const S of o)
						S.added
							? (s += S.value)
							: (s !== "" && (v(S.value), (b += s), (s = "")),
								(f += S.value),
								(b += S.value));
					return (
						s !== "" && v(""),
						{ inlineModifications: y, fullLineModifications: $ }
					);
				}
				function d(o, f) {
					return !!(
						o.fullLineModifications.some(
							(s) => s.beforeLineNumber < f.lineNumber,
						) ||
						o.inlineModifications
							.filter((s) => s.lineNumber === f.lineNumber)
							.some((s) => s.startColumn < f.column)
					);
				}
				function m(o, f, b, s, l) {
					const { inlineModifications: y, fullLineModifications: $ } = C(o),
						v = [];
					for (const I of $)
						v.push({
							beforeLineNumber: I.beforeLineNumber + f,
							indexInMultilineAddition: I.indexInMultilineAddition,
							content: I.value,
							decorations: [
								new w.$Fub(
									1,
									I.value.length + 1,
									"ghost-text",
									E.InlineDecorationType.Regular,
								),
							],
						});
					const S = y.map((I) => ({
						lineNumber: I.lineNumber + f,
						startColumn: I.column,
						newValue: I.value,
						oldValue: "",
					}));
					return d({ inlineModifications: S, fullLineModifications: v }, b)
						? { success: !1, inlineModifications: S, fullLineModifications: v }
						: { success: !0, inlineModifications: S, fullLineModifications: v };
				}
				function r(o, f, b) {
					const s = o.split(b),
						l = f.split(b);
					let y = 0;
					for (; y < s.length && y < l.length && s[y] === l[y]; ) y++;
					let $ = 0;
					for (
						;
						$ < s.length - y &&
						$ < l.length - y &&
						s[s.length - 1 - $] === l[l.length - 1 - $];
					)
						$++;
					const v = s.slice(y, s.length - $).join(b),
						S = l.slice(y, l.length - $).join(b);
					return {
						trimmedOldText: v,
						trimmedNewText: S,
						startIndex: y,
						endIndex: $,
						removedStartLines: s.slice(0, y),
						removedEndLines: s.slice(s.length - $),
					};
				}
				function u(o, f, b) {
					const s = h(o, f, b),
						l = [],
						y = [];
					let $ = [];
					const v = () => {
						if ($.length > 0) {
							const S = $.filter((k) => k.removed)
									.map((k) => k.value)
									.join(""),
								I = $.filter((k) => k.added)
									.map((k) => k.value)
									.join(""),
								T = (0, i.$pqb)(S, I, {}, !1),
								P = (0, t.$Tqb)(S, I, {});
							l.push(...T), y.push(...P), ($ = []);
						}
					};
					for (const S of s)
						S.added || S.removed ? $.push(S) : (v(), l.push(S), y.push(S));
					return v(), { wordDiffs: l, charDiffs: y };
				}
				function a(o, f, b) {
					const s = o.split(b),
						l = f.split(b);
					let y = 0;
					for (; y < s.length && y < l.length && s[y] === l[y]; ) y++;
					const $ = s.slice(y),
						v = l.slice(y);
					return {
						trimmedOldLines: $,
						trimmedNewLines: v,
						startIndex: y,
						removedStartLines: s.slice(0, y),
					};
				}
				function h(o, f, b) {
					const {
							trimmedOldLines: s,
							trimmedNewLines: l,
							startIndex: y,
							removedStartLines: $,
						} = a(o, f, b),
						v = [],
						S = s,
						I = l;
					y > 0 &&
						(v.push({ value: $.join(b) }),
						s.length > 0 && l.length > 0
							? (v[0].value += b)
							: s.length > 0
								? S.unshift("")
								: l.length > 0 && I.unshift(""));
					const T = c(S, I),
						P = n(T, S, I),
						k = g(P);
					return v.push(...p(k)), v;
				}
				function c(o, f) {
					const b = o.length + 1,
						s = f.length + 1,
						l = Array.from({ length: b }, () => Array(s).fill(0));
					for (let y = 1; y < b; y++)
						for (let $ = 1; $ < s; $++)
							o[y - 1] === f[$ - 1]
								? (l[y][$] = l[y - 1][$ - 1] + 1)
								: (l[y][$] = Math.max(l[y - 1][$], l[y][$ - 1]));
					return l;
				}
				function n(o, f, b) {
					const s = [];
					let l = f.length,
						y = b.length;
					for (; l > 0 || y > 0; )
						l > 0 && y > 0 && f[l - 1] === b[y - 1]
							? (s.unshift({ value: f[l - 1] }), l--, y--)
							: y > 0 && (l === 0 || o[l][y - 1] >= o[l - 1][y])
								? (s.unshift({ added: !0, value: b[y - 1] }), y--)
								: l > 0 &&
									(y === 0 || o[l][y - 1] < o[l - 1][y]) &&
									(s.unshift({ removed: !0, value: f[l - 1] }), l--);
					return s;
				}
				function g(o) {
					const f = [];
					let b = null;
					for (const s of o)
						b && b.added === s.added && b.removed === s.removed
							? (b.value +=
									`
` + s.value)
							: (b && f.push(b), (b = { ...s }));
					return b && f.push(b), f;
				}
				function p(o) {
					const f = [...o];
					for (let b = 0; b < o.length - 1; b++) {
						const s = o[b],
							l = o.find(($, v) => v > b && !$.added),
							y = o.find(($, v) => v > b && !$.removed);
						s.removed
							? l &&
								(f[b].value += `
`)
							: s.added
								? y &&
									(f[b].value += `
`)
								: l && y
									? (f[b].value += `
`)
									: l
										? (l.value =
												`
` + l.value)
										: y &&
											(y.value =
												`
` + y.value);
					}
					return f.filter((b) => b.value !== "");
				}
			},
		),
		