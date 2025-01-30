import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/charCode.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/strings.js';
import '../../../common/languages.js';
define(
			de[1596],
			he([1, 0, 24, 120, 132, 37, 74]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*charCode*/,
 w /*filters*/,
 E /*strings*/,
 C /*languages*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Cb = e.$0Cb = void 0);
				class d {
					constructor(a, h) {
						(this.leadingLineContent = a), (this.characterCountDelta = h);
					}
				}
				e.$0Cb = d;
				var m;
				(function (u) {
					(u[(u.Nothing = 0)] = "Nothing"),
						(u[(u.All = 1)] = "All"),
						(u[(u.Incr = 2)] = "Incr");
				})(m || (m = {}));
				class r {
					constructor(a, h, c, n, g, p, o = w.$5k.default, f = void 0) {
						(this.clipboardText = f),
							(this.g = r.q),
							(this.c = a),
							(this.d = h),
							(this.e = n),
							(this.f = g),
							(this.k = m.All),
							(this.j = c),
							(this.h = o),
							p === "top" ? (this.g = r.s) : p === "bottom" && (this.g = r.r);
					}
					get lineContext() {
						return this.j;
					}
					set lineContext(a) {
						(this.j.leadingLineContent !== a.leadingLineContent ||
							this.j.characterCountDelta !== a.characterCountDelta) &&
							((this.k =
								this.j.characterCountDelta < a.characterCountDelta && this.l
									? m.Incr
									: m.All),
							(this.j = a));
					}
					get items() {
						return this.o(), this.l;
					}
					getItemsByProvider() {
						return this.o(), this.m;
					}
					getIncompleteProvider() {
						this.o();
						const a = new Set();
						for (const [h, c] of this.getItemsByProvider())
							c.length > 0 && c[0].container.incomplete && a.add(h);
						return a;
					}
					get stats() {
						return this.o(), this.n;
					}
					o() {
						this.k !== m.Nothing && this.p();
					}
					p() {
						this.m = new Map();
						const a = [],
							{ leadingLineContent: h, characterCountDelta: c } = this.j;
						let n = "",
							g = "";
						const p = this.k === m.All ? this.c : this.l,
							o = [],
							f = !this.f.filterGraceful || p.length > 2e3 ? w.$6k : w.$7k;
						for (let b = 0; b < p.length; b++) {
							const s = p[b];
							if (s.isInvalid) continue;
							const l = this.m.get(s.provider);
							l ? l.push(s) : this.m.set(s.provider, [s]);
							const y = s.position.column - s.editStart.column,
								$ = y + c - (s.position.column - this.d);
							if (
								(n.length !== $ &&
									((n = $ === 0 ? "" : h.slice(-$)), (g = n.toLowerCase())),
								(s.word = n),
								$ === 0)
							)
								s.score = w.FuzzyScore.Default;
							else {
								let v = 0;
								for (; v < y; ) {
									const S = n.charCodeAt(v);
									if (S === i.CharCode.Space || S === i.CharCode.Tab) v += 1;
									else break;
								}
								if (v >= $) s.score = w.FuzzyScore.Default;
								else if (typeof s.completion.filterText == "string") {
									const S = f(
										n,
										g,
										v,
										s.completion.filterText,
										s.filterTextLow,
										0,
										this.h,
									);
									if (!S) continue;
									(0, E.$Hf)(s.completion.filterText, s.textLabel) === 0
										? (s.score = S)
										: ((s.score = (0, w.$2k)(
												n,
												g,
												v,
												s.textLabel,
												s.labelLow,
												0,
											)),
											(s.score[0] = S[0]));
								} else {
									const S = f(n, g, v, s.textLabel, s.labelLow, 0, this.h);
									if (!S) continue;
									s.score = S;
								}
							}
							(s.idx = b),
								(s.distance = this.e.distance(s.position, s.completion)),
								o.push(s),
								a.push(s.textLabel.length);
						}
						(this.l = o.sort(this.g)),
							(this.k = m.Nothing),
							(this.n = {
								pLabelLen: a.length
									? (0, t.$Cb)(a.length - 0.85, a, (b, s) => b - s)
									: 0,
							});
					}
					static q(a, h) {
						return a.score[0] > h.score[0]
							? -1
							: a.score[0] < h.score[0]
								? 1
								: a.distance < h.distance
									? -1
									: a.distance > h.distance
										? 1
										: a.idx < h.idx
											? -1
											: a.idx > h.idx
												? 1
												: 0;
					}
					static r(a, h) {
						if (a.completion.kind !== h.completion.kind) {
							if (a.completion.kind === C.CompletionItemKind.Snippet) return 1;
							if (h.completion.kind === C.CompletionItemKind.Snippet) return -1;
						}
						return r.q(a, h);
					}
					static s(a, h) {
						if (a.completion.kind !== h.completion.kind) {
							if (a.completion.kind === C.CompletionItemKind.Snippet) return -1;
							if (h.completion.kind === C.CompletionItemKind.Snippet) return 1;
						}
						return r.q(a, h);
					}
				}
				e.$$Cb = r;
			},
		),
		