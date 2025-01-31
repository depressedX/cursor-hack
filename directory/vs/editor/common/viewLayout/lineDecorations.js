import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/strings.js';
import '../../../base/common/uint.js';
import './linePart.js';
import '../viewModel.js';
define(
			de[533],
			he([1, 0, 37, 210, 1545, 290]),
			function (ce /*require*/,
 e /*exports*/,
 t /*strings*/,
 i /*uint*/,
 w /*linePart*/,
 E /*viewModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hub = e.$Gub = e.$Fub = void 0),
					(t = mt(t));
				class C {
					constructor(a, h, c, n) {
						(this.startColumn = a),
							(this.endColumn = h),
							(this.className = c),
							(this.type = n),
							(this._lineDecorationBrand = void 0);
					}
					static c(a, h) {
						return (
							a.startColumn === h.startColumn &&
							a.endColumn === h.endColumn &&
							a.className === h.className &&
							a.type === h.type
						);
					}
					static equalsArr(a, h) {
						const c = a.length,
							n = h.length;
						if (c !== n) return !1;
						for (let g = 0; g < c; g++) if (!C.c(a[g], h[g])) return !1;
						return !0;
					}
					static extractWrapped(a, h, c) {
						if (a.length === 0) return a;
						const n = h + 1,
							g = c + 1,
							p = c - h,
							o = [];
						let f = 0;
						for (const b of a)
							b.endColumn <= n ||
								b.startColumn >= g ||
								(o[f++] = new C(
									Math.max(1, b.startColumn - n + 1),
									Math.min(p + 1, b.endColumn - n + 1),
									b.className,
									b.type,
								));
						return o;
					}
					static filter(a, h, c, n) {
						if (a.length === 0) return [];
						const g = [];
						let p = 0;
						for (let o = 0, f = a.length; o < f; o++) {
							const b = a[o],
								s = b.range;
							if (
								s.endLineNumber < h ||
								s.startLineNumber > h ||
								(s.isEmpty() &&
									(b.type === E.InlineDecorationType.Regular ||
										b.type ===
											E.InlineDecorationType.RegularAffectingLetterSpacing))
							)
								continue;
							const l = s.startLineNumber === h ? s.startColumn : c,
								y = s.endLineNumber === h ? s.endColumn : n;
							g[p++] = new C(l, y, b.inlineClassName, b.type);
						}
						return g;
					}
					static e(a, h) {
						const c = [2, 0, 1, 3];
						return c[a] - c[h];
					}
					static compare(a, h) {
						if (a.startColumn !== h.startColumn)
							return a.startColumn - h.startColumn;
						if (a.endColumn !== h.endColumn) return a.endColumn - h.endColumn;
						const c = C.e(a.type, h.type);
						return c !== 0
							? c
							: a.className !== h.className
								? a.className < h.className
									? -1
									: 1
								: 0;
					}
				}
				e.$Fub = C;
				class d {
					constructor(a, h, c, n) {
						(this.startOffset = a),
							(this.endOffset = h),
							(this.className = c),
							(this.metadata = n);
					}
				}
				e.$Gub = d;
				class m {
					constructor() {
						(this.c = []), (this.e = []), (this.f = []), (this.count = 0);
					}
					static g(a) {
						let h = 0;
						for (let c = 0, n = a.length; c < n; c++) h |= a[c];
						return h;
					}
					consumeLowerThan(a, h, c) {
						for (; this.count > 0 && this.c[0] < a; ) {
							let n = 0;
							for (; n + 1 < this.count && this.c[n] === this.c[n + 1]; ) n++;
							c.push(new d(h, this.c[n], this.e.join(" "), m.g(this.f))),
								(h = this.c[n] + 1),
								this.c.splice(0, n + 1),
								this.e.splice(0, n + 1),
								this.f.splice(0, n + 1),
								(this.count -= n + 1);
						}
						return (
							this.count > 0 &&
								h < a &&
								(c.push(new d(h, a - 1, this.e.join(" "), m.g(this.f))),
								(h = a)),
							h
						);
					}
					insert(a, h, c) {
						if (this.count === 0 || this.c[this.count - 1] <= a)
							this.c.push(a), this.e.push(h), this.f.push(c);
						else
							for (let n = 0; n < this.count; n++)
								if (this.c[n] >= a) {
									this.c.splice(n, 0, a),
										this.e.splice(n, 0, h),
										this.f.splice(n, 0, c);
									break;
								}
						this.count++;
					}
				}
				class r {
					static normalize(a, h) {
						if (h.length === 0) return [];
						const c = [],
							n = new m();
						let g = 0;
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							let b = f.startColumn,
								s = f.endColumn;
							const l = f.className,
								y =
									f.type === E.InlineDecorationType.Before
										? w.LinePartMetadata.PSEUDO_BEFORE
										: f.type === E.InlineDecorationType.After
											? w.LinePartMetadata.PSEUDO_AFTER
											: 0;
							if (b > 1) {
								const S = a.charCodeAt(b - 2);
								t.$Qf(S) && b--;
							}
							if (s > 1) {
								const S = a.charCodeAt(s - 2);
								t.$Qf(S) && s--;
							}
							const $ = b - 1,
								v = s - 2;
							(g = n.consumeLowerThan($, g, c)),
								n.count === 0 && (g = $),
								n.insert(v, l, y);
						}
						return (
							n.consumeLowerThan(i.Constants.MAX_SAFE_SMALL_INTEGER, g, c), c
						);
					}
				}
				e.$Hub = r;
			},
		)
