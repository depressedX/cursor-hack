define(
			de[1631],
			he([1, 0, 48, 17, 64, 290, 38, 171]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lwb = void 0),
					(e.$mwb = r),
					(e.$nwb = u),
					(e.$owb = a);
				class m {
					constructor(n, g, p, o, f) {
						(this.a = n),
							(this.b = g),
							(this.c = p),
							(this.d = o),
							(this.e = f),
							(this.f = Object.create(null)),
							(this.g = null),
							(this.h = null);
					}
					k() {
						(this.g = null), (this.h = null);
					}
					dispose() {
						(this.f = Object.create(null)), this.k();
					}
					reset() {
						(this.f = Object.create(null)), this.k();
					}
					onModelDecorationsChanged() {
						(this.f = Object.create(null)), this.k();
					}
					onLineMappingChanged() {
						(this.f = Object.create(null)), this.k();
					}
					l(n) {
						const g = n.id;
						let p = this.f[g];
						if (!p) {
							const o = n.range,
								f = n.options;
							let b;
							if (f.isWholeLine) {
								const s = this.e.convertModelPositionToViewPosition(
										new t.$hL(o.startLineNumber, 1),
										w.PositionAffinity.Left,
										!1,
										!0,
									),
									l = this.e.convertModelPositionToViewPosition(
										new t.$hL(
											o.endLineNumber,
											this.b.getLineMaxColumn(o.endLineNumber),
										),
										w.PositionAffinity.Right,
									);
								b = new i.$iL(s.lineNumber, s.column, l.lineNumber, l.column);
							} else
								b = this.e.convertModelRangeToViewRange(
									o,
									w.PositionAffinity.Right,
								);
							(p = new E.$5sb(b, f)), (this.f[g] = p);
						}
						return p;
					}
					getMinimapDecorationsInRange(n) {
						return this.m(n, !0, !1).decorations;
					}
					getDecorationsViewportData(n) {
						let g = this.g !== null;
						return (
							(g = g && n.equalsRange(this.h)),
							g || ((this.g = this.m(n, !1, !1)), (this.h = n)),
							this.g
						);
					}
					getInlineDecorationsOnLine(n, g = !1, p = !1) {
						const o = new i.$iL(
							n,
							this.d.getViewLineMinColumn(n),
							n,
							this.d.getViewLineMaxColumn(n),
						);
						return this.m(o, g, p).inlineDecorations[0];
					}
					m(n, g, p) {
						const o = this.d.getDecorationsInRange(
								n,
								this.a,
								(0, C.filterValidationDecorations)(this.c.options),
								g,
								p,
							),
							f = n.startLineNumber,
							b = n.endLineNumber,
							s = [];
						let l = 0;
						const y = [];
						for (let $ = f; $ <= b; $++) y[$ - f] = [];
						for (let $ = 0, v = o.length; $ < v; $++) {
							const S = o[$],
								I = S.options;
							if (!r(this.b, S)) continue;
							const T = this.l(S),
								P = T.range;
							if (((s[l++] = T), I.inlineClassName)) {
								const k = new E.$3sb(
										P,
										I.inlineClassName,
										I.inlineClassNameAffectsLetterSpacing
											? E.InlineDecorationType.RegularAffectingLetterSpacing
											: E.InlineDecorationType.Regular,
									),
									L = Math.max(f, P.startLineNumber),
									D = Math.min(b, P.endLineNumber);
								for (let M = L; M <= D; M++) y[M - f].push(k);
							}
							if (
								I.beforeContentClassName &&
								f <= P.startLineNumber &&
								P.startLineNumber <= b
							) {
								const k = new E.$3sb(
									new i.$iL(
										P.startLineNumber,
										P.startColumn,
										P.startLineNumber,
										P.startColumn,
									),
									I.beforeContentClassName,
									E.InlineDecorationType.Before,
								);
								y[P.startLineNumber - f].push(k);
							}
							if (
								I.afterContentClassName &&
								f <= P.endLineNumber &&
								P.endLineNumber <= b
							) {
								const k = new E.$3sb(
									new i.$iL(
										P.endLineNumber,
										P.endColumn,
										P.endLineNumber,
										P.endColumn,
									),
									I.afterContentClassName,
									E.InlineDecorationType.After,
								);
								y[P.endLineNumber - f].push(k);
							}
						}
						return { decorations: s, inlineDecorations: y };
					}
				}
				e.$lwb = m;
				function r(c, n) {
					return !(
						(n.options.hideInCommentTokens && u(c, n)) ||
						(n.options.hideInStringTokens && a(c, n))
					);
				}
				function u(c, n) {
					return h(c, n.range, (g) => g === d.StandardTokenType.Comment);
				}
				function a(c, n) {
					return h(c, n.range, (g) => g === d.StandardTokenType.String);
				}
				function h(c, n, g) {
					for (let p = n.startLineNumber; p <= n.endLineNumber; p++) {
						const o = c.tokenization.getLineTokens(p),
							f = p === n.startLineNumber,
							b = p === n.endLineNumber;
						let s = f ? o.findTokenIndexAtOffset(n.startColumn - 1) : 0;
						for (
							;
							s < o.getCount() && !(b && o.getStartOffset(s) > n.endColumn - 1);
						) {
							if (!g(o.getStandardTokenType(s))) return !1;
							s++;
						}
					}
					return !0;
				}
			},
		),
		