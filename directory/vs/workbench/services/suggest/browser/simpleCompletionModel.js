import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/charCode.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/platform.js';
define(
			de[3652],
			he([1, 0, 24, 120, 132, 12]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*charCode*/,
 w /*filters*/,
 E /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Uc = e.$$Uc = void 0);
				class C {
					constructor(h, c) {
						(this.leadingLineContent = h), (this.characterCountDelta = c);
					}
				}
				e.$$Uc = C;
				var d;
				(function (a) {
					(a[(a.Nothing = 0)] = "Nothing"),
						(a[(a.All = 1)] = "All"),
						(a[(a.Incr = 2)] = "Incr");
				})(d || (d = {}));
				class m {
					constructor(h, c, n, g) {
						(this.h = h),
							(this.j = c),
							(this.replacementIndex = n),
							(this.replacementLength = g),
							(this.e = d.All),
							(this.f = w.$5k.default),
							(this.g = {});
					}
					get items() {
						return this.k(), this.d;
					}
					get stats() {
						return this.k(), this.c;
					}
					get lineContext() {
						return this.j;
					}
					set lineContext(h) {
						(this.j.leadingLineContent !== h.leadingLineContent ||
							this.j.characterCountDelta !== h.characterCountDelta) &&
							((this.e =
								this.j.characterCountDelta < h.characterCountDelta && this.d
									? d.Incr
									: d.All),
							(this.j = h));
					}
					k() {
						this.e !== d.Nothing && this.l();
					}
					l() {
						const h = [],
							{ leadingLineContent: c, characterCountDelta: n } = this.j;
						let g = "",
							p = "";
						const o = this.e === d.All ? this.h : this.d,
							f = [],
							b = !this.g.filterGraceful || o.length > 2e3 ? w.$6k : w.$7k;
						for (let s = 0; s < o.length; s++) {
							const l = o[s],
								y = this.replacementLength,
								$ = y + n;
							if (
								(g.length !== $ &&
									((g = $ === 0 ? "" : c.slice(-$)), (p = g.toLowerCase())),
								(l.word = g),
								$ === 0)
							)
								l.score = w.FuzzyScore.Default;
							else {
								let v = 0;
								for (; v < y; ) {
									const S = g.charCodeAt(v);
									if (S === i.CharCode.Space || S === i.CharCode.Tab) v += 1;
									else break;
								}
								if (v >= $) l.score = w.FuzzyScore.Default;
								else {
									const S = b(
										g,
										p,
										v,
										l.completion.label,
										l.labelLow,
										0,
										this.f,
									);
									if (!S) continue;
									l.score = S;
								}
							}
							(l.idx = s), f.push(l), h.push(l.completion.label.length);
						}
						(this.d = f.sort((s, l) => {
							let y = 0;
							if (
								(((s.completion.isKeyword && s.labelLow !== p) ||
									(l.completion.isKeyword && l.labelLow !== p)) &&
									((y =
										(s.completion.isKeyword ? 1 : 0) -
										(l.completion.isKeyword ? 1 : 0)),
									y !== 0)) ||
								((y = l.score[0] - s.score[0]), y !== 0)
							)
								return y;
							if (
								!c.includes(" ") &&
								s.fileExtLow.length > 0 &&
								l.fileExtLow.length > 0
							) {
								if (
									((y =
										s.labelLowExcludeFileExt.length -
										l.labelLowExcludeFileExt.length),
									y !== 0 || ((y = u(l.fileExtLow) - u(s.fileExtLow)), y !== 0))
								)
									return y;
								y = s.fileExtLow.length - l.fileExtLow.length;
							}
							return y;
						})),
							(this.e = d.Nothing),
							(this.c = {
								pLabelLen: h.length
									? (0, t.$Cb)(h.length - 0.85, h, (s, l) => s - l)
									: 0,
							});
					}
				}
				e.$_Uc = m;
				const r = new Map(
					E.$l
						? [
								["ps1", 0.09],
								["exe", 0.08],
								["bat", 0.07],
								["cmd", 0.07],
								["sh", -0.05],
								["bash", -0.05],
								["zsh", -0.05],
								["fish", -0.05],
								["csh", -0.06],
								["ksh", -0.06],
							]
						: [
								["ps1", 0.05],
								["bat", -0.05],
								["cmd", -0.05],
								["exe", -0.05],
								["sh", 0.05],
								["bash", 0.05],
								["zsh", 0.05],
								["fish", 0.05],
								["csh", 0.04],
								["ksh", 0.04],
								["py", 0.05],
								["pl", 0.05],
							],
				);
				function u(a) {
					return r.get(a) || 0;
				}
			},
		),
		