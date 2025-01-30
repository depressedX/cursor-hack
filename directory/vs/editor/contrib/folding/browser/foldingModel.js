import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import './foldingRanges.js';
import '../../../../base/common/hash.js';
define(de[1551], he([1, 0, 6, 659, 136]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*foldingRanges*/,
 w /*hash*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$CNb = void 0),
				(e.$DNb = C),
				(e.$ENb = d),
				(e.$FNb = m),
				(e.$GNb = r),
				(e.$HNb = u),
				(e.$INb = a),
				(e.$JNb = h),
				(e.$KNb = c),
				(e.$LNb = n),
				(e.$MNb = g),
				(e.$NNb = p);
			class E {
				get regions() {
					return this.c;
				}
				get textModel() {
					return this.a;
				}
				get decorationProvider() {
					return this.b;
				}
				constructor(f, b) {
					(this.e = new t.$re()),
						(this.onDidChange = this.e.event),
						(this.a = f),
						(this.b = b),
						(this.c = new i.$ANb(new Uint32Array(0), new Uint32Array(0))),
						(this.d = []);
				}
				toggleCollapseState(f) {
					if (!f.length) return;
					f = f.sort((s, l) => s.regionIndex - l.regionIndex);
					const b = {};
					this.b.changeDecorations((s) => {
						let l = 0,
							y = -1,
							$ = -1;
						const v = (S) => {
							for (; l < S; ) {
								const I = this.c.getEndLineNumber(l),
									T = this.c.isCollapsed(l);
								if (I <= y) {
									const P = this.regions.getSource(l) !== i.FoldSource.provider;
									s.changeDecorationOptions(
										this.d[l],
										this.b.getDecorationOption(T, I <= $, P),
									);
								}
								T && I > $ && ($ = I), l++;
							}
						};
						for (const S of f) {
							const I = S.regionIndex,
								T = this.d[I];
							if (T && !b[T]) {
								(b[T] = !0), v(I);
								const P = !this.c.isCollapsed(I);
								this.c.setCollapsed(I, P),
									(y = Math.max(y, this.c.getEndLineNumber(I)));
							}
						}
						v(this.c.length);
					}),
						this.e.fire({ model: this, collapseStateChanged: f });
				}
				removeManualRanges(f) {
					const b = new Array(),
						s = (l) => {
							for (const y of f)
								if (
									!(
										y.startLineNumber > l.endLineNumber ||
										l.startLineNumber > y.endLineNumber
									)
								)
									return !0;
							return !1;
						};
					for (let l = 0; l < this.c.length; l++) {
						const y = this.c.toFoldRange(l);
						(y.source === i.FoldSource.provider || !s(y)) && b.push(y);
					}
					this.updatePost(i.$ANb.fromFoldRanges(b));
				}
				update(f, b) {
					const s = this.f(b),
						l = i.$ANb.sanitizeAndMerge(f, s, this.a.getLineCount(), b);
					this.updatePost(i.$ANb.fromFoldRanges(l));
				}
				updatePost(f) {
					const b = [];
					let s = -1;
					for (let l = 0, y = f.length; l < y; l++) {
						const $ = f.getStartLineNumber(l),
							v = f.getEndLineNumber(l),
							S = f.isCollapsed(l),
							I = f.getSource(l) !== i.FoldSource.provider,
							T = {
								startLineNumber: $,
								startColumn: this.a.getLineMaxColumn($),
								endLineNumber: v,
								endColumn: this.a.getLineMaxColumn(v) + 1,
							};
						b.push({
							range: T,
							options: this.b.getDecorationOption(S, v <= s, I),
						}),
							S && v > s && (s = v);
					}
					this.b.changeDecorations(
						(l) => (this.d = l.deltaDecorations(this.d, b)),
					),
						(this.c = f),
						this.e.fire({ model: this });
				}
				f(f) {
					const b = [];
					for (let s = 0, l = this.c.length; s < l; s++) {
						let y = this.regions.isCollapsed(s);
						const $ = this.regions.getSource(s);
						if (y || $ !== i.FoldSource.provider) {
							const v = this.c.toFoldRange(s),
								S = this.a.getDecorationRange(this.d[s]);
							S &&
								(y &&
									f?.startsInside(S.startLineNumber + 1, S.endLineNumber) &&
									(y = !1),
								b.push({
									startLineNumber: S.startLineNumber,
									endLineNumber: S.endLineNumber,
									type: v.type,
									isCollapsed: y,
									source: $,
								}));
						}
					}
					return b;
				}
				getMemento() {
					const f = this.f(),
						b = [],
						s = this.a.getLineCount();
					for (let l = 0, y = f.length; l < y; l++) {
						const $ = f[l];
						if (
							$.startLineNumber >= $.endLineNumber ||
							$.startLineNumber < 1 ||
							$.endLineNumber > s
						)
							continue;
						const v = this.g($.startLineNumber + 1, $.endLineNumber);
						b.push({
							startLineNumber: $.startLineNumber,
							endLineNumber: $.endLineNumber,
							isCollapsed: $.isCollapsed,
							source: $.source,
							checksum: v,
						});
					}
					return b.length > 0 ? b : void 0;
				}
				applyMemento(f) {
					if (!Array.isArray(f)) return;
					const b = [],
						s = this.a.getLineCount();
					for (const y of f) {
						if (
							y.startLineNumber >= y.endLineNumber ||
							y.startLineNumber < 1 ||
							y.endLineNumber > s
						)
							continue;
						const $ = this.g(y.startLineNumber + 1, y.endLineNumber);
						(!y.checksum || $ === y.checksum) &&
							b.push({
								startLineNumber: y.startLineNumber,
								endLineNumber: y.endLineNumber,
								type: void 0,
								isCollapsed: y.isCollapsed ?? !0,
								source: y.source ?? i.FoldSource.provider,
							});
					}
					const l = i.$ANb.sanitizeAndMerge(this.c, b, s);
					this.updatePost(i.$ANb.fromFoldRanges(l));
				}
				g(f, b) {
					return (
						(0, w.$Aj)(this.a.getLineContent(f) + this.a.getLineContent(b)) %
						1e6
					);
				}
				dispose() {
					this.b.removeDecorations(this.d);
				}
				getAllRegionsAtLine(f, b) {
					const s = [];
					if (this.c) {
						let l = this.c.findRange(f),
							y = 1;
						for (; l >= 0; ) {
							const $ = this.c.toRegion(l);
							(!b || b($, y)) && s.push($), y++, (l = $.parentIndex);
						}
					}
					return s;
				}
				getRegionAtLine(f) {
					if (this.c) {
						const b = this.c.findRange(f);
						if (b >= 0) return this.c.toRegion(b);
					}
					return null;
				}
				getRegionsInside(f, b) {
					const s = [],
						l = f ? f.regionIndex + 1 : 0,
						y = f ? f.endLineNumber : Number.MAX_VALUE;
					if (b && b.length === 2) {
						const $ = [];
						for (let v = l, S = this.c.length; v < S; v++) {
							const I = this.c.toRegion(v);
							if (this.c.getStartLineNumber(v) < y) {
								for (; $.length > 0 && !I.containedBy($[$.length - 1]); )
									$.pop();
								$.push(I), b(I, $.length) && s.push(I);
							} else break;
						}
					} else
						for (let $ = l, v = this.c.length; $ < v; $++) {
							const S = this.c.toRegion($);
							if (this.c.getStartLineNumber($) < y) (!b || b(S)) && s.push(S);
							else break;
						}
					return s;
				}
			}
			e.$CNb = E;
			function C(o, f, b) {
				const s = [];
				for (const l of b) {
					const y = o.getRegionAtLine(l);
					if (y) {
						const $ = !y.isCollapsed;
						if ((s.push(y), f > 1)) {
							const v = o.getRegionsInside(
								y,
								(S, I) => S.isCollapsed !== $ && I < f,
							);
							s.push(...v);
						}
					}
				}
				o.toggleCollapseState(s);
			}
			function d(o, f, b = Number.MAX_VALUE, s) {
				const l = [];
				if (s && s.length > 0)
					for (const y of s) {
						const $ = o.getRegionAtLine(y);
						if ($ && ($.isCollapsed !== f && l.push($), b > 1)) {
							const v = o.getRegionsInside(
								$,
								(S, I) => S.isCollapsed !== f && I < b,
							);
							l.push(...v);
						}
					}
				else {
					const y = o.getRegionsInside(
						null,
						($, v) => $.isCollapsed !== f && v < b,
					);
					l.push(...y);
				}
				o.toggleCollapseState(l);
			}
			function m(o, f, b, s) {
				const l = [];
				for (const y of s) {
					const $ = o.getAllRegionsAtLine(
						y,
						(v, S) => v.isCollapsed !== f && S <= b,
					);
					l.push(...$);
				}
				o.toggleCollapseState(l);
			}
			function r(o, f, b) {
				const s = [];
				for (const l of b) {
					const y = o.getAllRegionsAtLine(l, ($) => $.isCollapsed !== f);
					y.length > 0 && s.push(y[0]);
				}
				o.toggleCollapseState(s);
			}
			function u(o, f, b, s) {
				const l = ($, v) =>
						v === f && $.isCollapsed !== b && !s.some((S) => $.containsLine(S)),
					y = o.getRegionsInside(null, l);
				o.toggleCollapseState(y);
			}
			function a(o, f, b) {
				const s = [];
				for (const $ of b) {
					const v = o.getAllRegionsAtLine($, void 0);
					v.length > 0 && s.push(v[0]);
				}
				const l = ($) =>
						s.every((v) => !v.containedBy($) && !$.containedBy(v)) &&
						$.isCollapsed !== f,
					y = o.getRegionsInside(null, l);
				o.toggleCollapseState(y);
			}
			function h(o, f, b) {
				const s = o.textModel,
					l = o.regions,
					y = [];
				for (let $ = l.length - 1; $ >= 0; $--)
					if (b !== l.isCollapsed($)) {
						const v = l.getStartLineNumber($);
						f.test(s.getLineContent(v)) && y.push(l.toRegion($));
					}
				o.toggleCollapseState(y);
			}
			function c(o, f, b) {
				const s = o.regions,
					l = [];
				for (let y = s.length - 1; y >= 0; y--)
					b !== s.isCollapsed(y) && f === s.getType(y) && l.push(s.toRegion(y));
				o.toggleCollapseState(l);
			}
			function n(o, f) {
				let b = null;
				const s = f.getRegionAtLine(o);
				if (s !== null && ((b = s.startLineNumber), o === b)) {
					const l = s.parentIndex;
					l !== -1 ? (b = f.regions.getStartLineNumber(l)) : (b = null);
				}
				return b;
			}
			function g(o, f) {
				let b = f.getRegionAtLine(o);
				if (b !== null && b.startLineNumber === o) {
					if (o !== b.startLineNumber) return b.startLineNumber;
					{
						const s = b.parentIndex;
						let l = 0;
						for (
							s !== -1 && (l = f.regions.getStartLineNumber(b.parentIndex));
							b !== null;
						)
							if (b.regionIndex > 0) {
								if (
									((b = f.regions.toRegion(b.regionIndex - 1)),
									b.startLineNumber <= l)
								)
									return null;
								if (b.parentIndex === s) return b.startLineNumber;
							} else return null;
					}
				} else if (f.regions.length > 0)
					for (b = f.regions.toRegion(f.regions.length - 1); b !== null; ) {
						if (b.startLineNumber < o) return b.startLineNumber;
						b.regionIndex > 0
							? (b = f.regions.toRegion(b.regionIndex - 1))
							: (b = null);
					}
				return null;
			}
			function p(o, f) {
				let b = f.getRegionAtLine(o);
				if (b !== null && b.startLineNumber === o) {
					const s = b.parentIndex;
					let l = 0;
					if (s !== -1) l = f.regions.getEndLineNumber(b.parentIndex);
					else {
						if (f.regions.length === 0) return null;
						l = f.regions.getEndLineNumber(f.regions.length - 1);
					}
					for (; b !== null; )
						if (b.regionIndex < f.regions.length) {
							if (
								((b = f.regions.toRegion(b.regionIndex + 1)),
								b.startLineNumber >= l)
							)
								return null;
							if (b.parentIndex === s) return b.startLineNumber;
						} else return null;
				} else if (f.regions.length > 0)
					for (b = f.regions.toRegion(0); b !== null; ) {
						if (b.startLineNumber > o) return b.startLineNumber;
						b.regionIndex < f.regions.length
							? (b = f.regions.toRegion(b.regionIndex + 1))
							: (b = null);
					}
				return null;
			}
		}),
		